import{_ as k,D as h,c as n,I as e,w as a,a5 as d,o as r,j as i,a as s}from"./chunks/framework.BfvSibfy.js";const I=JSON.parse('{"title":"Extending DimensionalData","description":"","frontmatter":{},"headers":[],"relativePath":"extending_dd.md","filePath":"extending_dd.md","lastUpdated":null}'),p={name:"extending_dd.md"},o=d("",28),g=i("p",null,[s("This is the implementation definition for "),i("code",null,"DimArray"),s(":")],-1),y=i("div",{class:"language-julia vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"julia"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"julia"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," using"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," DimensionalData, Interfaces")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"julia"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," @implements"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," DimensionalData"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"DimArrayInterface{("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":refdims"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},","),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":name"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},","),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":metadata"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")} DimArray ["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"rand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"X"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"), "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"Y"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")), "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"zeros"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"Z"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))]")])])])],-1),c=i("p",null,[s("See the "),i("a",{href:"/DimensionalData.jl/previews/PR717/api/reference#DimensionalData.DimArrayInterface"},[i("code",null,"DimensionalData.DimArrayInterface")]),s(" docs for options. We can test it with:")],-1),u=i("div",{class:"language-julia vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"julia"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"julia"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Interfaces"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"test"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(DimensionalData"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"DimArrayInterface)")])])])],-1),m=i("div",{class:"language- vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"}),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"Testing "),i("span",{style:{"--shiki-light":"#0366d6","--shiki-dark":"#2188ff"}},"DimArrayInterface"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}}," is implemented for "),i("span",{style:{"--shiki-light":"#0366d6","--shiki-dark":"#2188ff"}},"DimArray")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"Mandatory components")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"dims"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": (defines a `dims` method ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"       dims are updated on getindex ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"])")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"refdims_base"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": `refdims` returns a tuple of Dimension or empty ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"ndims"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": number of dims matches dimensions of array ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"size"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": length of dims matches dimensions of array ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"rebuild_parent"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": rebuild parent from args ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"rebuild_dims"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": rebuild paaarnet and dims from args ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"rebuild_parent_kw"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": rebuild parent from args ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"rebuild_dims_kw"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": rebuild dims from args ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"rebuild"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": all rebuild arguments and keywords are accepted ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"Optional components")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"refdims"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": (refdims are updated in args rebuild ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"          refdims are updated in kw rebuild ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"          dropped dimensions are added to refdims ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"])")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"name"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": (rebuild updates name in arg rebuild ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"       rebuild updates name in kw rebuild ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"])")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"metadata"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": (rebuild updates metadata in arg rebuild ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"           rebuild updates metadata in kw rebuild ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"])")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"true")])])])],-1),E=i("p",null,[s("The implementation definition for "),i("code",null,"DimStack"),s(":")],-1),f=i("div",{class:"language-julia vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"julia"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"julia"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," @implements"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," DimensionalData"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"DimStackInterface{("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":refdims"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},","),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},":metadata"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")} DimStack ["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"DimStack"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"zeros"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"Z"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))), "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"DimStack"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"rand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"X"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"), "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"Y"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))), "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"DimStack"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"rand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"X"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"), "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"Y"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")), "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"rand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"X"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"10"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")))]")])])])],-1),b=i("p",null,[s("See the "),i("a",{href:"/DimensionalData.jl/previews/PR717/api/reference#DimensionalData.DimStackInterface"},[i("code",null,"DimensionalData.DimStackInterface")]),s(" docs for options. We can test it with:")],-1),D=i("div",{class:"language-julia vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"julia"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"julia"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},">"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Interfaces"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"."),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"test"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(DimensionalData"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"DimStackInterface)")])])])],-1),C=i("div",{class:"language- vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"}),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",null,[i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"Testing "),i("span",{style:{"--shiki-light":"#0366d6","--shiki-dark":"#2188ff"}},"DimStackInterface"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}}," is implemented for "),i("span",{style:{"--shiki-light":"#0366d6","--shiki-dark":"#2188ff"}},"DimStack")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"Mandatory components")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"dims"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": (defines a `dims` method ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"       dims are updated on getindex ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"])")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"refdims_base"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": `refdims` returns a tuple of Dimension or empty ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"ndims"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": number of dims matches ndims of stack ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"size"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": length of dims matches size of stack ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"rebuild_parent"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": rebuild parent from args ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"rebuild_dims"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": rebuild paaarnet and dims from args ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"rebuild_layerdims"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": rebuild paaarnet and dims from args ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"rebuild_dims_kw"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": rebuild dims from args ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"rebuild_parent_kw"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": rebuild parent from args ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"rebuild_layerdims_kw"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": rebuild parent from args ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"rebuild"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": all rebuild arguments and keywords are accepted ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#959da5","--shiki-dark":"#959da5"}},"Optional components")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"refdims"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": (refdims are updated in args rebuild ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"          refdims are updated in kw rebuild ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"          dropped dimensions are added to refdims ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"])")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#5a32a3","--shiki-dark":"#b392f0"}},"metadata"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},": (rebuild updates metadata in arg rebuild ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"           rebuild updates metadata in kw rebuild ["),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},", "),i("span",{style:{"--shiki-light":"#28a745","--shiki-dark":"#34d058"}},"true"),i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"])")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8"}},"true")])])])],-1);function F(_,v,j,A,w,x){const t=h("PluginTabsTab"),l=h("PluginTabs");return r(),n("div",null,[o,e(l,null,{default:a(()=>[e(t,{label:"array"},{default:a(()=>[g,y,c,u,m]),_:1}),e(t,{label:"stack"},{default:a(()=>[E,f,b,D,C]),_:1})]),_:1})])}const S=k(p,[["render",F]]);export{I as __pageData,S as default};
