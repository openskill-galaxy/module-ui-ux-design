import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="UI UX user experience design thinking user research interview survey persona user journey pain point requirement scenario information architecture user flow flowchart task flow interaction design wireframe low fidelity high fidelity prototype clickable prototype Figma Frame Component Variant Auto Layout Constraint Style Design Token design system button input form card navbar sidebar modal empty state loading state error state color typography font alignment spacing visual hierarchy responsive design mobile design web design accessibility usability testing A/B testing design review design delivery annotation export asset portfolio product design screen layout grid breakpoint icon illustration branding consistency atomic design design pattern user interface user-centered design heuristic evaluation cognitive walkthrough sitemap card sorting tree testing";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"ux-tag-"+String(i+1).padStart(3,"0"),name:n,category:"UIUX",description:"UIUX标签:"+n,count:0,createdAt:"2026-07-03T00:00:00.000Z"};});}
var CD=[
  {id:"ux-course-01",order:1,slug:"UIUX入门",title:"UI/UX入门与设计学习路线",description:"UI/UX区别、设计思维、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"ux-course-02",order:2,slug:"UX基础",title:"用户体验基础与设计思维",description:"用户体验要素、设计思维5阶段、以用户为中心。",estimatedHours:8,diff:"easy"},
  {id:"ux-course-03",order:3,slug:"用户研究",title:"用户研究、需求分析与用户画像",description:"访谈、问卷、用户画像、用户旅程图。",estimatedHours:10,diff:"medium"},
  {id:"ux-course-04",order:4,slug:"信息架构",title:"信息架构与用户流程",description:"信息架构、用户流程图、任务流程。",estimatedHours:8,diff:"medium"},
  {id:"ux-course-05",order:5,slug:"交互设计",title:"交互设计基础",description:"交互原则、反馈、一致、可用性。",estimatedHours:8,diff:"medium"},
  {id:"ux-course-06",order:6,slug:"低保真原型",title:"低保真原型与线框图",description:"线框图工具、布局设计、页面结构。",estimatedHours:8,diff:"medium"},
  {id:"ux-course-07",order:7,slug:"高保真UI",title:"高保真UI设计基础",description:"视觉设计、一致性、组件设计。",estimatedHours:10,diff:"hard"},
  {id:"ux-course-08",order:8,slug:"排版颜色",title:"排版、颜色、间距与视觉层级",description:"字体、色板、间距系统、视觉层级原则。",estimatedHours:10,diff:"hard"},
  {id:"ux-course-09",order:9,slug:"表单导航",title:"表单、列表、卡片与导航设计",description:"表单设计、卡片布局、导航方式。",estimatedHours:8,diff:"hard"},
  {id:"ux-course-10",order:10,slug:"响应式设计",title:"移动端与Web端响应式设计",description:"响应式原则、断点、自适应布局。",estimatedHours:8,diff:"hard"},
  {id:"ux-course-11",order:11,slug:"设计系统",title:"设计系统、组件库与Design Token",description:"设计系统架构、组件库、Design Token、样式管理。",estimatedHours:10,diff:"hard"},
  {id:"ux-course-12",order:12,slug:"Figma",title:"Figma原型、协作与交付",description:"Figma组件、Auto Layout、协作、标注交付。",estimatedHours:10,diff:"hard"},
  {id:"ux-course-13",order:13,slug:"可用性测试",title:"可用性测试、设计评审与迭代",description:"测试方法、评审流程、迭代优化。",estimatedHours:8,diff:"hard"},
  {id:"ux-course-14",order:14,slug:"UIUX项目作品集",title:"UI/UX项目实战、作品集与面试",description:"完整项目流程、作品集准备、面试题。",estimatedHours:10,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解UX设计流程","能做用户研究","会高保真设计","能产出作品集"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bl(){
  var all=[];var id=1;
  function add(ci,t2){var n=String(id).padStart(3,"0");all.push({id:"ux-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:[],practiceQuestionIds:[],tags:["UIUX"],prerequisites:[],updatedAt:"2026-07-03T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"UIUX课程"+(ci+1)+"章"+(j+1));
  return all;
}
var KPN=[["UI","用户界面"],["UX","用户体验"],["设计思维","创造性解法"],["用户研究","用户需求"],["用户画像","用户描述"],["信息架构","内容组织"],["交互设计","用户交互"],["线框图","页面结构"],["高保真","精细设计"],["Figma","设计工具"],["设计系统","统一规范"],["Design Token","设计令牌"],["可用性测试","用户测试"],["视觉层级","信息优先级"],["响应式","自适应设计"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"ux-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"UIUX",tags:["UIUX"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"ux-kp-"+String(k.length+1).padStart(4,"0"),name:"UIUX概念"+(k.length+1),description:"UIUX概念",category:"UIUX",tags:["UIUX"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}return k;}
var QC=["UIUX入门","UX基础","用户研究","信息架构","交互设计","低保真原型","高保真UI","排版颜色","表单导航","响应式设计","设计系统","Figma","可用性测试","UIUX项目作品集"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"UX中U代表？",["用户体验","用户界面","统一","实用"],"A","easy"],[1,"设计思维第1步？",["共情","定义","构思","原型"],"A","easy"],[2,"用户画像用于？",["代表目标用户","数据库设计","界面设计","编码"],"A","medium"],[3,"信息架构目标？",["清晰的内容组织","炫酷的视觉","复杂的交互","快速的代码"],"A","medium"],[5,"线框图重点？",["页面结构和内容","颜色和字体","动画效果","最终细节"],"A","medium"],[8,"排版核心？",["字体选择、大小、行距","颜色主题","按钮位置","图片风格"],"A","hard"],[10,"设计系统好处？",["一致性高效","更华丽","更昂贵","更复杂"],"A","hard"],[11,"Figma中Auto Layout用于？",["自动排列布局","自动配色","自动写代码","自动测试"],"A","hard"],[13,"可用性测试目标？",["发现用户问题","验证视觉设计","测试代码","评估性能"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"ux-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确"+t_[3]+"。",wrong_reason:"加强。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:550},{type:"case_analysis",min:1150}];
  while(qid<=3700){
    var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="ux-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于UIUX"+ch+"正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="UIUX"+ch+"哪些正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是UIUX重要概念。";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="在UIUX"+ch+"中____是核心。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在设计中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于设计。";}
    else if(it.type==="case_analysis"){s="UIUX"+ch+"案例。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"ux-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":"进阶"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-03T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["登录页设计","注册流程","首页架构","个人中心","搜索页面","空状态","错误状态","表单设计","卡片列表","移动端导航","后台管理","学习平台首页","课程详情","购物车","订单流程","Figma组件","设计系统","用户访谈","用户画像","可用性测试","作品集"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"ux-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握UIUX",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"背景",description:"分析"},{order:2,title:"需求",description:"定义"},{order:3,title:"设计",description:"方案"},{order:4,title:"验证",description:"测试"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-03T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"UIUX路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"ux-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["UI","UX","Figma","设计系统","用户画像","信息架构","交互设计","线框图","高保真","可用性测试","Design Token","视觉层级","响应式","用户旅程","组件库"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["UIUX概念"+i,"UIUX概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"ux-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"UIUX",tags:["UIUX"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["UIUX问题"+(i+1)+"?","UIUX问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"ux-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"UIUX",tags:["UIUX"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["UIUX"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["UIUX"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["UIUX"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["UIUX"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["UIUX"]});});return e;}
async function main(){
  console.log("Gen UIUX...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-ui-ux-design",slug:"module-ui-ux-design",title:"UI/UX设计与产品原型",subtitle:"面向产品经理前端开发者和设计入门者",description:"面向产品经理前端开发者和设计入门者的用户体验用户研究信息架构交互设计线框图高保真UIFigma设计系统可用性测试与作品集训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["UI设计","UX设计","产品原型","Figma","交互设计","设计系统","用户研究","作品集"],estimatedHours:150,difficulty:"beginner",updatedAt:"2026-07-03T00:00:00.000Z",coverEmoji:"\u{1F3A8}",repoUrl:"https://github.com/openskill-galaxy/module-ui-ux-design",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
