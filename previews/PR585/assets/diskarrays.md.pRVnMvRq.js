import{_ as a,c as t,o as e,V as r}from"./chunks/framework.bhMsO5S_.js";const m=JSON.parse('{"title":"DiskArrays.jl compatability","description":"","frontmatter":{},"headers":[],"relativePath":"diskarrays.md","filePath":"diskarrays.md","lastUpdated":null}'),i={name:"diskarrays.md"},s=r('<h1 id="DiskArrays.jl-compatability" tabindex="-1">DiskArrays.jl compatability <a class="header-anchor" href="#DiskArrays.jl-compatability" aria-label="Permalink to &quot;DiskArrays.jl compatability {#DiskArrays.jl-compatability}&quot;">​</a></h1><p><a href="https://github.com/meggart/DiskArrays.jl" target="_blank" rel="noreferrer">DiskArrays.jl</a> enables lazy, chunked application of:</p><ul><li><p>broadcast</p></li><li><p>reductions</p></li><li><p>iteration</p></li><li><p>generators</p></li><li><p>zip</p></li></ul><p>It is rarely used directly, but is present in most disk and cloud based spatial data packages in julia, including: ArchGDAL.jl, NetCDF.jl, Zarr.jl, NCDatasets.lj, GRIBDatasets.jl and CommonDataModel.jl</p><p>The combination of DiskArrays.jl and DimensionalData.jl is Julias answer to pythons <a href="https://xarray.dev/" target="_blank" rel="noreferrer">xarray</a>. Rasters.jl and YAXArrays.jl are user-facing tools building on this combination.</p><p>They have no direct dependency relationships, with but are intentionally designed to integrate via both adherence to julias <code>AbstractArray</code> interface, and by coordination during development of both packages.</p>',6),l=[s];function o(n,d,c,p,y,_){return e(),t("div",null,l)}const u=a(i,[["render",o]]);export{m as __pageData,u as default};
