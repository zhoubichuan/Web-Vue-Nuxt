(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{610:function(a,t,e){"use strict";e.r(t);var r=e(16),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"基础案例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础案例"}},[a._v("#")]),a._v(" 基础案例")]),a._v(" "),e("h2",{attrs:{id:"_1-基础案例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-基础案例"}},[a._v("#")]),a._v(" 1.基础案例")]),a._v(" "),e("h2",{attrs:{id:"_2-场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-场景"}},[a._v("#")]),a._v(" 2.场景")]),a._v(" "),e("h3",{attrs:{id:"场景-scene"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景-scene"}},[a._v("#")]),a._v(" 场景（Scene）")]),a._v(" "),e("ul",[e("li",[a._v("场景能够让你在什么地方、摆放什么东西来交给 three.js 来渲染，这是你放置物体、灯光和摄像机的地方")])]),a._v(" "),e("h3",{attrs:{id:"雾-fog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#雾-fog"}},[a._v("#")]),a._v(" 雾（Fog）")]),a._v(" "),e("ul",[e("li",[a._v("这个类中的参数定义了线性雾。也就是说，雾的密度是随着距离线性增大的")])]),a._v(" "),e("h3",{attrs:{id:"雾-指数-fogexp2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#雾-指数-fogexp2"}},[a._v("#")]),a._v(" 雾-指数（FogExp2）")]),a._v(" "),e("ul",[e("li",[a._v("该类所包含的参数定义了指数雾，它可以在相机附近提供清晰的视野，且距离相机越远，雾的浓度随着指数增长越快")])]),a._v(" "),e("h2",{attrs:{id:"_3-光源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-光源"}},[a._v("#")]),a._v(" 3.光源")]),a._v(" "),e("h3",{attrs:{id:"_3-1-环境光-ambientlight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-环境光-ambientlight"}},[a._v("#")]),a._v(" 3.1 环境光（AmbientLight）")]),a._v(" "),e("ul",[e("li",[a._v("环境光会均匀的照亮场景中的所有物体。")]),a._v(" "),e("li",[a._v("环境光不能用来投射阴影，因为它没有方向。")])]),a._v(" "),e("h3",{attrs:{id:"_3-2-点光源-pointlight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-点光源-pointlight"}},[a._v("#")]),a._v(" 3.2 点光源（PointLight）")]),a._v(" "),e("ul",[e("li",[a._v("从一个点向各个方向发射的光源。一个常见的例子是模拟一个灯泡发出的光。")]),a._v(" "),e("li",[a._v("该光源可以投射阴影")])]),a._v(" "),e("h3",{attrs:{id:"_3-3-聚光灯-spotlight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-聚光灯-spotlight"}},[a._v("#")]),a._v(" 3.3 聚光灯（SpotLight）")]),a._v(" "),e("ul",[e("li",[a._v("光线从一个点沿一个方向射出，随着光线照射的变远，光线圆锥体的尺寸也逐渐增大。")]),a._v(" "),e("li",[a._v("该光源可以投射阴影")])]),a._v(" "),e("h3",{attrs:{id:"环境光探针-ambientlightprobe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境光探针-ambientlightprobe"}},[a._v("#")]),a._v(" 环境光探针（AmbientLightProbe）")]),a._v(" "),e("ul",[e("li",[a._v("光照探针是一种在 3D 场景中添加光源的另一种方法。 AmbientLightProbe 是场景中单个环境光的光照估算数据。")])]),a._v(" "),e("h3",{attrs:{id:"平行光-directionallight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#平行光-directionallight"}},[a._v("#")]),a._v(" 平行光（DirectionalLight）")]),a._v(" "),e("ul",[e("li",[a._v("平行光是沿着特定方向发射的光。这种光的表现像是无限远,从它发出的光线都是平行的。常常用平行光来模拟太阳光\n的效果; 太阳足够远，因此我们可以认为太阳的位置是无限远，所以我们认为从太阳发出的光线也都是平行的。")])]),a._v(" "),e("h3",{attrs:{id:"半球光-hemispherelight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#半球光-hemispherelight"}},[a._v("#")]),a._v(" 半球光（HemisphereLight）")]),a._v(" "),e("ul",[e("li",[a._v("光源直接放置于场景之上，光照颜色从天空光线颜色渐变到地面光线颜色。")]),a._v(" "),e("li",[a._v("半球光不能投射阴影。")])]),a._v(" "),e("h3",{attrs:{id:"半球光探针-hemispherelightprobe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#半球光探针-hemispherelightprobe"}},[a._v("#")]),a._v(" 半球光探针 HemisphereLightProbe")]),a._v(" "),e("ul",[e("li",[a._v("光照探针是一种在 3D 场景中添加光源的另一种方法。 HemisphereLightProbe 是场景中单个半球光的光照估算数据")])]),a._v(" "),e("h3",{attrs:{id:"light"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#light"}},[a._v("#")]),a._v(" Light")]),a._v(" "),e("ul",[e("li",[a._v("光源的基类 – 所有其他的光类型都继承了该类描述的属性和方法")])]),a._v(" "),e("h3",{attrs:{id:"光照探针-lightprobe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#光照探针-lightprobe"}},[a._v("#")]),a._v(" 光照探针 LightProbe")]),a._v(" "),e("p",[a._v("光照探针是一种在 3D 场景中添加光源的另一种方法。与经典光源（平行光、点光、聚光）不同，\n光照探针不发光。相反，光照探针存储着有关穿过 3D 空间的光线的信息。\n渲染过程中，通过使用来自光照探针的数据，来逼近打到 3D 物体上的光线。")]),a._v(" "),e("p",[a._v("光照探针通常从（辐射）环境贴图中创建。 LightProbeGenerator 类可以根据 CubeTexture 或\nWebGLCubeRenderTarget 的实例来创建光照探针。\n但是，光照估算数据同样可以以其他形式提供，例如，通过 WebXR。\n这将能够渲染可对真实世界的光照做出反应的增强现实内容。")]),a._v(" "),e("p",[a._v("three.js 中，当前的探针实现支持所谓的漫反射光照探针。\n这种类型的光照探针功能上等效于辐照环境贴图")]),a._v(" "),e("h3",{attrs:{id:"平面光光源-rectarealight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#平面光光源-rectarealight"}},[a._v("#")]),a._v(" 平面光光源（RectAreaLight）")]),a._v(" "),e("p",[a._v("平面光光源从一个矩形平面上均匀地发射光线。这种光源可以用来模拟像明亮的窗户或者条状灯光光源。")]),a._v(" "),e("p",[a._v("注意事项:")]),a._v(" "),e("p",[a._v("不支持阴影。\n只支持 MeshStandardMaterial 和 MeshPhysicalMaterial 两种材质。\n你必须在你的场景中加入 RectAreaLightUniformsLib ，并调用 init()。")]),a._v(" "),e("h2",{attrs:{id:"_4-材质"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-材质"}},[a._v("#")]),a._v(" 4.材质")]),a._v(" "),e("h3",{attrs:{id:"基础线条材质-linebasicmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础线条材质-linebasicmaterial"}},[a._v("#")]),a._v(" 基础线条材质（LineBasicMaterial）")]),a._v(" "),e("ul",[e("li",[a._v("一种用于绘制线框样式几何体的材质")])]),a._v(" "),e("h3",{attrs:{id:"虚线材质-linedashedmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚线材质-linedashedmaterial"}},[a._v("#")]),a._v(" 虚线材质(LineDashedMaterial)")]),a._v(" "),e("ul",[e("li",[a._v("一种用于绘制虚线样式几何体的材质")])]),a._v(" "),e("h3",{attrs:{id:"材质-material"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#材质-material"}},[a._v("#")]),a._v(" 材质(Material)")]),a._v(" "),e("p",[a._v("材质的抽象基类。")]),a._v(" "),e("p",[a._v("材质描述了对象 objects 的外观。它们的定义方式与渲染器无关，\n因此，如果您决定使用不同的渲染器，不必重写材质。")]),a._v(" "),e("p",[a._v("所有其他材质类型都继承了以下属性和方法（尽管它们可能具有不同的默认值）")]),a._v(" "),e("h3",{attrs:{id:"基础网格材质-meshbasicmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础网格材质-meshbasicmaterial"}},[a._v("#")]),a._v(" 基础网格材质(MeshBasicMaterial)")]),a._v(" "),e("ul",[e("li",[a._v("一个以简单着色（平面或线框）方式来绘制几何体的材质。")]),a._v(" "),e("li",[a._v("这种材质不受光照的影响")])]),a._v(" "),e("h3",{attrs:{id:"深度网格材质-meshdepthmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深度网格材质-meshdepthmaterial"}},[a._v("#")]),a._v(" 深度网格材质(MeshDepthMaterial)")]),a._v(" "),e("ul",[e("li",[a._v("一种按深度绘制几何体的材质。深度基于相机远近平面。白色最近，黑色最远")])]),a._v(" "),e("h3",{attrs:{id:"meshdistancematerial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meshdistancematerial"}},[a._v("#")]),a._v(" MeshDistanceMaterial")]),a._v(" "),e("p",[a._v("MeshDistanceMaterial 在内部用于使用 PointLight 来实现阴影映射。\n也可以用于通过将 MeshDistanceMaterial 实例指定给 Object3D.customDistanceMaterial，来自定义物体阴影投射")]),a._v(" "),e("h3",{attrs:{id:"lambert-网格材质-meshlambertmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lambert-网格材质-meshlambertmaterial"}},[a._v("#")]),a._v(" Lambert 网格材质(MeshLambertMaterial)")]),a._v(" "),e("p",[a._v("一种非光泽表面的材质，没有镜面高光。")]),a._v(" "),e("p",[a._v("该材质使用基于非物理的 Lambertian 模型来计算反射率。\n这可以很好地模拟一些表面（例如未经处理的木材或石材），但不能模拟具有镜面高光的光泽表面（例如涂漆木材）。")]),a._v(" "),e("p",[a._v("使用 Gouraud 着色模型计算着色。这将计算每个顶点的着色\n（即在 vertex shader 中）并在多边形的面上插入结果。")]),a._v(" "),e("p",[a._v("由于反射率和光照模型的简单性，MeshPhongMaterial，MeshStandardMaterial 或者 MeshPhysicalMaterial\n上使用这种材质时会以一些图形精度为代价，得到更高的性能")]),a._v(" "),e("h3",{attrs:{id:"meshmatcapmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meshmatcapmaterial"}},[a._v("#")]),a._v(" MeshMatcapMaterial")]),a._v(" "),e("p",[a._v("MeshMatcapMaterial 由一个材质捕捉（MatCap，或光照球（Lit Sphere））纹理所定义，其编码了材质的颜色与明暗。")]),a._v(" "),e("p",[a._v("由于 mapcap 图像文件编码了烘焙过的光照，因此 MeshMatcapMaterial 不对灯光作出反应。\n它将会投射阴影到一个接受阴影的物体上(and shadow clipping works)，但不会产生自身阴影或是接受阴影")]),a._v(" "),e("h3",{attrs:{id:"法线网格材质-meshnormalmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#法线网格材质-meshnormalmaterial"}},[a._v("#")]),a._v(" 法线网格材质(MeshNormalMaterial)")]),a._v(" "),e("ul",[e("li",[a._v("一种把法向量映射到 RGB 颜色的材质")])]),a._v(" "),e("h3",{attrs:{id:"phong-网格材质-meshphongmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#phong-网格材质-meshphongmaterial"}},[a._v("#")]),a._v(" Phong 网格材质(MeshPhongMaterial)")]),a._v(" "),e("p",[a._v("一种用于具有镜面高光的光泽表面的材质。")]),a._v(" "),e("p",[a._v("该材质使用非物理的 Blinn-Phong 模型来计算反射率。\n与 MeshLambertMaterial 中使用的 Lambertian 模型不同，该材质可以模拟具有镜面高光的光泽表面（例如涂漆木材）。")]),a._v(" "),e("p",[a._v("使用 Phong 着色模型计算着色时，会计算每个像素的阴影（在 fragment shader，\nAKA pixel shader 中），与 MeshLambertMaterial 使用的 Gouraud 模型相比，该模型的结果更准确，但代价是牺牲一些性能。\nMeshStandardMaterial 和 MeshPhysicalMaterial 也使用这个着色模型。")]),a._v(" "),e("p",[a._v("在 MeshStandardMaterial 或 MeshPhysicalMaterial 上使用此材质时，性能通常会更高 ，但会牺牲一些图形精度")]),a._v(" "),e("h3",{attrs:{id:"物理网格材质-meshphysicalmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#物理网格材质-meshphysicalmaterial"}},[a._v("#")]),a._v(" 物理网格材质(MeshPhysicalMaterial)")]),a._v(" "),e("p",[a._v("MeshStandardMaterial 的扩展，提供了更高级的基于物理的渲染属性")]),a._v(" "),e("h3",{attrs:{id:"标准网格材质-meshstandardmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标准网格材质-meshstandardmaterial"}},[a._v("#")]),a._v(" 标准网格材质(MeshStandardMaterial)")]),a._v(" "),e("p",[a._v("一种基于物理的标准材质，使用 Metallic-Roughness 工作流程。")]),a._v(" "),e("p",[a._v("基于物理的渲染（PBR）最近已成为许多 3D 应用程序的标准，例如 Unity，\nUnreal 和\n3D Studio Max。")]),a._v(" "),e("p",[a._v("这种方法与旧方法的不同之处在于，不使用近似值来表示光与表面的相互作用，而是使用物理上正确的模型。\n我们的想法是，不是在特定照明下调整材质以使其看起来很好，而是可以创建一种材质，能够“正确”地应对所有光照场景")]),a._v(" "),e("h3",{attrs:{id:"meshtoonmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meshtoonmaterial"}},[a._v("#")]),a._v(" MeshToonMaterial")]),a._v(" "),e("h3",{attrs:{id:"点材质-pointsmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#点材质-pointsmaterial"}},[a._v("#")]),a._v(" 点材质(PointsMaterial)")]),a._v(" "),e("p",[a._v("Points 使用的默认材质")]),a._v(" "),e("h3",{attrs:{id:"原始着色器材质-rawshadermaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原始着色器材质-rawshadermaterial"}},[a._v("#")]),a._v(" 原始着色器材质(RawShaderMaterial)")]),a._v(" "),e("p",[a._v("此类的工作方式与 ShaderMaterial 类似，不同之处在于内置的 uniforms 和 attributes 的定义不会自动添加到 GLSL shader 代码中")]),a._v(" "),e("h3",{attrs:{id:"着色器材质-shadermaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#着色器材质-shadermaterial"}},[a._v("#")]),a._v(" 着色器材质(ShaderMaterial)")]),a._v(" "),e("p",[a._v("使用自定义 shader 渲染的材质。\nshader 是一个用 GLSL 编写的小程序 ，在 GPU 上运行。\n您可能需要使用自定义 shader，如果你要：")]),a._v(" "),e("p",[a._v("要实现内置 materials 之外的效果。\n将许多对象组合成单个 BufferGeometry 以提高性能")]),a._v(" "),e("h3",{attrs:{id:"阴影材质-shadowmaterial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#阴影材质-shadowmaterial"}},[a._v("#")]),a._v(" 阴影材质(ShadowMaterial)")]),a._v(" "),e("p",[a._v("此材质可以接收阴影，但在其他方面完全透明")]),a._v(" "),e("h3",{attrs:{id:"点精灵材质-spritematerial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#点精灵材质-spritematerial"}},[a._v("#")]),a._v(" 点精灵材质(SpriteMaterial)")]),a._v(" "),e("p",[a._v("一种使用 Sprite 的材质")]),a._v(" "),e("h2",{attrs:{id:"_5-二维几何"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-二维几何"}},[a._v("#")]),a._v(" 5.二维几何")]),a._v(" "),e("h2",{attrs:{id:"_6-三维"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-三维"}},[a._v("#")]),a._v(" 6.三维")]),a._v(" "),e("h2",{attrs:{id:"_7-粒子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-粒子"}},[a._v("#")]),a._v(" 7.粒子")]),a._v(" "),e("h2",{attrs:{id:"_8-模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-模型"}},[a._v("#")]),a._v(" 8.模型")]),a._v(" "),e("h2",{attrs:{id:"_9-动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-动画"}},[a._v("#")]),a._v(" 9.动画")]),a._v(" "),e("h2",{attrs:{id:"_10-纹理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-纹理"}},[a._v("#")]),a._v(" 10.纹理")]),a._v(" "),e("h2",{attrs:{id:"_11-组合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-组合"}},[a._v("#")]),a._v(" 11.组合")]),a._v(" "),e("h2",{attrs:{id:"_12-其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-其他"}},[a._v("#")]),a._v(" 12.其他")]),a._v(" "),e("h2",{attrs:{id:"_13-综合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-综合"}},[a._v("#")]),a._v(" 13.综合")])])}),[],!1,null,null,null);t.default=s.exports}}]);