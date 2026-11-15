(() => {
  "use strict";
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const langToggle = $("#langToggle");
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
      ["Organizational structure",["Designed the AK Group structure from scratch: departments, sections, positions, job titles, and reporting lines.","Prepared and updated organizational charts and documented structural changes.","Reviewed subsidiary organizational structures and provided feedback and guidance."]],
      ["Job architecture & job documentation",["Developed the Group job architecture, including job families and job levels, while preserving each subsidiary’s distinct roles and titles.","Created a Group-wide job analysis methodology to capture duties, responsibilities, qualifications, experience, skills, and competencies.","Created a common job description template and prepared AK Group job descriptions from scratch.","Reviewed subsidiary job architectures and job descriptions for alignment with Group methodology."]],
      ["Job change governance",["Reviewed subsidiary requests to create, modify, or delete positions and provided recommendations before approval."]]
    ]},ar:{kicker:"مجموعة العقاد · التصميم التنظيمي",title:"الهيكل التنظيمي وهندسة الوظائف",groups:[
      ["الهيكل التنظيمي",["تصميم هيكل AK Group من البداية، بما يشمل الإدارات والأقسام والوظائف والمسميات وخطوط التبعية.","إعداد وتحديث الخرائط التنظيمية وتوثيق التغييرات الهيكلية.","مراجعة الهياكل التنظيمية للشركات التابعة وتقديم الملاحظات والتوجيه."]],
      ["هندسة الوظائف وتوثيقها",["تطوير هندسة الوظائف للمجموعة، بما يشمل العائلات والمستويات الوظيفية، مع الحفاظ على اختلاف الوظائف والمسميات بين الشركات التابعة.","إعداد منهجية موحدة لتحليل الوظائف لجمع وتحليل المهام والمسؤوليات والمؤهلات والخبرات والمهارات والجدارات.","إعداد نموذج موحد للوصف الوظيفي وإعداد أوصاف وظائف AK Group من البداية.","مراجعة هندسة الوظائف والأوصاف الوظيفية للشركات التابعة للتأكد من توافقها مع منهجية المجموعة."]],
      ["حوكمة التغييرات الوظيفية",["مراجعة طلبات إنشاء الوظائف أو تعديلها أو إلغائها في الشركات التابعة وتقديم التوصيات قبل الاعتماد."]]
    ]}},
    {en:{kicker:"AK GROUP · JOB EVALUATION",title:"Point-Factor Job Evaluation Methodology",groups:[
      ["Methodology design",["Designed a point-factor job evaluation methodology from scratch.","Defined compensable factors, sub-factors, factor weights, levels, scoring rules, and the total points architecture.","Structured the methodology around Know-How, Accountability, and Problem Solving."]],
      ["Application & grading",["Applied the methodology to AK Group jobs and linked evaluation outcomes to job grades and the salary structure.","Reviewed subsidiary job evaluation methodologies and results for correct application."]],
      ["Governance & maintenance",["Designed an evaluation appeal process.","Established periodic re-evaluation and review mechanisms.","Defined controls for evaluating newly created or revised jobs."]]
    ]},ar:{kicker:"مجموعة العقاد · تقييم الوظائف",title:"منهجية تقييم الوظائف بنظام النقاط",groups:[
      ["تصميم المنهجية",["تصميم منهجية تقييم الوظائف بنظام النقاط من البداية.","تحديد العوامل والعوامل الفرعية والأوزان والمستويات وقواعد احتساب النقاط وإجمالي النقاط.","بناء المنهجية على محاور المعرفة والمسؤولية وحل المشكلات."]],
      ["التطبيق والربط بالدرجات",["تطبيق المنهجية على وظائف AK Group وربط نتائج التقييم بالدرجات الوظيفية وهيكل الرواتب.","مراجعة منهجيات ونتائج تقييم الوظائف بالشركات التابعة للتحقق من التطبيق الصحيح."]],
      ["الحوكمة والتحديث",["تصميم آلية للتظلم من نتائج التقييم.","وضع آلية لإعادة التقييم والمراجعة الدورية.","تحديد ضوابط تقييم الوظائف المستحدثة أو المعدلة."]]
    ]}},
    {en:{kicker:"AK GROUP · COMPENSATION",title:"Salary Structure & Compensation Framework",groups:[
      ["Salary structure",["Designed the AK Group salary structure, including job grades, salary ranges, and job-to-grade mapping.","Conducted Compensation & Benefits market benchmarking.","Designed the compensation framework and pay philosophy."]],
      ["Salary review & controls",["Developed salary increase guidelines for annual and exceptional increases, including relevant decision criteria.","Designed the annual salary review process and analyzed proposed increases and their impact before submission for approval.","Established governance for salary exceptions and salaries outside approved ranges.","Defined a mechanism for periodic salary structure review and updates based on market and inflation changes."]],
      ["Subsidiary deliverables",["Designed the salary structure for AK-Trade.","Reviewed and developed the salary structure for AK-Ships."]]
    ]},ar:{kicker:"مجموعة العقاد · التعويضات",title:"هيكل الرواتب وإطار التعويضات",groups:[
      ["هيكل الرواتب",["تصميم هيكل الرواتب لمجموعة العقاد، بما يشمل الدرجات الوظيفية ونطاقات الرواتب وربط الوظائف بالدرجات.","إجراء المقارنات المرجعية للسوق في مجال الأجور والمزايا.","تصميم إطار التعويضات وفلسفة الأجور."]],
      ["مراجعة الرواتب والضوابط",["إعداد إرشادات الزيادات السنوية والاستثنائية ومعايير اتخاذ القرار ذات الصلة.","تصميم إجراءات المراجعة السنوية للرواتب وتحليل الزيادات المقترحة وأثرها قبل رفعها للاعتماد.","وضع ضوابط الاستثناءات والرواتب التي تقع خارج النطاقات المعتمدة.","تحديد آلية للمراجعة والتحديث الدوري لهيكل الرواتب وفقًا لتغيرات السوق والتضخم."]],
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
      ["Planning & review",["Prepared the AK Group manpower plan.","Reviewed manpower plans submitted by subsidiary companies."]],
      ["Implementation monitoring",["Followed up approved subsidiary manpower plans in direct coordination with subsidiary HR managers.","Monitored planned versus actual headcount.","Analyzed headcount variances and prepared periodic reports showing implementation progress and deviations."]]
    ]},ar:{kicker:"مجموعة العقاد · تخطيط القوى العاملة",title:"تخطيط القوى العاملة ومتابعة التنفيذ",groups:[
      ["التخطيط والمراجعة",["إعداد خطة القوى العاملة لمجموعة العقاد.","مراجعة خطط القوى العاملة المقدمة من الشركات التابعة."]],
      ["متابعة التنفيذ",["متابعة تنفيذ الخطط المعتمدة للشركات التابعة بالتنسيق المباشر مع مديري الموارد البشرية بها.","متابعة الأعداد المخططة مقارنة بالأعداد الفعلية.","تحليل الانحرافات وإعداد تقارير دورية توضح نسب التنفيذ والفروق."]]
    ]}},
    {en:{kicker:"AK GROUP · HR GOVERNANCE",title:"Group HR Governance, Policies & SOPs",groups:[
      ["Group governance",["Developed the HR Organizational Governance Framework defining parent-company and subsidiary HR roles and responsibilities.","Defined approval and escalation mechanisms between the parent company and subsidiaries.","Prepared and reviewed HR Service Level Agreements (SLAs), defined HR service KPIs, and prepared periodic service performance reports."]],
      ["Policies, SOPs & methodologies",["Prepared and reviewed HR policies and SOPs for AK Group.","Developed OD policies, SOPs, methodologies, and forms for the parent company.","Prepared the Group HR Policies & Procedures Framework to establish shared principles and standards for subsidiaries."]],
      ["Subsidiary guidance",["Reviewed subsidiary HR policies, SOPs, OD documents, and forms and provided comments and guidance to their HR teams.","Provided consultation to subsidiary HR managers through periodic coordination meetings. The role is advisory and does not include final approval authority over subsidiary HR decisions."]]
    ]},ar:{kicker:"مجموعة العقاد · حوكمة الموارد البشرية",title:"حوكمة الموارد البشرية والسياسات والإجراءات",groups:[
      ["حوكمة المجموعة",["تطوير إطار الحوكمة التنظيمية للموارد البشرية لتحديد أدوار ومسؤوليات الشركة الأم والشركات التابعة.","تحديد آليات الاعتماد والتصعيد بين الشركة الأم والشركات التابعة.","إعداد ومراجعة اتفاقيات مستوى الخدمة (SLAs)، وتحديد مؤشرات أداء خدمات الموارد البشرية وإعداد تقارير دورية عن أداء الخدمة."]],
      ["السياسات والإجراءات والمنهجيات",["إعداد ومراجعة سياسات وإجراءات الموارد البشرية في AK Group.","تطوير سياسات وإجراءات ومنهجيات ونماذج التطوير المؤسسي بالشركة الأم.","إعداد إطار سياسات وإجراءات الموارد البشرية للمجموعة لتحديد المبادئ والمعايير المشتركة للشركات التابعة."]],
      ["توجيه الشركات التابعة",["مراجعة سياسات وإجراءات الموارد البشرية ووثائق التطوير المؤسسي والنماذج بالشركات التابعة وتقديم الملاحظات والتوجيه لفرق الموارد البشرية.","تقديم الاستشارات لمديري الموارد البشرية بالشركات التابعة من خلال اجتماعات التنسيق الدورية. ويظل الدور استشاريًا دون سلطة الاعتماد النهائي لقرارات الموارد البشرية بالشركات التابعة."]]
    ]}},
    {en:{kicker:"FATHALLA MARKETS · RECRUITMENT",title:"Recruitment & New Branch Staffing",groups:[
      ["Full-cycle recruitment",["Managed recruitment for blue-collar and white-collar positions from hiring request through selection, offer, documentation, medical checks, and joining.","Coordinated interviews and candidate decisions with branch managers and department leaders; participated in final selection."]],
      ["Five new branch openings",["Determined staffing numbers by job, department, and shift for five new branches.","Prepared branch-level recruitment timelines and tracked actual hires against targets and opening schedules.","Coordinated field visits and hiring activity to ensure staffing readiness before opening."]],
      ["Recruitment performance",["Monitored headcount after opening, shortages, excess staffing, turnover, and replacement hiring.","Tracked Time to Fill and Cost per Hire by job/source, recruitment source effectiveness, and probation pass rates.","Prepared periodic recruitment reports with KPI analysis, delays, and recommendations.","Allocated requirements and monitored part of the recruitment team’s progress."]]
    ]},ar:{kicker:"فتح الله ماركتس · التوظيف",title:"التوظيف وتجهيز العمالة للفروع الجديدة",groups:[
      ["دورة التوظيف الكاملة",["إدارة التوظيف للوظائف التشغيلية والإدارية من طلب الاحتياج وحتى الاختيار والعرض الوظيفي والمستندات والكشف الطبي والتعيين.","تنسيق المقابلات وقرارات الاختيار مع مديري الفروع والإدارات والمشاركة في الاختيار النهائي."]],
      ["افتتاح خمسة فروع جديدة",["تحديد أعداد العمالة المطلوبة حسب الوظيفة والإدارة والوردية للفروع الخمسة.","إعداد جداول زمنية للتوظيف لكل فرع ومتابعة التعيينات الفعلية مقارنة بالمستهدف ومواعيد الافتتاح.","تنسيق الزيارات الميدانية وأنشطة التوظيف لضمان جاهزية العمالة قبل الافتتاح."]],
      ["متابعة أداء التوظيف",["متابعة أعداد العاملين بعد الافتتاح والعجز والزيادة ودوران العمالة والتعيينات البديلة.","متابعة Time to Fill وCost per Hire حسب الوظيفة ومصدر التوظيف وفاعلية المصادر ومعدلات اجتياز فترة الاختبار.","إعداد تقارير دورية تتضمن تحليل مؤشرات التوظيف والتأخيرات والتوصيات.","توزيع بعض متطلبات التوظيف ومتابعة تقدم فريق التوظيف."]]
    ]}},
    {en:{kicker:"FATHALLA MARKETS · ORGANIZATIONAL DEVELOPMENT",title:"Organizational Development & HR Systems",groups:[
      ["Organizational structure & job documentation",["Updated the existing organizational structure, including adding or removing positions and changing job titles and reporting lines.","Followed approved structure changes and checked that implementation and headcount reflected the approved structure.","Prepared and updated organizational charts and maintained change records.","Conducted job analysis and prepared job descriptions from analysis through approval.","Designed job evaluation methodology, factors, weights, levels, and scoring; evaluated existing, new, and modified jobs and linked outcomes to grades and salary ranges."]],
      ["Salary structure",["Reviewed the existing salary system and redesigned the salary structure, job grades, and salary ranges.","Conducted internal analysis and external market benchmarking.","Reviewed salary exceptions and provided recommendations; monitored implementation and compliance."]],
      ["HR manual, policies & forms",["Prepared the HR Manual from scratch covering Recruitment, Training, Personnel, Payroll, and Performance Management.","Prepared new HR policies and procedures and reviewed and developed existing ones.","Monitored branch application and compliance, analyzed non-compliance causes, and recommended corrective actions.","Created some HR forms from scratch and updated others; followed their use in branches and periodically revised them based on feedback."]],
      ["Reporting & probation input",["Prepared reports on job descriptions, evaluations, new or modified jobs, achievements, obstacles, and recommendations.","Reviewed probation evaluation results and recommended confirmation or termination; execution remained with HR/Personnel."]]
    ]},ar:{kicker:"فتح الله ماركتس · التطوير المؤسسي",title:"التطوير المؤسسي وأنظمة الموارد البشرية",groups:[
      ["الهيكل التنظيمي وتوثيق الوظائف",["تحديث الهيكل التنظيمي القائم، بما يشمل إضافة أو إلغاء وظائف وتعديل المسميات وخطوط التبعية.","متابعة التغييرات الهيكلية المعتمدة والتحقق من توافق التطبيق والأعداد الفعلية مع الهيكل المعتمد.","إعداد وتحديث الخرائط التنظيمية والاحتفاظ بسجل للتغييرات.","تحليل الوظائف وإعداد الأوصاف الوظيفية من مرحلة التحليل وحتى الاعتماد.","تصميم منهجية تقييم الوظائف وعواملها وأوزانها ومستوياتها ونظام النقاط، وتقييم الوظائف القائمة والمستحدثة والمعدلة وربط النتائج بالدرجات ونطاقات الرواتب."]],
      ["هيكل الرواتب",["مراجعة نظام الرواتب القائم وإعادة تصميم هيكل الرواتب والدرجات الوظيفية والنطاقات المالية.","إجراء التحليل الداخلي والمقارنة المرجعية مع السوق.","مراجعة استثناءات الرواتب وتقديم التوصيات ومتابعة التطبيق والالتزام."]],
      ["دليل الموارد البشرية والسياسات والنماذج",["إعداد دليل الموارد البشرية من البداية ليغطي التوظيف والتدريب وشؤون العاملين والرواتب وإدارة الأداء.","إعداد سياسات وإجراءات جديدة ومراجعة وتطوير السياسات القائمة.","متابعة تطبيق السياسات والالتزام بها في الفروع وتحليل أسباب عدم الالتزام والتوصية بالإجراءات التصحيحية.","إنشاء بعض نماذج الموارد البشرية من البداية وتحديث نماذج أخرى ومتابعة استخدامها بالفروع ومراجعتها دوريًا وفق الملاحظات."]],
      ["التقارير ومدخلات فترة الاختبار",["إعداد تقارير عن الأوصاف الوظيفية والتقييمات والوظائف الجديدة أو المعدلة والإنجازات والمعوقات والتوصيات.","متابعة نتائج تقييم فترة الاختبار والتوصية بالتثبيت أو الإنهاء، بينما تتولى الموارد البشرية وشؤون العاملين تنفيذ القرار."]]
    ]}},
    {en:{kicker:"FATHALLA MARKETS · TRAINING",title:"Training Needs, Programs & Evaluation",groups:[
      ["Training needs & planning",["Conducted Training Needs Analysis with department and branch managers.","Contributed to the annual training plan and training calendar."]],
      ["Program design & delivery",["Designed curricula, learning materials, objectives, activities, practical applications, and evaluation methods using the ADDIE model.","Personally delivered in-house training programs; training was conducted internally without external providers."]],
      ["Evaluation & records",["Used pre- and post-training assessments and trainee performance evaluations.","Measured learning impact and on-the-job application with line managers.","Prepared reports covering programs, training hours, trainees, assessment results, effectiveness, and impact.","Managed attendance, training records, completion certificates, and training history."]]
    ]},ar:{kicker:"فتح الله ماركتس · التدريب",title:"الاحتياجات والبرامج والتقييم التدريبي",groups:[
      ["الاحتياجات والتخطيط التدريبي",["تنفيذ تحليل الاحتياجات التدريبية بالتعاون مع مديري الإدارات والفروع.","المساهمة في إعداد الخطة التدريبية السنوية والجدول التدريبي."]],
      ["تصميم البرامج وتنفيذها",["تصميم المناهج والمواد التدريبية والأهداف والأنشطة والتطبيقات العملية وطرق التقييم باستخدام نموذج ADDIE.","تنفيذ البرامج التدريبية داخليًا بشكل شخصي دون الاستعانة بمقدمي تدريب خارجيين."]],
      ["التقييم والسجلات",["استخدام التقييمات القبلية والبعدية وتقييم أداء المتدربين.","قياس أثر التدريب والتطبيق في العمل بالتعاون مع المديرين المباشرين.","إعداد تقارير تشمل البرامج وساعات التدريب وأعداد المتدربين ونتائج التقييم والفاعلية والأثر.","إدارة الحضور والسجلات التدريبية وشهادات الإتمام والسجل التدريبي."]]
    ]}},
    {en:{kicker:"ASH GROUP · INTEGRATED HR & OD",title:"Integrated HR & Organizational Development Systems",groups:[
      ["Organization & workforce",["Designed the organizational structure from scratch, including departments, sections, positions, titles, and reporting lines.","Prepared manpower requirements by department and connected workforce needs with budget and operational requirements.","Designed job descriptions from job analysis and created HR forms from scratch.","Designed the salary structure, job evaluation system, job grades, salary ranges, and job-to-grade links."]],
      ["Recruitment, payroll & personnel",["Designed recruitment procedures and sourcing, interview, selection, and hiring processes; personally managed full-cycle recruitment.","Personally processed monthly payroll, including entitlements, deductions, and settlements, and designed the payroll cycle, dates, steps, and controls.","Designed and operated leave and attendance arrangements, employee records, contract administration, hiring and separation procedures, and end-of-service settlements.","Oversaw personnel, labor office, and social insurance work performed by team members; reviewed files and periodic settlements for accuracy and compliance."]],
      ["Performance, talent & development",["Designed and implemented the performance management system, role-based KPIs, appraisal cycles, and performance reporting.","Used appraisal results for training needs, development plans, and IDPs; followed development execution and before/after improvement.","Designed technical and behavioral competency frameworks and used assessments for gap analysis and development.","Designed and implemented talent management, succession planning, career paths, promotion, and rewards and incentives systems."]],
      ["Employee relations & engagement",["Designed an employee satisfaction survey and conducted individual interviews; analyzed findings and prepared improvement recommendations.","Designed grievance management and disciplinary action systems and prepared or updated work regulations.","Handled employee-management conflicts and conducted internal investigations, documenting facts and recommendations."]],
      ["HR reporting & team supervision",["Prepared reports on headcount movements, turnover and reasons, attendance, overtime, payroll cost, and employee cost, with analysis and recommendations.","Supervised two HR team members, distributed work, and monitored day-to-day execution."]]
    ]},ar:{kicker:"ASH Group · أنظمة الموارد البشرية والتطوير المؤسسي",title:"أنظمة الموارد البشرية والتطوير المؤسسي المتكاملة",groups:[
      ["التنظيم والقوى العاملة",["تصميم الهيكل التنظيمي من البداية، بما يشمل الإدارات والأقسام والوظائف والمسميات وخطوط التبعية.","إعداد احتياجات العمالة حسب الإدارات وربطها بالميزانية ومتطلبات التشغيل.","إعداد الأوصاف الوظيفية بناءً على تحليل الوظائف وتصميم نماذج الموارد البشرية من البداية.","تصميم هيكل الرواتب ونظام تقييم الوظائف والدرجات والنطاقات وربط الوظائف بالدرجات."]],
      ["التوظيف والرواتب وشؤون العاملين",["تصميم إجراءات التوظيف ومصادر الاستقطاب والمقابلات والاختيار والتعيين، وتنفيذ دورة التوظيف الكاملة بشكل مباشر.","تنفيذ الرواتب الشهرية شخصيًا، بما يشمل الاستحقاقات والاستقطاعات والتسويات، وتصميم دورة الرواتب ومواعيدها وخطواتها وضوابطها.","تصميم وتشغيل أنظمة الإجازات والحضور وسجلات الموظفين وإدارة العقود وإجراءات التعيين وإنهاء الخدمة والتسويات النهائية.","الإشراف على أعمال شؤون العاملين ومكتب العمل والتأمينات الاجتماعية التي ينفذها أعضاء الفريق، ومراجعة الملفات والتسويات الدورية للتحقق من الدقة والالتزام."]],
      ["الأداء والمواهب والتطوير",["تصميم وتطبيق نظام إدارة الأداء ومؤشرات الأداء حسب الوظائف ودورات التقييم وتقارير الأداء.","استخدام نتائج التقييم لتحديد الاحتياجات التدريبية وخطط التطوير والخطط الفردية، ومتابعة تنفيذ التطوير وقياس التحسن قبل وبعد.","تصميم أطر الجدارات الفنية والسلوكية واستخدام التقييمات لتحليل الفجوات والتطوير.","تصميم وتطبيق أنظمة إدارة المواهب وتخطيط التعاقب الوظيفي والمسارات المهنية والترقيات والمكافآت والحوافز."]],
      ["علاقات الموظفين ورضاهم",["تصميم استبيان لرضا الموظفين وإجراء مقابلات فردية وتحليل النتائج وإعداد توصيات التحسين.","تصميم أنظمة إدارة الشكاوى والتظلمات والإجراءات التأديبية وإعداد أو تحديث لائحة العمل.","إدارة الخلافات بين الموظفين والإدارة وإجراء التحقيقات الداخلية وتوثيق الوقائع والتوصيات."]],
      ["تقارير الموارد البشرية والإشراف",["إعداد تقارير حركة أعداد العاملين ودوران العمالة وأسبابها والحضور والعمل الإضافي وتكلفة الرواتب وتكلفة الموظفين، مع التحليل والتوصيات.","الإشراف على اثنين من موظفي الموارد البشرية وتوزيع المهام ومتابعة التنفيذ اليومي."]]
    ]}}
  ];
  const projectModal = $("#projectModal");
  let activeProject = null;
  function renderProjectDetails() {
    if (!projectModal || activeProject === null) return;
    const lang = document.documentElement.lang === "ar" ? "ar" : "en";
    const item = projectDetails[activeProject][lang];
    $("#projectModalKicker").textContent = item.kicker;
    $("#projectModalTitle").textContent = item.title;
    $("#projectModalBody").innerHTML = item.groups.map(group =>
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
    activeProject = null;
  }
  function openProject(card) {
    activeProject = Number(card.dataset.project);
    renderProjectDetails();
    projectModal.classList.add("is-open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    $(".project-modal-close", projectModal).focus();
  }
  $$("[data-project]").forEach(card => {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-haspopup", "dialog");
    card.addEventListener("click", event => {
      if (event.target.closest("a")) return;
      openProject(card);
    });
    card.addEventListener("keydown", event => {
      if ((event.key === "Enter" || event.key === " ") && event.target === card) {
        event.preventDefault();
        openProject(card);
      }
    });
  });
  $$("[data-modal-close]").forEach(el => el.addEventListener("click", closeProjectModal));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && projectModal?.classList.contains("is-open")) closeProjectModal();
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = $(".site-header");
  const sections = $$("main section");
  const revealTargets = $$(".hero-copy > *, .hero-visual, .section-kicker, .intro-content h2, .intro-text, .section-heading, .expertise-card, .project-card, .timeline-item, .credential, .contact-inner, .site-footer > *");

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