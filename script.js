(() => {
  "use strict";
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const langToggle = $("#langToggle");
  $$(".mobile-nav a").forEach(link => link.addEventListener("click", () => { const menu = link.closest(".mobile-nav"); if (menu) menu.open = false; }));
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-en][data-ar]").forEach(el => { el.textContent = el.dataset[lang]; });
    if (langToggle) langToggle.textContent = lang === "en" ? "العربية" : "English";
    try { localStorage.setItem("portfolio-language", lang); } catch (_) {}
  }
  let savedLang = "en";
  try { savedLang = localStorage.getItem("portfolio-language") || "en"; } catch (_) {}
  setLanguage(savedLang);
  if (langToggle) langToggle.addEventListener("click", () => { setLanguage(document.documentElement.lang === "en" ? "ar" : "en"); renderProjectDetails(); });


  const projectDetails = [
    {en:{kicker:"AK GROUP · ORGANIZATIONAL DESIGN",title:"Organizational Structure & Job Architecture",groups:[
      ["Organizational structure",["Designed the AK Group structure from scratch: departments, sections, positions, job titles, reporting lines, and the distribution of roles across departments.","Defined departmental scopes, responsibilities, and interfaces to clarify accountability and avoid overlap.","Prepared and updated organizational charts and documented structural changes.","Reviewed subsidiary organizational structures and provided feedback and guidance; subsidiary structures were reviewed rather than independently redesigned by the parent OD function."]],
      ["Job architecture & job documentation",["Developed the Group job architecture, including job families and job levels, while preserving each subsidiary’s distinct roles and titles.","Created a Group-wide job analysis methodology to capture duties, responsibilities, qualifications, experience, skills, and competencies.","Created a common job description template and prepared AK Group job descriptions from scratch.","Reviewed subsidiary job architectures and job descriptions for alignment with Group methodology."]],
      ["Job change governance",["Reviewed subsidiary requests to create, modify, or delete positions and provided recommendations before approval."]]
    ]},ar:{kicker:"مجموعة العقاد · التصميم التنظيمي",title:"الهيكل التنظيمي وهندسة الوظائف",groups:[
      ["الهيكل التنظيمي",["تصميم هيكل AK Group من البداية، بما يشمل الإدارات والأقسام والوظائف والمسميات وخطوط التبعية.","إعداد وتحديث الخرائط التنظيمية وتوثيق التغييرات الهيكلية.","مراجعة الهياكل التنظيمية للشركات التابعة وتقديم الملاحظات والتوجيه."]],
      ["هندسة الوظائف وتوثيقها",["تطوير هندسة الوظائف للمجموعة، بما يشمل العائلات والمستويات الوظيفية، مع الحفاظ على اختلاف الوظائف والمسميات بين الشركات التابعة.","إعداد منهجية موحدة لتحليل الوظائف لجمع وتحليل المهام والمسؤوليات والمؤهلات والخبرات والمهارات والجدارات.","إعداد نموذج موحد للوصف الوظيفي وإعداد أوصاف وظائف AK Group من البداية.","مراجعة هندسة الوظائف والأوصاف الوظيفية للشركات التابعة للتأكد من توافقها مع منهجية المجموعة."]],
      ["حوكمة التغييرات الوظيفية",["مراجعة طلبات إنشاء الوظائف أو تعديلها أو إلغائها في الشركات التابعة وتقديم التوصيات قبل الاعتماد."]]
    ]}},
    {en:{kicker:"AK GROUP · JOB EVALUATION",title:"Point-Factor Job Evaluation Methodology",groups:[
      ["Methodology design",["Designed a point-factor job evaluation methodology from scratch with a total architecture of 1,200 points.","Set factor weights: Know-How 35%, Accountability 40%, and Problem Solving 25%.","Defined Know-How sub-factor weights: Education 40%, Experience 40%, and Technical Skills 20%.","Defined Accountability sub-factors and weights, including Supervisory Responsibilities 60% and Decision Making 35%, and added Financial Responsibility as a sub-factor with defined levels.","Defined Problem Solving sub-factor weights: Independent Judgment 52% and Critical Thinking 48%.","Established education levels and points (36, 50, 64, 78, 92, 106, 120) and experience-level points (0, 64, 80, 96, 112, 128, 144, 160), preserving the approved scoring values.","Defined compensable factors, sub-factors, factor weights, levels, scoring rules, and the total points architecture."]],
      ["Application & grading",["Applied the methodology to AK Group jobs and linked evaluation outcomes to job grades and the salary structure.","Reviewed subsidiary job evaluation methodologies and results for correct application."]],
      ["Governance & maintenance",["Designed an evaluation appeal process.","Established periodic re-evaluation and review mechanisms.","Defined controls for evaluating newly created or revised jobs."]]
    ]},ar:{kicker:"مجموعة العقاد · تقييم الوظائف",title:"منهجية تقييم الوظائف بنظام النقاط",groups:[
      ["تصميم المنهجية",["تصميم منهجية تقييم الوظائف بنظام النقاط من البداية بإجمالي 1,200 نقطة.","تحديد أوزان العوامل الرئيسية: المعرفة 35%، المسؤولية 40%، وحل المشكلات 25%.","تحديد أوزان عوامل المعرفة الفرعية: التعليم 40%، الخبرة 40%، والمهارات الفنية 20%.","تحديد عوامل المسؤولية الفرعية، ومنها المسؤوليات الإشرافية بوزن 60% واتخاذ القرار بوزن 35%، وإضافة المسؤولية المالية بمستويات محددة.","تحديد أوزان عوامل حل المشكلات: الحكم المستقل 52% والتفكير النقدي 48%.","تحديد مستويات التعليم ونقاطها: 36، 50، 64، 78، 92، 106، 120؛ ومستويات الخبرة ونقاطها: 0، 64، 80، 96، 112، 128، 144، 160.","تحديد قواعد احتساب النقاط والمستويات ومعايير التقييم."]],
      ["التطبيق والربط بالدرجات",["تطبيق المنهجية على وظائف AK Group وربط نتائج التقييم بالدرجات الوظيفية وهيكل الرواتب.","مراجعة منهجيات ونتائج تقييم الوظائف بالشركات التابعة للتحقق من التطبيق الصحيح."]],
      ["الحوكمة والتحديث",["تصميم آلية للتظلم من نتائج التقييم.","وضع آلية لإعادة التقييم والمراجعة الدورية.","تحديد ضوابط تقييم الوظائف المستحدثة أو المعدلة."]]
    ]}},
    {en:{kicker:"AK GROUP · COMPENSATION",title:"Salary Structure & Compensation Framework",groups:[
      ["Salary structure",["Designed the AK Group salary structure, including job grades, salary ranges, and job-to-grade mapping.","Conducted Compensation & Benefits market benchmarking.","Designed the compensation framework and pay philosophy."]],
      ["Salary review & controls",["Developed salary increase guidelines for annual and exceptional increases, considering performance, job grade, and market positioning.","Designed the annual salary review process and analyzed proposed increases before submission for approval.","Established governance for salary exceptions and salaries outside approved ranges.","Defined a mechanism for periodic salary structure review and updates based on market and inflation changes.","Scope covered salary structure and compensation policies; it did not include designing employee benefits or incentive and bonus frameworks."]],
      ["Subsidiary deliverables",["Designed the salary structure for AK-Trade.","Reviewed and developed the salary structure for AK-Ships."]]
    ]},ar:{kicker:"مجموعة العقاد · التعويضات",title:"هيكل الرواتب وإطار التعويضات",groups:[
      ["هيكل الرواتب",["تصميم هيكل الرواتب لمجموعة العقاد، بما يشمل الدرجات الوظيفية ونطاقات الرواتب وربط الوظائف بالدرجات.","إجراء المقارنات المرجعية للسوق في مجال الأجور والمزايا.","تصميم إطار التعويضات وفلسفة الأجور."]],
      ["مراجعة الرواتب والضوابط",["إعداد إرشادات الزيادات السنوية والاستثنائية وفقًا للأداء والدرجة الوظيفية وموقع الراتب من السوق.","تصميم إجراءات المراجعة السنوية للرواتب وتحليل الزيادات المقترحة قبل رفعها للاعتماد.","وضع ضوابط الاستثناءات والرواتب التي تقع خارج النطاقات المعتمدة.","تحديد آلية للمراجعة والتحديث الدوري لهيكل الرواتب وفقًا لتغيرات السوق والتضخم.","يشمل النطاق هيكل الرواتب وسياسات التعويضات، ولا يشمل تصميم إطار مزايا الموظفين أو الحوافز والمكافآت."]],
      ["مخرجات الشركات التابعة",["تصميم هيكل الرواتب لشركة AK-Trade.","مراجعة وتطوير هيكل الرواتب لشركة AK-Ships."]]
    ]}},
    {en:{kicker:"AK GROUP · COMPETENCY MANAGEMENT",title:"Competency Management System",groups:[
      ["Framework development",["Designed the Group Competency Management System.","Developed separate Technical Competency and Behavioral Competency Frameworks.","Defined job-related competencies and proficiency levels."]],
      ["Assessment methodology & gap analysis",["Developed the competency assessment methodology.","Received assessment results from departments and analyzed competency gaps at company level.","Recommended gap priorities and actions to the relevant departments; employee assessments themselves are conducted by the departments."]],
      ["Subsidiary support",["Reviewed subsidiary competency frameworks; subsidiary assessment results and gap analyses were outside this review scope."]]
    ]},ar:{kicker:"مجموعة العقاد · إدارة الجدارات",title:"نظام إدارة الجدارات",groups:[
      ["تطوير الأطر",["تصميم نظام إدارة الجدارات للمجموعة.","تطوير إطار مستقل للجدارات الفنية وإطار مستقل للجدارات السلوكية.","تحديد الجدارات المطلوبة لكل وظيفة ومستويات الإتقان."]],
      ["منهجية التقييم وتحليل الفجوات",["تطوير منهجية تقييم الجدارات.","استلام نتائج التقييم من الإدارات وتحليل فجوات الجدارات على مستوى الشركة.","تحديد أولويات الفجوات والتوصية بالإجراءات للإدارات المعنية؛ بينما تتولى الإدارات تنفيذ تقييمات الموظفين."]],
      ["دعم الشركات التابعة",["مراجعة أطر الجدارات بالشركات التابعة، دون مراجعة نتائج تقييماتها أو تحليل فجواتها."]]
    ]}},
    {en:{kicker:"AK GROUP · WORKFORCE PLANNING",title:"Manpower Planning & Follow-up",groups:[
      ["Planning & review",["Prepared the parent company's manpower plan based on departmental workforce requirements.","Reviewed manpower plans submitted by subsidiary companies, checking assumptions and alignment with the submitted business needs."]],
      ["Implementation monitoring",["Followed up approved subsidiary manpower plans in direct coordination with subsidiary HR managers.","Monitored planned versus actual headcount and the implementation status of approved hiring plans.","Analyzed headcount variances and prepared periodic reports showing implementation progress and deviations.","The scope did not include payroll-budget impact analysis or taking ownership of corrective actions for subsidiary variances."]]
    ]},ar:{kicker:"مجموعة العقاد · تخطيط القوى العاملة",title:"تخطيط القوى العاملة ومتابعة التنفيذ",groups:[
      ["التخطيط والمراجعة",["إعداد خطة القوى العاملة لمجموعة العقاد.","مراجعة خطط القوى العاملة المقدمة من الشركات التابعة."]],
      ["متابعة التنفيذ",["متابعة تنفيذ الخطط المعتمدة للشركات التابعة بالتنسيق المباشر مع مديري الموارد البشرية بها.","متابعة الأعداد المخططة مقارنة بالأعداد الفعلية وحالة تنفيذ التعيينات المعتمدة.","تحليل الانحرافات وإعداد تقارير دورية توضح نسب التنفيذ والفروق.","لا يشمل النطاق تحليل أثر الانحرافات على ميزانية الرواتب أو تولي تنفيذ الإجراءات التصحيحية بالشركات التابعة."]]
    ]}},
    {en:{kicker:"AK GROUP · HR GOVERNANCE",title:"Group HR Governance, Policies & SOPs",groups:[
      ["Group governance",["Developed the HR Organizational Governance Framework defining parent-company and subsidiary HR roles and responsibilities in the shared-services model.","Defined approval and escalation mechanisms between the parent company and subsidiaries, clarifying the advisory role of the parent and the operating responsibilities of subsidiary HR teams.","Prepared and reviewed HR Service Level Agreements (SLAs), defined HR service KPIs, monitored SLA compliance, and prepared periodic service performance reports and observations."]],
      ["Policies, SOPs & methodologies",["Prepared and reviewed HR policies and SOPs for AK Group, including core HR operating procedures such as recruitment, payroll, onboarding, and performance appraisal process documentation where assigned.","Developed OD policies, SOPs, methodologies, and controlled forms for the parent company, including job analysis, job creation, job description, job evaluation, organizational structure, change requests, and manpower-planning inputs.","Prepared the Group HR Policies & Procedures Framework to establish shared principles and standards for subsidiaries."]],
      ["Subsidiary guidance",["Reviewed subsidiary HR policies, SOPs, OD documents, and forms and provided comments and guidance to their HR teams; this was a review-and-guidance role, not creating every subsidiary document from scratch.","Provided consultation to subsidiary HR managers through periodic coordination meetings. The role is advisory and does not include final approval authority over subsidiary HR decisions.","The remit did not include HR Delegation of Authority, HR Governance Reports, an annual OD plan, performance management ownership, L&D, talent management, succession planning, career pathing, or follow-up ownership for corrective actions at subsidiaries."]]
    ]},ar:{kicker:"مجموعة العقاد · حوكمة الموارد البشرية",title:"حوكمة الموارد البشرية والسياسات والإجراءات",groups:[
      ["حوكمة المجموعة",["تطوير إطار الحوكمة التنظيمية للموارد البشرية لتحديد أدوار ومسؤوليات الشركة الأم والشركات التابعة في نموذج الخدمات المشتركة.","تحديد آليات الاعتماد والتصعيد، مع توضيح الدور الاستشاري للشركة الأم والمسؤوليات التشغيلية لفرق الموارد البشرية بالشركات التابعة.","إعداد ومراجعة اتفاقيات مستوى الخدمة (SLAs)، وتحديد مؤشرات أداء خدمات الموارد البشرية ومتابعة الالتزام بها وإعداد تقارير وملاحظات دورية عن أداء الخدمة."]],
      ["السياسات والإجراءات والمنهجيات",["إعداد ومراجعة سياسات وإجراءات الموارد البشرية في AK Group.","تطوير سياسات وإجراءات ومنهجيات ونماذج التطوير المؤسسي بالشركة الأم.","إعداد إطار سياسات وإجراءات الموارد البشرية للمجموعة لتحديد المبادئ والمعايير المشتركة للشركات التابعة."]],
      ["توجيه الشركات التابعة",["مراجعة سياسات وإجراءات الموارد البشرية ووثائق التطوير المؤسسي والنماذج بالشركات التابعة وتقديم الملاحظات والتوجيه؛ دون تولي إعداد جميع وثائق الشركات التابعة من البداية.","تقديم الاستشارات لمديري الموارد البشرية بالشركات التابعة من خلال اجتماعات التنسيق الدورية. ويظل الدور استشاريًا دون سلطة الاعتماد النهائي لقرارات الموارد البشرية بالشركات التابعة.","لا يشمل النطاق مصفوفة تفويض صلاحيات الموارد البشرية أو تقارير حوكمة الموارد البشرية أو الخطة السنوية للتطوير المؤسسي أو ملكية أنظمة إدارة الأداء والتعلم والتطوير وإدارة المواهب والتعاقب والمسارات المهنية، كما لا يشمل متابعة تنفيذ الإجراءات التصحيحية لدى الشركات التابعة."]]
    ]}},
    {en:{kicker:"FATHALLA MARKETS · RECRUITMENT",title:"Recruitment & New Branch Staffing",groups:[
      ["Full-cycle recruitment",["Managed recruitment for blue-collar and white-collar positions from hiring request through selection, offer, documentation, medical checks, and joining.","Coordinated interviews and candidate decisions with branch managers and department leaders; participated in final selection."]],
      ["Five new branch openings",["Determined staffing numbers by job, department, and shift for five new branches.","Prepared branch-level recruitment timelines and tracked actual hires against targets and opening schedules.","Coordinated field visits and hiring activity to ensure staffing readiness before opening."]],
      ["Recruitment performance",["Monitored headcount after opening, shortages, excess staffing, turnover, and replacement hiring.","Analyzed labor productivity and considered headcount in relation to sales and operating volume.","Tracked Time to Fill and Cost per Hire by job/source, recruitment source effectiveness based on quality and turnover, and probation pass rates; probation failure reasons were not analyzed.","Prepared periodic recruitment reports with KPI analysis, delays, and recommendations.","Allocated requirements, reviewed shortlists when needed, participated in blue- and white-collar interviews, and monitored part of the recruitment team's progress; this was not full team-management responsibility.","Coordinated branch and department managers and conducted field visits to support staffing readiness."]]
    ]},ar:{kicker:"فتح الله ماركتس · التوظيف",title:"التوظيف وتجهيز العمالة للفروع الجديدة",groups:[
      ["دورة التوظيف الكاملة",["إدارة التوظيف للوظائف التشغيلية والإدارية من طلب الاحتياج وحتى الاختيار والعرض الوظيفي والمستندات والكشف الطبي والتعيين.","تنسيق المقابلات وقرارات الاختيار مع مديري الفروع والإدارات والمشاركة في الاختيار النهائي."]],
      ["افتتاح خمسة فروع جديدة",["تحديد أعداد العمالة المطلوبة حسب الوظيفة والإدارة والوردية للفروع الخمسة.","إعداد جداول زمنية للتوظيف لكل فرع ومتابعة التعيينات الفعلية مقارنة بالمستهدف ومواعيد الافتتاح.","تنسيق الزيارات الميدانية وأنشطة التوظيف لضمان جاهزية العمالة قبل الافتتاح."]],
      ["متابعة أداء التوظيف",["متابعة أعداد العاملين بعد الافتتاح والعجز والزيادة ودوران العمالة والتعيينات البديلة.","تحليل إنتاجية العمالة وربط أعداد العاملين بحجم المبيعات والتشغيل.","متابعة Time to Fill وCost per Hire حسب الوظيفة ومصدر التوظيف، وفاعلية المصادر من حيث جودة التعيين ومعدلات الدوران، ومعدلات اجتياز فترة الاختبار؛ دون تحليل أسباب عدم الاجتياز.","إعداد تقارير دورية تتضمن تحليل مؤشرات التوظيف والتأخيرات والتوصيات.","توزيع بعض متطلبات التوظيف ومراجعة قوائم المرشحين عند الحاجة والمشاركة في مقابلات الوظائف التشغيلية والإدارية ومتابعة تقدم جزء من فريق التوظيف، دون إدارة الفريق بالكامل.","التنسيق مع مديري الفروع والإدارات وتنفيذ زيارات ميدانية لدعم جاهزية التوظيف."]]
    ]}},
    {en:{kicker:"FATHALLA MARKETS · ORGANIZATIONAL DEVELOPMENT",title:"Organizational Development & HR Systems",groups:[
      ["Organizational structure & job documentation",["Updated the existing organizational structure rather than designing it from scratch, including adding or removing positions and changing job titles and reporting lines.","Followed approved structure changes and checked that implementation and headcount reflected the approved structure; the role did not include evaluating change requests before approval.","Prepared and updated organizational charts and maintained change records showing departments, positions, titles, reporting lines, and effective dates.","Managed job creation, modification, and deletion requests, considering the rationale, structure, and workforce requirements.","Conducted job analysis and prepared job descriptions from analysis through approval.","Designed job evaluation methodology, factors, weights, levels, and scoring; evaluated existing, new, and modified jobs and linked outcomes to grades and salary ranges.","Maintained the evaluation approach and reviewed job classifications periodically; job database ownership was outside scope."]],
      ["Salary structure",["Reviewed the existing salary system and redesigned the salary structure, job grades, and salary ranges.","Conducted internal analysis and external market benchmarking.","Reviewed salary exceptions and provided recommendations; monitored implementation and compliance, including compliance when hiring against approved ranges.","Periodically reviewed the structure in light of market and inflation changes; promotion and job-grade linkage decisions were outside this responsibility."]],
      ["HR manual, policies & forms",["Prepared the HR Manual from scratch covering Recruitment, Training, Personnel, Payroll, and Performance Management.","Prepared new HR policies and procedures and reviewed and developed existing ones.","Monitored branch application and compliance, analyzed non-compliance causes, and recommended corrective actions; recommendations were made without owning implementation follow-up.","Created some HR forms from scratch and updated others; followed their use in branches and periodically revised them based on feedback."]],
      ["Reporting & probation input",["Prepared reports on job description preparation and updates, evaluated and newly created or modified jobs, achievements, obstacles, and recommendations.","Reviewed probation evaluation results, coordinated with managers, and recommended confirmation or termination; HR/Personnel executed the decision.","Manpower-plan actual-versus-planned follow-up was handled within recruitment reporting, not duplicated as an OD responsibility."]]
    ]},ar:{kicker:"فتح الله ماركتس · التطوير المؤسسي",title:"التطوير المؤسسي وأنظمة الموارد البشرية",groups:[
      ["الهيكل التنظيمي وتوثيق الوظائف",["تحديث الهيكل التنظيمي القائم، بما يشمل إضافة أو إلغاء وظائف وتعديل المسميات وخطوط التبعية.","متابعة التغييرات الهيكلية المعتمدة والتحقق من توافق التطبيق والأعداد الفعلية مع الهيكل المعتمد.","إعداد وتحديث الخرائط التنظيمية والاحتفاظ بسجل للتغييرات.","تحليل الوظائف وإعداد الأوصاف الوظيفية من مرحلة التحليل وحتى الاعتماد.","تصميم منهجية تقييم الوظائف وعواملها وأوزانها ومستوياتها ونظام النقاط، وتقييم الوظائف القائمة والمستحدثة والمعدلة وربط النتائج بالدرجات ونطاقات الرواتب."]],
      ["هيكل الرواتب",["مراجعة نظام الرواتب القائم وإعادة تصميم هيكل الرواتب والدرجات الوظيفية والنطاقات المالية.","إجراء التحليل الداخلي والمقارنة المرجعية مع السوق.","مراجعة استثناءات الرواتب وتقديم التوصيات ومتابعة التطبيق والالتزام."]],
      ["دليل الموارد البشرية والسياسات والنماذج",["إعداد دليل الموارد البشرية من البداية ليغطي التوظيف والتدريب وشؤون العاملين والرواتب وإدارة الأداء.","إعداد سياسات وإجراءات جديدة ومراجعة وتطوير السياسات القائمة.","متابعة تطبيق السياسات والالتزام بها في الفروع وتحليل أسباب عدم الالتزام والتوصية بالإجراءات التصحيحية.","إنشاء بعض نماذج الموارد البشرية من البداية وتحديث نماذج أخرى ومتابعة استخدامها بالفروع ومراجعتها دوريًا وفق الملاحظات."]],
      ["التقارير ومدخلات فترة الاختبار",["إعداد تقارير عن إعداد وتحديث الأوصاف الوظيفية والوظائف التي تم تقييمها أو استحداثها أو تعديلها والإنجازات والمعوقات والتوصيات.","متابعة نتائج تقييم فترة الاختبار والتنسيق مع المديرين والتوصية بالتثبيت أو الإنهاء، بينما تتولى الموارد البشرية وشؤون العاملين تنفيذ القرار.","متابعة الأعداد المخططة والفعلية للقوى العاملة كانت ضمن تقارير التوظيف وليست مسؤولية مكررة ضمن التطوير المؤسسي."]]
    ]}},
    {en:{kicker:"FATHALLA MARKETS · TRAINING",title:"Training Needs, Programs & Evaluation",groups:[
      ["Training needs & planning",["Conducted Training Needs Analysis with department and branch managers.","Contributed to the annual training plan and training calendar."]],
      ["Program design & delivery",["Designed curricula, learning materials, learning objectives, activities, practical applications, and evaluation methods using the ADDIE model.","Personally delivered in-house training programs; training was conducted internally without external providers.","Contributed to the annual training plan rather than owning it as the sole plan owner."]],
      ["Evaluation & records",["Used pre- and post-training assessments and trainee performance evaluations.","Measured learning impact and on-the-job application with line managers.","Prepared reports covering programs, training hours, trainees, assessment results, effectiveness, and impact.","Managed attendance, training records, completion certificates, and training history."]]
    ]},ar:{kicker:"فتح الله ماركتس · التدريب",title:"الاحتياجات والبرامج والتقييم التدريبي",groups:[
      ["الاحتياجات والتخطيط التدريبي",["تنفيذ تحليل الاحتياجات التدريبية بالتعاون مع مديري الإدارات والفروع.","المساهمة في إعداد الخطة التدريبية السنوية والجدول التدريبي."]],
      ["تصميم البرامج وتنفيذها",["تصميم المناهج والمواد التدريبية والأهداف والأنشطة والتطبيقات العملية وطرق التقييم باستخدام نموذج ADDIE.","تنفيذ البرامج التدريبية داخليًا بشكل شخصي دون الاستعانة بمقدمي تدريب خارجيين."]],
      ["التقييم والسجلات",["استخدام التقييمات القبلية والبعدية وتقييم أداء المتدربين.","قياس أثر التدريب والتطبيق في العمل بالتعاون مع المديرين المباشرين.","إعداد تقارير تشمل البرامج وساعات التدريب وأعداد المتدربين ونتائج التقييم والفاعلية والأثر.","إدارة الحضور والسجلات التدريبية وشهادات الإتمام والسجل التدريبي."]]
    ]}},
    {en:{kicker:"ASH GROUP · INTEGRATED HR & OD",title:"Integrated HR & Organizational Development Systems",groups:[
      ["Organization & workforce",["Designed the organizational structure from scratch, including departments, sections, positions, titles, reporting lines, and role distribution.","Prepared manpower requirements by department and connected workforce needs with budget and operational requirements.","Designed job descriptions from job analysis and created HR forms from scratch; an HR Manual and HR Policies & Procedures were not part of this role's deliverables.","Designed the salary structure, job evaluation system, job grades, salary ranges, and job-to-grade links."]],
      ["Recruitment, payroll & personnel",["Designed the recruitment system, procedures, sourcing channels, interviews, selection, and hiring process; personally managed full-cycle recruitment and prepared periodic reports on hires, Time to Fill, and Cost per Hire with analysis and recommendations.","Personally processed monthly payroll, including entitlements, deductions, and settlements, and designed the payroll cycle, dates, steps, and controls.","Designed and operated leave and attendance arrangements: leave types, entitlements, balances, requests, approvals, working hours, shifts, lateness, early departure, overtime, and absence; attendance was integrated into leave management rather than treated as a separate system.","Designed employee records management using paper and electronic files, with classification, storage, and update procedures.","Designed employee contract management, including standardized contracts, renewals, expiry follow-up, and records; also designed hiring and separation procedures and end-of-service settlements, including final entitlements, unused leave, deductions, and settlements.","Oversaw personnel, labor office, and social insurance work performed directly by team members; reviewed files and periodic settlements for accuracy and legal compliance rather than personally conducting the authority-facing transactions.","Medical insurance management and payroll-tax/social-insurance reconciliation were outside scope."]],
      ["Performance, talent & development",["Designed and implemented the performance management system, including role-based KPIs linked to company and department objectives, appraisal cycles, and performance reports.","Used appraisal results to identify training needs and development plans; designed and followed individual development plans (IDPs), monitored execution, and compared performance before and after development.","Designed separate technical and behavioral competency frameworks, competencies by job, proficiency levels, assessments, gap analysis, and development actions.","Designed and implemented talent management, identifying and assessing potential and planning development and retention; no 9-box grid was used.","Designed succession planning for critical positions, successors, readiness levels, and development actions.","Designed career paths and the requirements for role transitions, including competencies, development, promotion, and succession links.","Designed promotion eligibility, criteria, and selection/comparison mechanisms linked to performance and competencies.","Designed financial and non-financial rewards and incentives, eligibility rules, and incentive calculations; performance results were linked to rewards and promotions.","Leadership development programs, a standalone L&D system, onboarding program, and probation management system were not part of this role."]],
      ["Employee relations & engagement",["Designed an Employee Satisfaction Survey from scratch, including survey dimensions, questions, and rating scales; conducted individual interviews, analyzed findings, and prepared improvement plans and recommendations. This was employee satisfaction, not an employee engagement program.","Designed grievance management to receive, handle, and resolve employee complaints and grievances.","Managed employee-management conflicts and conducted internal investigations through information gathering, hearings, documentation, fact analysis, and recommendations.","Designed the disciplinary action system, including violations, penalties, investigation, and documentation, aligned with the Work Regulations.","Prepared and updated Work Regulations covering working rules, hours, leaves, violations, and penalties.","Designed employee benefits and allowances, including benefit types, eligibility, and application; eligibility varied by job and grade.","Designed and implemented social insurance management controls; direct transactions were handled by staff under supervision and reviewed for accuracy and legal compliance."]],
      ["HR reporting & team supervision",["Prepared company-level reports on headcount movement (actual headcount, hires, separations, and net change), with breakdowns by department and job.","Prepared company-level turnover reports, including overall and department/job turnover, reason categories, exit interviews, and retention recommendations.","Prepared attendance and absence, overtime, payroll-cost, and employee-cost reports; workforce cost reporting included payroll, allowances, incentives, and insurance, with actual-versus-budget comparison, variance analysis, and recommendations at company level.","Supervised two HR team members, distributed tasks, and monitored day-to-day execution; direct labor-office and social-insurance execution was assigned to a team member under supervision.","The role did not include an HR annual plan and budget, medical insurance management, or performance assessment/training-needs evaluation of the HR team."]]
    ]},ar:{kicker:"ASH Group · أنظمة الموارد البشرية والتطوير المؤسسي",title:"أنظمة الموارد البشرية والتطوير المؤسسي المتكاملة",groups:[
      ["التنظيم والقوى العاملة",["تصميم الهيكل التنظيمي من البداية، بما يشمل الإدارات والأقسام والوظائف والمسميات وخطوط التبعية.","إعداد احتياجات العمالة حسب الإدارات وربطها بالميزانية ومتطلبات التشغيل.","إعداد الأوصاف الوظيفية بناءً على تحليل الوظائف وتصميم نماذج الموارد البشرية من البداية.","تصميم هيكل الرواتب ونظام تقييم الوظائف والدرجات والنطاقات وربط الوظائف بالدرجات."]],
      ["التوظيف والرواتب وشؤون العاملين",["تصميم نظام التوظيف وإجراءاته ومصادر الاستقطاب والمقابلات والاختيار والتعيين، وتنفيذ دورة التوظيف الكاملة بشكل مباشر وإعداد تقارير التعيينات وTime to Fill وCost per Hire مع التحليل والتوصيات.","تنفيذ الرواتب الشهرية شخصيًا، بما يشمل الاستحقاقات والاستقطاعات والتسويات، وتصميم دورة الرواتب ومواعيدها وخطواتها وضوابطها.","تصميم وتشغيل نظام الإجازات والحضور: أنواع الإجازات واستحقاقاتها وأرصدتها وطلباتها واعتمادها، وساعات العمل والورديات والتأخير والانصراف المبكر والعمل الإضافي والغياب؛ وكان الحضور مدمجًا في إدارة الإجازات وليس نظامًا منفصلًا.","تصميم نظام إدارة ملفات الموظفين ورقيًا وإلكترونيًا، بما يشمل التصنيف والحفظ وإجراءات التحديث.","تصميم إدارة عقود الموظفين وتجديدها ومتابعة انتهائها وتوحيد نموذج العقد، وإجراءات التعيين وإنهاء الخدمة وتسويات نهاية الخدمة بما يشمل المستحقات ورصيد الإجازات والخصومات.","الإشراف على أعمال شؤون العاملين ومكتب العمل والتأمينات الاجتماعية التي ينفذها أعضاء الفريق، ومراجعة الملفات والتسويات الدورية للتحقق من الدقة والالتزام القانوني، دون تولي التعاملات التنفيذية المباشرة مع الجهات.","لم تشمل المسؤوليات إدارة التأمين الطبي أو تسويات ضرائب المرتبات والتأمينات الاجتماعية."]],
      ["الأداء والمواهب والتطوير",["تصميم وتطبيق نظام إدارة الأداء، بما يشمل مؤشرات أداء لكل وظيفة مرتبطة بأهداف الشركة والإدارات ودورات التقييم وتقارير الأداء.","استخدام نتائج التقييم لتحديد الاحتياجات التدريبية وخطط التطوير؛ وتصميم ومتابعة خطط التطوير الفردية (IDPs) ومقارنة الأداء قبل التطوير وبعده.","تصميم أطر منفصلة للجدارات الفنية والسلوكية، والجدارات المطلوبة لكل وظيفة ومستويات الإتقان والتقييم وتحليل الفجوات وخطط التطوير.","تصميم وتطبيق نظام إدارة المواهب لتحديد الإمكانات وتقييمها وتطويرها والاحتفاظ بها، دون استخدام نموذج 9-Box.","تصميم تخطيط التعاقب الوظيفي للوظائف الحرجة وتحديد البدلاء ومستويات الجاهزية وإجراءات التطوير.","تصميم المسارات المهنية ومتطلبات الانتقال بين الوظائف، بما يشمل الجدارات والتطوير والترقيات والربط بالتعاقب الوظيفي.","تصميم نظام الترقيات ومعايير الأهلية والاختيار والمقارنة وربطه بالأداء والجدارات.","تصميم نظام المكافآت والحوافز المالية وغير المالية وشروط الاستحقاق وآليات الحساب وربط نتائج الأداء بالمكافآت والترقيات.","لم تشمل المسؤوليات برامج تطوير القيادات أو نظام تعلم وتطوير مستقل أو برنامج تهيئة موظفين جدد أو نظام إدارة فترة الاختبار."]],
      ["علاقات الموظفين ورضاهم",["تصميم استبيان رضا الموظفين من البداية، بما يشمل المحاور والأسئلة ومقاييس التقييم، وإجراء مقابلات فردية وتحليل النتائج وإعداد خطط وتوصيات التحسين؛ وكان ذلك قياسًا لرضا الموظفين وليس نظامًا لقياس الاندماج الوظيفي.","تصميم نظام إدارة الشكاوى والتظلمات واستقبالها والتعامل معها.","إدارة الخلافات بين الموظفين والإدارة وإجراء التحقيقات الداخلية من خلال جمع المعلومات وسماع الأقوال والتوثيق وتحليل الوقائع وإعداد التوصيات.","تصميم نظام الإجراءات التأديبية بما يشمل المخالفات والجزاءات والتحقيق والتوثيق بما يتوافق مع لائحة العمل.","إعداد وتحديث لائحة العمل التي تنظم قواعد العمل وساعاته والإجازات والمخالفات والجزاءات.","تصميم نظام مزايا وبدلات الموظفين وتحديد أنواع المزايا وشروط الاستحقاق وآليات التطبيق وفقًا للوظيفة والدرجة.","تصميم ضوابط إدارة التأمينات الاجتماعية والإشراف على تنفيذها بواسطة الموظفين ومراجعة الملفات والتسويات للتحقق من الدقة والالتزام القانوني."]],
      ["تقارير الموارد البشرية والإشراف",["إعداد تقارير على مستوى الشركة عن حركة أعداد العاملين، بما يشمل العدد الفعلي والتعيينات وحالات ترك العمل وصافي التغير، مع تفصيل حسب الإدارة والوظيفة.","إعداد تقارير دوران العمالة على مستوى الشركة والإدارات والوظائف، مع تصنيف الأسباب ومقابلات الخروج وتوصيات الاحتفاظ بالموظفين.","إعداد تقارير الحضور والغياب والعمل الإضافي وتكلفة الرواتب وتكلفة الموظف؛ وشملت تقارير تكلفة العمالة الرواتب والبدلات والحوافز والتأمينات ومقارنة الفعلي بالموازنة وتحليل الانحرافات والتوصيات على مستوى الشركة.","الإشراف على اثنين من موظفي الموارد البشرية وتوزيع المهام ومتابعة التنفيذ اليومي؛ وكان التنفيذ المباشر لمعاملات مكتب العمل والتأمينات الاجتماعية من اختصاص أحد أعضاء الفريق تحت إشرافك.","لم تشمل المسؤوليات إعداد الخطة والموازنة السنوية للموارد البشرية أو إدارة التأمين الطبي أو تقييم أداء أعضاء فريق الموارد البشرية وتحديد احتياجاتهم التدريبية."]]
    ]}}
  ];
  const companyProfiles = [
    {en:{kicker:"AK GROUP · OCT 2025 — PRESENT",title:"Organizational Development Supervisor",projects:[0,1,2,3,4,5]},ar:{kicker:"مجموعة العقاد · أكتوبر 2025 — حتى الآن",title:"مشرف التطوير المؤسسي",projects:[0,1,2,3,4,5]}},
    {en:{kicker:"FATHALLA MARKETS · OCT 2019 — AUG 2024",title:"Recruitment, Organizational Development & Training",projects:[6,7,8]},ar:{kicker:"فتح الله ماركتس · أكتوبر 2019 — أغسطس 2024",title:"التوظيف والتطوير المؤسسي والتدريب",projects:[6,7,8]}},
    {en:{kicker:"ASH GROUP · OCT 2021 — PRESENT · PART-TIME",title:"HR Business Partner · Integrated HR & OD",projects:[9]},ar:{kicker:"مجموعة ASH · أكتوبر 2021 — حتى الآن · دوام جزئي",title:"شريك أعمال الموارد البشرية · أنظمة الموارد البشرية والتطوير المؤسسي",projects:[9]}},
    {en:{kicker:"MAHONEY · AUG 2024 — OCT 2025",title:"Organizational Development Specialist",groups:[["Organizational Development",["Experience across organizational development activities, including organizational structures, job descriptions, policies and process documentation, performance, competency, and talent initiatives."]]]},ar:{kicker:"ماهوني · أغسطس 2024 — أكتوبر 2025",title:"أخصائي التطوير المؤسسي",groups:[["التطوير المؤسسي",["خبرة في مجالات التطوير المؤسسي، بما يشمل الهياكل التنظيمية والأوصاف الوظيفية والسياسات وتوثيق العمليات والأداء والجدارات ومبادرات إدارة المواهب."]]]}}
  ];
  const projectModal = $("#projectModal");
  let activeCompany = null;
  function renderProjectDetails() {
    if (!projectModal || activeCompany === null) return;
    const lang = document.documentElement.lang === "ar" ? "ar" : "en";
    const company = companyProfiles[activeCompany][lang];
    $("#projectModalKicker").textContent = company.kicker;
    $("#projectModalTitle").textContent = company.title;
    const groups = company.groups ? company.groups : company.projects.flatMap(index =>
      projectDetails[index][lang].groups.map(group => [projectDetails[index][lang].title + " · " + group[0], group[1]])
    );
    $("#projectModalBody").innerHTML = groups.map(group =>
      "<section class='project-detail-group'><h4>" + group[0] + "</h4><ul>" +
      group[1].map(point => "<li>" + point + "</li>").join("") +
      "</ul></section>"
    ).join("");
  }
  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove("is-open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    activeCompany = null;
  }
  function openCompany(card) {
    if (!projectModal || !card) return;
    const companyIndex = Number(card.dataset.company);
    if (!Number.isInteger(companyIndex) || companyIndex < 0 || companyIndex >= companyProfiles.length) return;
    activeCompany = companyIndex;
    renderProjectDetails();
    projectModal.classList.add("is-open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    const closeButton = $(".project-modal-close", projectModal);
    if (closeButton) closeButton.focus();
  }
  // Delegated click handling supports clicks on any child within each card.
  document.addEventListener("click", event => {
    const target = event.target instanceof Element ? event.target : null;
    const card = target && target.closest(".company-card[data-company]");
    if (card) openCompany(card);
  });
  document.addEventListener("keydown", event => {
    const target = event.target instanceof Element ? event.target : null;
    const card = target && target.closest(".company-card[data-company]");
    if (card && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openCompany(card);
    }
  });
  $$("[data-modal-close]").forEach(el => el.addEventListener("click", closeProjectModal));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && projectModal?.classList.contains("is-open")) closeProjectModal();
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = $(".site-header");
  const sections = $$("main section");
  const revealTargets = $$(".hero-copy > *, .hero-visual, .section-kicker, .intro-content h2, .intro-text, .section-heading, .highlight-card, .expertise-card, .project-card, .timeline-item, .credential, .contact-inner, .site-footer > *");

  document.documentElement.classList.add("motion-enabled");
  if (!reduceMotion && "IntersectionObserver" in window) {
    revealTargets.forEach((el, index) => {
      if (!el.closest(".hero")) {
        el.classList.add("motion-reveal");
        el.style.setProperty("--motion-delay", (index % 4) * 100 + "ms");
      } else {
        el.classList.add("motion-hero-item");
        el.style.setProperty("--motion-delay", (index % 5) * 120 + "ms");
      }
    });
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("motion-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    revealTargets.forEach(el => revealObserver.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add("motion-visible"));
  }

  if (!reduceMotion && "IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("motion-section-visible");
      });
    }, { threshold: 0.1 });
    sections.forEach(section => sectionObserver.observe(section));
  }

  const progress = document.createElement("div");
  progress.className = "motion-progress";
  progress.setAttribute("aria-hidden", "true");
  progress.innerHTML = "<span></span>";
  document.body.appendChild(progress);
  const progressBar = $("span", progress);
  let framePending = false;
  function updateScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progressBar.style.transform = "scaleX(" + ratio + ")";
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 20);
    framePending = false;
  }
  window.addEventListener("scroll", () => {
    if (!framePending) { requestAnimationFrame(updateScroll); framePending = true; }
  }, { passive: true });
  window.addEventListener("resize", updateScroll);
  updateScroll();

  const navLinks = $$(".desktop-nav a");
  const navSections = navLinks.map(link => $(link.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id));
      });
    }, { rootMargin: "-25% 0px -60% 0px" });
    navSections.forEach(section => navObserver.observe(section));
  }

  const hero = $(".hero-visual");
  const portrait = $(".portrait-frame");
  if (!reduceMotion && hero && portrait && window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
    hero.addEventListener("pointermove", event => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      portrait.style.transform = "perspective(900px) rotateY(" + (x * 9) + "deg) rotateX(" + (-y * 7) + "deg) translateY(-4px)";
    });
    hero.addEventListener("pointerleave", () => { portrait.style.transform = ""; });
  }
})();