using DimensionalData, Statistics, Test, BenchmarkTools, Unitful

using DimensionalData: val, basetype, slicedims, 
      dims2indices, formatdims, @dim,
      reducedims, dimnum, basetype, X, Y, Z, Time


# Dims creation macro
@dim TestDim "Test dimension" 

@test longname(TestDim) == "Test dimension"
# @test shortname(TestDim) == "TestDim"
@test val(TestDim(:test)) == :test
@test metadata(TestDim(1, "metadata")) == "metadata"


# Basic dim and array initialisation

a = ones(5, 4)
da = DimensionalArray(a, (X((140, 148)), Y((2, 11))))
dimz = dims(da)
@test slicedims(dimz, (2:4, 3)) == ((X(LinRange(142,146,3)),), (Y(8.0),))

a = [1 2 3 4 
     2 3 4 5
     3 4 5 6]
da = DimensionalArray(a, (X((143, 145)), Y((-38, -35))))
dimz = dims(da)

@test dimz == (X(LinRange(143, 145, 3)), Y(LinRange(-38, -35, 4)))
@test typeof(dimz) == Tuple{X{LinRange{Float64},Nothing},Y{LinRange{Float64},Nothing}}


# Dim Primitives

dz = (X(), Y())
@test permutedims((Y(1:2), X(1)), dz) == (X(1), Y(1:2))
@test permutedims((X(1),), dz) == (X(1), nothing)

@test permutedims((Y(), X()), dz) == (X(:), Y(:))
@test permutedims([Y(), X()], dz) == (X(:), Y(:))
@test permutedims((Y, X),     dz) == (X(:), Y(:))
@test permutedims([Y, X],     dz) == (X(:), Y(:))

@test permutedims(dz, (Y(), X())) == (Y(:), X(:))
@test permutedims(dz, [Y(), X()]) == (Y(:), X(:))
@test permutedims(dz, (Y, X)    ) == (Y(:), X(:))
@test permutedims(dz, [Y, X]    ) == (Y(:), X(:))


@test slicedims(dimz, (1:2, 3)) == ((X(LinRange(143,144,2)),), (Y(-36.0),))
@test slicedims(dimz, (2:3, :)) == ((X(LinRange(144,145,2)), Y(LinRange(-38.0,-35.0,4))), ())

emptyval = Colon()
@test dims2indices(dimz, (Y(),), emptyval) == (Colon(), Colon())
@test dims2indices(dimz, (Y(1),), emptyval) == (Colon(), 1)
# Time is just ignored if it's not in dims. Should this be an error?
@test dims2indices(dimz, (Time(4), X(2))) == (2, Colon())
@test dims2indices(dimz, (Y(2), X(3:7)), emptyval) == (3:7, 2)
@test dims2indices(dimz, (X(2), Y([1, 3, 4])), emptyval) == (2, [1, 3, 4])
@test dims2indices(da, (X(2), Y([1, 3, 4])), emptyval) == (2, [1, 3, 4])
emptyval=()
@test dims2indices(dimz, (Y,), emptyval) == ((), Colon())
@test dims2indices(dimz, (Y, X), emptyval) == (Colon(), Colon())
@test dims2indices(da, X, emptyval) == (Colon(), ())

@test dimnum(da, X) == 1
@test dimnum(da, Y()) == 2
@test dimnum(da, (Y, X())) == (2, 1)

# @test mapdims(x->2x, X(3)) == X(6)
# @test mapdims(x->x^2, (X(3), Time(10))) == (X(9), Time(100))

# @test getdim(dimz, X) == dimz[1]
# @test getdim(dimz, Y) == dimz[2]
# @test_throws ArgumentError getdim(dimz, Time)

# Not being used currently
# @test hasdim(dimz, Time) == false
# @test hasdim(dimz, X) == true
# @test hasdim(da, Time()) == false
# @test hasdim(da, X()) == true
# @test hasdim(dimz, (Time(), Y(), X())) == false
# @test hasdim(dimz, (X, Y)) == true
# @test hasdim(typeof(dimz), X) == true
# @test hasdim(typeof(dimz), Time) == false

a = [1 2; 3 4]
dimz = (X((143, 145)), Y((-38, -36)))
g = DimensionalArray(a, dimz)

@test reducedims((X(:), Y(1:5))) == (X(1), Y(1))



# Indexing: getindex/view with rebuild and dimension slicing 

# getindex for single integers returns values
@test g[X(1), Y(2)] == 2
@test g[X(2), Y(2)] == 4
# for ranges it returns new DimensionArray slices with the right dimensions
a = g[X(1:2), Y(1)]
@test a == [1, 3]
@test typeof(a) <: DimensionalArray{Int,1}
@test dims(a) == (X(LinRange(143.0, 145.0, 2)),)
@test refdims(a) == (Y(-38.0),)
# @test bounds(a, X()) == (143, 145)

a = g[X(1), Y(1:2)]
@test a == [1, 2]
@test typeof(a) <: DimensionalArray{Int,1}
@test dims(a) == (Y(LinRange(-38, -36, 2)),)
@test refdims(a) == (X(143.0),)
# @test bounds(a, X(), Y()) == (143, (-38, -36))

a = g[Y(:)]

dims2indices(g, (Y(:),))
@test a == [1 2; 3 4]
@test typeof(a) <: DimensionalArray{Int,2}
@test dims(a) == (X(LinRange(143, 145, 2)), Y(LinRange(-38, -36, 2)))
@test refdims(a) == ()
@test typeof(dims(a)) <: Tuple{<:X,<:Y}


# view() returns DimensionArray containing views
v = view(g, Y(1), X(1))
@test v[] == 1
@test typeof(v) <: DimensionalArray{Int,0}
@test typeof(parent(v)) <:SubArray{Int,0}
@test typeof(dims(v)) == Tuple{}
@test dims(v) == ()
@test refdims(v) == (X(143.0), Y(-38.0))

v = view(g, Y(1), X(1:2))
@test v == [1, 3]
@test typeof(v) <: DimensionalArray{Int,1}
@test typeof(parent(v)) <: SubArray{Int,1}
@test typeof(dims(v)) <: Tuple{<:X}
@test dims(v) == (X(LinRange(143, 145, 2)),)
@test refdims(v) == (Y(-38.0),)

v = view(g, Y(1:2), X(1:1))
@test v == [1 2]
@test typeof(v) <: DimensionalArray{Int,2}
@test typeof(parent(v)) <: SubArray{Int,2}
@test typeof(dims(v)) <: Tuple{<:X,<:Y}
@test dims(v) == (X(LinRange(143.0, 143, 1)), Y(LinRange(-38, -36, 2)))

v = view(g, Y(Base.OneTo(2)), X(1))
@test v == [1, 2]
@test typeof(parent(v)) <: SubArray{Int,1}
@test typeof(dims(v)) <: Tuple{<:Y}
@test dims(v) == (Y(LinRange(-38, -36, 2)),)
@test refdims(v) == (X(143.0),)

x = [1 2; 3 4]

# Arbitrary dimension names also work
a = [1 2 3 4 
     3 4 5 6 
     4 5 6 7]
dimz = (Dim{:row}((10, 30)), Dim{:column}((-20, 10)))
g = DimensionalArray(a, dimz)
@test g[Dim{:row}(2)] == [3, 4, 5, 6]
@test g[Dim{:column}(4)] == [4, 6, 7]
@test g[Dim{:column}(1), Dim{:row}(3)] == 4

# Dimension reducing methods

a = [1 2 
     3 4]
dimz = (X((143, 145)), Y((-38, -36)))
g = DimensionalArray(a, dimz)

# sum, mean etc with dims kwarg
@test sum(g; dims=X()) == sum(g; dims=1)
@test sum(g; dims=Y()) == sum(g; dims=2) 
@test dims(sum(g; dims=Y())) == (X(LinRange(143.0, 145.0, 2)), Y(LinRange(-38.0, -38.0, 1)))
@test prod(g; dims=X()) == [3 8]
@test prod(g; dims=Y()) == [2 12]'
@test dims(prod(g; dims=X())) == (X(LinRange(143.0, 143.0, 1)), Y(LinRange(-38.0, -36.0, 2)))
@test maximum(g; dims=X()) == [3 4]
@test maximum(g; dims=Y()) == [2 4]'
@test minimum(g; dims=X()) == [1 2]
@test minimum(g; dims=Y()) == [1 3]'
@test dims(minimum(g; dims=X())) == (X(LinRange(143.0, 143.0, 1)), Y(LinRange(-38.0, -36.0, 2)))
@test mean(g; dims=X()) == [2.0 3.0]
@test mean(g; dims=Y()) == [1.5 3.5]'
@test dims(mean(g; dims=Y())) == (X(LinRange(143.0, 145.0, 2)), Y(LinRange(-38.0, -38.0, 1)))

@test std(g; dims=X()) == [1.4142135623730951 1.4142135623730951]
@test std(g; dims=Y()) == [0.7071067811865476 0.7071067811865476]'
@test var(g; dims=X()) == [2.0 2.0]
@test var(g; dims=Y()) == [0.5 0.5]'
@test dims(var(g; dims=Y())) == (X(LinRange(143.0, 145.0, 2)), Y(LinRange(-38.0, -38.0, 1)))

# mapslices
a = [1 2 3 4
     3 4 5 6
     5 6 7 8]
da = DimensionalArray(a, (Y(10:30), Time(1:4)))
ms = mapslices(sum, da; dims=Y)
@test ms == [9 12 15 18]
@test dims(ms) == (Time(LinRange(1.0, 4.0, 4)),)
@test refdims(ms) == (Y(10.0),)
ms = mapslices(sum, da; dims=Time)
@test parent(ms) == [10 18 26]'
@test dims(ms) == (Y(LinRange(10.0, 30.0, 3)),)
@test refdims(ms) == (Time(1.0),)


# Iteration methods

# eachslice
da = DimensionalArray(a, (Y(10:30), Time(1:4)))
@test [mean(s) for s in eachslice(da; dims=Time)] == [3.0, 4.0, 5.0, 6.0]
slices = [s .* 2 for s in eachslice(da; dims=Y)] 
@test slices[1] == [2, 4, 6, 8]
@test slices[2] == [6, 8, 10, 12]
@test slices[3] == [10, 12, 14, 16]
dims(slices[1]) == (Time(1.0:1.0:4.0),)
slices = [s .* 2 for s in eachslice(da; dims=Time)] 
@test slices[1] == [2, 6, 10]
dims(slices[1]) == (Y(10.0:10.0:30.0),)


# Dimension reordering methods

da = DimensionalArray(zeros(5, 4), (Y(10:20), X(1:4)))
tda = transpose(da)
@test dims(tda) == (X(LinRange(1.0, 4.0, 4)), Y(LinRange(10.0, 20.0, 5)))
@test size(tda) == (4, 5)
ada = adjoint(da)
@test dims(ada) == (X(LinRange(1.0, 4.0, 4)), Y(LinRange(10.0, 20.0, 5)))
@test size(ada) == (4, 5)

# Array dispatch
dsp = permutedims(da)
@test parent(dsp) == permutedims(parent(da))
@test dims(dsp) == reverse(dims(da))
da = DimensionalArray(ones(5, 2, 4), (Y(10:20), Time(10:11), X(1:4)))
dsp = permutedims(da, [3, 1, 2])
dsp = permutedims(da, (3, 1, 2))
# Dim dispatch
dsp = permutedims(da, [X, Y, Time])
dsp = permutedims(da, (X, Y, Time))
dsp = permutedims(da, [X(), Y(), Time()])
dsp = permutedims(da, (X(), Y(), Time()))

@test dims(dsp) == (X(LinRange(1.0, 4.0, 4)), Y(LinRange(10.0, 20.0, 5)), Time(LinRange(10.0, 11.0, 2)))


# Dimension mirroring methods

# Need to think about dims for these, currently (Y, Y) etc.
# But you can't index (Y, Y). It will plot correctly at least
a = rand(5, 4)
da = DimensionalArray(a, (Y(10:20), X(1:4)))

cvda = cov(da; dims=X)
@test cvda == cov(a; dims=2)
crda = cor(da; dims=Y)
@test crda == cor(a; dims=1)

# These need fixes in base. kwargs are ::Integer so we can't add methods
# or dispatch on AbstractDimension in underscore _methods
accumulate
cumsum
cumprod


# Broadcast 
da = DimensionalArray(ones(5, 2, 4), (Y(10:20), Time(10:11), X(1:4)))
da2 = da .* 2
@test da2 == ones(5, 2, 4) .* 2
@test dims(da2) == (Y(LinRange(10, 20, 5)), Time(LinRange(10.0, 11.0, 2)), X(LinRange(1.0, 4.0, 4)))


# Select
a = [1 2  3  4
     5 6  7  8
     9 10 11 12]
da = DimensionalArray(a, (Y(10:30), Time(1:4)))
# At() is the default
@test select(da, Y([10, 30]), Time([1, 4])) == [1 4; 9 12]
@test_throws ArgumentError select(da, Y([9, 30]), Time([1, 4]))
@test select(da, Y(20:10:30), Time.At(1)) == [5, 9]
@test selectview(da, Y.at(20), Time(3:4)) == [7, 8]
@test selectview(da, Y.between(9, 31), Time.At(3:4)) == [3 4; 7 8; 11 12]
@test selectview(da, Y.Between(9, 31), Time.Near(3:4)) == [3 4; 7 8; 11 12]
@test selectview(da, Y(Near(22)), Time(3:4)) == [7, 8]
@test selectview(da, Y.near(17), Time.Near([1.3, 3.3])) == [5, 7]

# Unitful units
dimz = (Time(1.0u"s":1.0u"s":3.0u"s"), Y((1u"km", 4u"km")))
da = DimensionalArray(a, dimz)
@test select(da, Y.between(2u"km", 3.9u"km") , Time(3.0u"s")) == [10, 11]

# Ad-hoc categorical indices. They work, but could be formalized?
# Should they always use Exact() no matter what type you pass in?
dimz = (Time([:one, :two, :three]), Y([:a, :b, :c, :d]))
da = DimensionalArray(a, dimz)
@test select(da, Time((:one, :two)), Y(:b)) == [2, 6]
@test select(da, Time([:one, :three]), Y((:b, :d))) == [2 3 4; 10 11 12]



#= Benchmarks

Test how much the recalculation of coordinates and dim types
costs over standard getindex/view.

Indexing with Y(1) has no overhead at all, but ranges
have an overhead for constructing the neew GeoArray and slicing
the dimensions.
=#

g = DimensionalArray(rand(100, 50), (X(51:150), Y(-40:9)))

println("\n\nPerformance of view()\n")
vi1(g) = view(parent(g), 1, 2)
vd1(g) = view(g, X(1), Y(2))
vi2(g) = view(parent(g), :, :)
vd2(g) = view(g, X(:), Y(:))
vi3(g) = view(parent(g), 10:40, 1:20)
vd3(g) = view(g, X(10:40), Y(1:20))

println("Parent indices with Number")
@btime vi1($g)
println("Dims with Number")
@btime vd1($g)
println()
println("Parent indices with Colon")
@btime vi2($g);
println("Dims with Colon")
@btime vd2($g);
println()
println("Parent indices with UnitRange")
@btime vi3($g);
println("Dims with UnitRange")
@btime vd3($g);

println("\n\nPerformance of getindex()\n")
i1(g) = parent(g)[10, 20]
d1(g) = g[Y(10), X(20)]
i2(g) = parent(g)[:, :]
d2(g) = g[Y(:), X(:)]
i3(g) = parent(g)[1:20, 10:40]
d3(g) = g[Y(1:20), X(10:40)]

println("Parent indices with Number")
@btime i1($g)
println("Dims with Number")
@btime d1($g)
println()
println("Parent indices with Colon")
@btime i2($g)
println("Dims with Colon")
@btime d2($g)
println()
println("Parent indices with UnitRange")
@btime i3($g)
println("Dims with UnitRange")
@btime d3($g);

a = rand(5, 4, 3);
dimz = (Y((1u"m", 5u"m")), X(1:4), Time(1:3))
da = DimensionalArray(a, dimz)
println("eachslice: normal, numbers + rebuild, dims + rebuild")
@btime (() -> eachslice($a; dims=2))();
@btime (() -> eachslice($da; dims=2))();
@btime (() -> eachslice($da; dims=Y))();
println("eachslice to vector: normal, numbers + rebuild, dims + rebuild")
@btime [slice for slice in eachslice($a; dims=2)];
@btime [slice for slice in eachslice($da; dims=2)];
@btime [slice for slice in eachslice($da; dims=X)];
@test [slice for slice in eachslice(da; dims=1)] == [slice for slice in eachslice(da; dims=Y)]
println("mean: normal, numbers + rebuild, dims + rebuild")
@btime mean($a; dims=2);
@btime mean($da; dims=2);
@btime mean($da; dims=X);
println("permutedims: normal, numbers + rebuild, dims + rebuild")
@btime permutedims($a, (2, 1, 3))
@btime permutedims($da, (2, 1, 3))
@btime permutedims($da, (Y(), X(), Time()))
println("reverse: normal, numbers + rebuild, dims + rebuild")
@btime reverse($a; dims=1) 
@btime reverse($da; dims=1) 
@btime reverse($da; dims=Y()) 
