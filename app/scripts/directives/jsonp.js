'use strict';

/**
 * @ngdoc directive
 * @name classifiedApp.directive:jsonp
 * @description
 * # jsonp
 */
var degrees={
    "DC": [{
        "requirements": [],
        "department": "ANTHIS",
        "name": "A_MAJ in ANTHIS",
        "type": "A_MAJ",
        "year": ["2006", "2004", "2002", "2001"]
    }, {
        "requirements": ["Computing Prereq", "Concepts of Math", "Statistics", "Fundamental Structures I", "Fundamental Structures II", "AI or PSMT or IPDP", "Cog Psych or IPAI", "Res Mtds Cog Psych", "Experimental Design", "Plus One Cog Psych", "4 Courses - Track", "2 Additional Sci"],
        "department": "COGSCI",
        "name": "A_MAJ in COGSCI",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:COGSCI.MAJ"
    }, {
        "requirements": ["2nd 9 units-Survey of Forms", "4 CW Workshops", "1 Reading in Forms"],
        "department": "CW",
        "name": "A_MAJ in CW",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:CW.MAJ"
    }, {
        "requirements": [],
        "department": "DECSCI",
        "name": "A_MAJ in DECSCI",
        "type": "A_MAJ",
        "year": ["2011", "2010", "2008", "2002", "2001"]
    }, {
        "requirements": ["Differential/Integral Calc.", "Multivar. Analysis & Approx.", "3rd Mathem. Course", "Intro to Prob and Stats I", "Econometrics I", "Econometrics II", "Writing Requirement", "Economics Colloquium", "Principles of Economics", "Interm. Microeconomics", "Interm. Macroeconomics", "1st Econ. Elective", "2nd Econ. Elective", "3rd Econ. Elective", "4th Econ. Elective", "5th Econ. Elective", "6th Econ. Elective", "Senior Project Requirement"],
        "department": "ECO",
        "name": "A_MAJ in ECO",
        "type": "A_MAJ",
        "year": ["2014", "2013", "2012", "2011", "2010", "2008", "2006", "2004", "2002", "2000"]
    }, {
        "requirements": ["Differential/Integral Calc.", "Integ, Concepts, or Optim.", "Multivar. Analysis & Approx.", "Matrix Algebra", "Writing for Economists", "Principles of Economics", "Int. Microeconomics", "Int. Macroeconomics", "Econometrics", "1st Econ. Elective", "2nd Econ. Elective", "3rd Econ. Elective", "Intro. Data Analysis", "Intermediate Data Analysis", "Intro to Prob. Theory", "Intro to Stats. Inference", "Modern Regression", "Adv. Data Analysis", "Statistical Computing", "1st Stat. Elective", "2nd Stat. Elective"],
        "department": "ECOSTA",
        "name": "A_MAJ in ECOSTA",
        "type": "A_MAJ",
        "year": ["2014", "2013", "2012", "2011", "2010"]
    }, {
        "requirements": ["Economics", "Policy History-9 units", "US History-9 units", "Non-US History-9 units", "Hist Mthds & Approaches", "Ethics-9 units", "Political Phil-9 units", "Fnds of Social Sci-9 units", "Applied Philosophy-9 units", "History or Philosophy", "Electives-27 units)"],
        "department": "EHPP",
        "name": "A_MAJ in EHPP",
        "type": "A_MAJ",
        "year": ["2014", "2006"]
    }, {
        "requirements": ["Interpretive Practices", "Research in Eng Studies", "Rhetoric Requirement", "76-3xx English-18u", "76-4xx English Sem-18u"],
        "department": "ENG",
        "name": "A_MAJ in ENG",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:ENG.MAJ"
    }, {
        "requirements": ["French Culture", "Francophone World", "French Social Cntxts", "Core in Modern Languages", "Senior Seminar", "List A complete 45 units", "List B complete 9 units"],
        "department": "FRANCO",
        "name": "A_MAJ in FRANCO",
        "year": ["2004"],
        "type": "A_MAJ",
        "MajorFile": "2004:HSS:A_MAJ:FRANCO.MAJ"
    }, {
        "requirements": ["French Culture", "Francophone Cultures", "Cont Spoken French", "Learning About Lang Learn", "Senior Seminar", "Core in History", "List A/B not to exceed 45 un"],
        "department": "FRENCH",
        "name": "A_MAJ in FRENCH",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:FRENCH.MAJ"
    }, {
        "requirements": ["Adv Gram, Styl & Wr", "Contmp Spoken German", "Intro German Studies", "Learning About Lang Learn", "Senior Seminar", "Core in History", "List A/B not to exceed 45 un"],
        "department": "GERMAN",
        "name": "A_MAJ in GERMAN",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:GERMAN.MAJ"
    }, {
        "requirements": ["Statistical Methods", "Empir Resrch Methods", "Policy Analysis I", "Policy Analysis II", "Dec Proc Am Pol Inst", "Theories of Intl Rel", "Comparative Politics", "Intl Pol Economy", "Intl Politics", "Intl Cultures", "18 units to equal 45", "88-xxx GP electives", "Stat Reas & Prac", "1 semester calculus"],
        "department": "GP",
        "name": "A_MAJ in GP",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:GP.MAJ"
    }, {
        "requirements": ["Intro to Global Studies", "Advanced Seminar", "Complete 18 units", "Complete 27 units", "Complete 27 units", "Global Histories", "Advanced level proficiency"],
        "department": "GS",
        "name": "A_MAJ in GS",
        "type": "A_MAJ",
        "year": ["2014", "2012", "2009"]
    }, {
        "requirements": ["United States Survey Course", "Non-U.S. Survey Course", "Required Methodology Course", "History Electives", "Historical Research Seminar"],
        "department": "HIS",
        "name": "A_MAJ in HIS",
        "type": "A_MAJ",
        "year": ["2013", "2009"]
    }, {
        "requirements": [],
        "department": "HISPOL",
        "name": "A_MAJ in HISPOL",
        "type": "A_MAJ",
        "year": ["2004", "2002", "2001"]
    }, {
        "requirements": ["Dec Proc Am Pol Inst", "Pol Sci Research Methods", "Comparative Politics", "Theories of Intl Rel", "IRP Capstone Policy Forum", "Statistical Methods", "Economics", "Grand Strategy Pol Inst", "Econ & Society or Intl Cult", "84-xxx IPS electives", "Intermediate II level", "Stat Reas & Prac", "1 semester calculus", "Analytic Methods"],
        "department": "INTRELP",
        "name": "A_MAJ in INTRELP",
        "type": "A_MAJ",
        "year": ["2015", "2013", "2010", "2009"]
    }, {
        "requirements": ["Interm Japanese II", "Japanese Lang & Cult", "Adv Japanese I", "Adv Japanese II", "Learning About LL", "Senior Seminar", "History Core Course", "Electives - 36u"],
        "department": "JAPAN",
        "name": "A_MAJ in JAPAN",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:JAPAN.MAJ"
    }, {
        "requirements": ["Introductory Course", "Sounds", "Structure", "Meaning", "Same Language-18 units", "45/27 units one group", "Approved Thesis Proj."],
        "department": "LNGHSS",
        "name": "A_MAJ in LNGHSS",
        "year": ["2007"],
        "type": "A_MAJ",
        "MajorFile": "2007:HSS:A_MAJ:LNGHSS.MAJ"
    }, {
        "requirements": [],
        "department": "LOGCPTA",
        "name": "A_MAJ in LOGCPTA",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:LOGCPTA.MAJ"
    }, {
        "requirements": ["Calculus I", "Calculus II", "Statistics I", "Statistics II", "Principles of Econ.", "Intermediate Micro.", "Econometrics I", "Econometrics II", "Intermediate Macro.", "Additional Econ.", "Additional Econ.", "Additional Econ.", "Additional Econ.", "3 Additional IM"],
        "department": "MGLECO",
        "name": "A_MAJ in MGLECO",
        "year": ["2000"],
        "type": "A_MAJ",
        "MajorFile": "2000:HSS:A_MAJ:MGLECO.MAJ"
    }, {
        "requirements": [],
        "department": "PHI",
        "name": "A_MAJ in PHI",
        "type": "A_MAJ",
        "year": ["2010", "2008"]
    }, {
        "requirements": [],
        "department": "POLMGMT",
        "name": "A_MAJ in POLMGMT",
        "type": "A_MAJ",
        "year": ["2011", "2010", "2008", "2002"]
    }, {
        "requirements": ["Calculus", "Statistics", "Decision Processes in A P I", "Elec Sys & Proc OR", "Comp Pol OR", "Policy Analysis I", "Policy Analysis II", "Policy Analysis III", "Statistical Methods", "Empir Resrch Mtds", "two from 88-xxx", "two additional electives"],
        "department": "POLSCI",
        "name": "A_MAJ in POLSCI",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:HSS:A_MAJ:POLSCI.MAJ"
    }, {
        "requirements": [],
        "department": "PSY",
        "name": "A_MAJ in PSY",
        "type": "A_MAJ",
        "year": ["2015", "2010", "2004", "2001"]
    }, {
        "requirements": ["Intro Prof & Tech Writing", "Style", "Argument", "9 units Rhetoric Course", "36 units Adv Wr/Rhet Courses"],
        "department": "PW",
        "name": "A_MAJ in PW",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:PW.MAJ"
    }, {
        "requirements": ["Survey Russian History", "Two History Courses", "Elementary Russian I", "Elementary Russian II", "Interm Russian I", "Interm Russian II", "Advanced Russian I", "Required Electives - 18u", "Required Ind Study"],
        "department": "RUSSTU",
        "name": "A_MAJ in RUSSTU",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:RUSSTU.MAJ"
    }, {
        "requirements": [],
        "department": "SCH",
        "name": "A_MAJ in SCH",
        "type": "A_MAJ",
        "year": ["2004", "2002"]
    }, {
        "requirements": [],
        "department": "SDM",
        "name": "A_MAJ in SDM",
        "type": "A_MAJ",
        "year": ["2009", "2008", "2006", "2000"]
    }, {
        "requirements": ["History Workshop", "Intro Social History", "New Tpcs Soc History", "Social Hist Res Sem", "Hist Civilization-9u", "History Elects-27u", "1st Calculus", "2nd Calc or Stats"],
        "department": "SH",
        "name": "A_MAJ in SH",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:SH.MAJ"
    }, {
        "requirements": ["Two Advanced Language", "Intro Lit & Culture", "Learning About Lang Learn", "Senior Seminar", "Core in History", "List A/B not to exceed 45 un"],
        "department": "SPANISH",
        "name": "A_MAJ in SPANISH",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:SPANISH.MAJ"
    }, {
        "requirements": ["Calc. Course 1", "Multivar. Calc.", "Matrix Algebra", "Beginning", "Intermediate", "Advanced Elective", "Modern Regression", "Adv. Data Analysis", "Intro. to Prob. Theory", "Intro. to Stat. Inference", "Statistical Computing", "Special Topics", "Elective"],
        "department": "STA",
        "name": "A_MAJ in STA",
        "type": "A_MAJ",
        "year": ["2014", "2010", "2004", "2001"]
    }, {
        "requirements": [],
        "department": "TW",
        "name": "A_MAJ in TW",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:TW.MAJ"
    }, {
        "requirements": [],
        "department": "ANTHIS",
        "name": "BA in ANTHIS",
        "type": "BA",
        "year": ["2006", "2004", "2002", "1998"]
    }, {
        "requirements": [],
        "department": "CHINES",
        "name": "BA in CHINES",
        "type": "BA",
        "year": ["2006", "2004"]
    }, {
        "requirements": [],
        "department": "CW",
        "name": "BA in CW",
        "type": "BA",
        "year": ["2008", "2004", "1998"]
    }, {
        "requirements": ["Differential/Integral Calc.", "Multivar. Analysis & Approx.", "Writing Requirement", "Economics Colloquium Req.", "Principles of Economics", "Interm. Microeconomics", "Interm. Macroeconomics", "Evol. of Ec. Ideas & Analy.", "Statistical Methods", "Fundamentals of Statistical", "Sampling, Survey, and Societ", "1st Econ. Elective", "2nd Econ. Elective", "3rd Econ. Elective", "4th Econ. Elective", "1st Spcl. Elective", "2nd Spcl. Elective", "3rd Spcl. Elective", "Senior Project Requirement", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ECO",
        "name": "BA in ECO",
        "type": "BA",
        "year": ["2014", "2013", "2012", "2011", "2010", "2008", "2006", "2004", "2000"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Economics", "Policy History-9 units", "US History-9 units", "Non-US History-9 units", "Hist Mthds & Approaches", "Ethics-9 units", "Political Phil-9 units", "Fnds of Social Sci-9 units", "Applied Philosophy-9 units", "History or Philosophy", "Electives-27 units)"],
        "department": "EHPP",
        "name": "BA in EHPP",
        "type": "BA",
        "year": ["2014", "2009", "2006", "2004", "1998"]
    }, {
        "requirements": [],
        "department": "ENG",
        "name": "BA in ENG",
        "type": "BA",
        "year": ["2008", "2004", "2000", "1998"]
    }, {
        "requirements": [],
        "department": "EURSTU",
        "name": "BA in EURSTU",
        "type": "BA",
        "year": ["2004", "1998"]
    }, {
        "requirements": [],
        "department": "FRENCH",
        "name": "BA in FRENCH",
        "type": "BA",
        "year": ["2004", "1998"]
    }, {
        "requirements": [],
        "department": "GERMAN",
        "name": "BA in GERMAN",
        "type": "BA",
        "year": ["2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Intro to Global Studies", "Advanced Seminar", "Complete 18 units", "Complete 27 units", "Complete 27 units", "Global Histories", "Advanced level proficiency"],
        "department": "GS",
        "name": "BA in GS",
        "type": "BA",
        "year": ["2014", "2012", "2009"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "United States Survey Course", "Non-U.S. Survey Course", "Required Methodology Course", "History Electives", "Historical Research Seminar"],
        "department": "HIS",
        "name": "BA in HIS",
        "type": "BA",
        "year": ["2013", "2009"]
    }, {
        "requirements": [],
        "department": "HISPOL",
        "name": "BA in HISPOL",
        "type": "BA",
        "year": ["2006", "2004", "2002", "1998"]
    }, {
        "requirements": [],
        "department": "JAPAN",
        "name": "BA in JAPAN",
        "type": "BA",
        "year": ["2004", "1998"]
    }, {
        "requirements": [],
        "department": "LNGHSS",
        "name": "BA in LNGHSS",
        "type": "BA",
        "year": ["2010", "2007"]
    }, {
        "requirements": [],
        "department": "LOGCPTA",
        "name": "BA in LOGCPTA",
        "year": ["2008"],
        "type": "BA",
        "MajorFile": "2008:HSS:BA:LOGCPTA.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Learn about Lang L", "Tutoring for Comm O", "Intro Sec Lang Acq", "ESL Practicum", "Senior Seminar", "Intro to Dis Analysis", "Grammar Std Written Eng", "Choose 9 units", "27 units minimum"],
        "department": "MLESL",
        "name": "BA in MLESL",
        "year": ["2004"],
        "type": "BA",
        "MajorFile": "2004:HSS:BA:MLESL.MAJ"
    }, {
        "requirements": [],
        "department": "PHI",
        "name": "BA in PHI",
        "type": "BA",
        "year": ["2010", "2008", "2006", "2004", "1998"]
    }, {
        "requirements": ["2 semesters Calculus", "Statistical Reasoning", "Stats Prereq", "Intro Psy & 3 Survey", "2 Research Methods", "2 Advanced Courses", "Computing Required", "18 units Science", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "PSY",
        "name": "BA in PSY",
        "type": "BA",
        "year": ["2015", "2014", "2004", "1998"]
    }, {
        "requirements": [],
        "department": "PW",
        "name": "BA in PW",
        "type": "BA",
        "year": ["2008", "2004", "1998"]
    }, {
        "requirements": [],
        "department": "RUSSTU",
        "name": "BA in RUSSTU",
        "type": "BA",
        "year": ["2004", "1998"]
    }, {
        "requirements": [],
        "department": "SCH",
        "name": "BA in SCH",
        "type": "BA",
        "year": ["2006", "2004", "2002"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "SDM",
        "name": "BA in SDM",
        "type": "BA",
        "year": ["2013", "2009", "2006", "2000"]
    }, {
        "requirements": ["CCR1", "CCR2", "CCR3", "DCR1", "DCR2", "DCR3", "DCR4", "DCR5", "DCR6", "8th DCR", "Computing Skills Wrkshp", "Freshman Seminar-beganF97", "History Workshop", "Intro Social History", "New Tpcs Soc History", "Social Hist Res Sem", "Hist Civilization-9u", "History Elects-27u"],
        "department": "SH",
        "name": "BA in SH",
        "year": ["1998"],
        "type": "BA",
        "MajorFile": "1998:HSS:BA:SH.MAJ"
    }, {
        "requirements": [],
        "department": "SPANISH",
        "name": "BA in SPANISH",
        "type": "BA",
        "year": ["2004", "1998"]
    }, {
        "requirements": [],
        "department": "TW",
        "name": "BA in TW",
        "year": ["2008"],
        "type": "BA",
        "MajorFile": "2008:HSS:BA:TW.MAJ"
    }, {
        "requirements": [],
        "department": "TWCM",
        "name": "BA in TWCM",
        "type": "BA",
        "year": ["2008", "2004"]
    }, {
        "requirements": [],
        "department": "ANTHIS",
        "name": "BS in ANTHIS",
        "type": "BS",
        "year": ["2006", "2004", "2002", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Diff & Integral Calculus", "Int, Diff Equat & Approx", "Modern Biology", "Genetics", "Intro to Mod Chemistry I", "Modern Chemistry II", "Physics I for Sci Students", "Org Chem I or Physics II", "Lab I", "Fund Prog & Comp Sci", "Bio Fnd Beh or Mol to Mind", "Cog Psych or Human Info Pro", "Cellular Neuroscience", "Systems Neuroscience", "Neural Comp or Par Dist Prof", "Introduction to Psychology", "Exp Des Beh & Soc Science", "Research Methods Cog Neuro", "Research Methods Cog", "27 units Cog Neuroscience"],
        "department": "COGNEURO",
        "name": "BS in COGNEURO",
        "year": ["2014"],
        "type": "BS",
        "MajorFile": "2014:DC:BS:COGNEURO.MAJ"
    }, {
        "requirements": ["Calculus", "Concepts of Math", "Stats Prereq", "Computing Requirement", "Cognitive Psychology", "Res Mtds Cog Psych", "Neuroscience", "One of the Following", "Two of the Following", "18 units Science", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "COGSCI",
        "name": "BS in COGSCI",
        "type": "BS",
        "year": ["2015", "2014", "2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Reason, Passion & Cognition", "Cognitive Psychology", "Policy Analysis I", "Behavioral Decision Making", "Dec Ana & Dec Supp Sys", "Statistical Methods", "Empir Resrch Methods", "3 elec from 88-xxx", "2 elec from list", "1st Calculus", "Analytic Methods"],
        "department": "DECSCI",
        "name": "BS in DECSCI",
        "type": "BS",
        "year": ["2013", "2012", "2011", "2010", "2008", "2004", "2002", "2001"]
    }, {
        "requirements": ["Differential/Integral Calc.", "Multivar. Analysis & Approx.", "Third Mathem. Course", "Intro to Probability Theory", "Econometrics I", "Econometrics II", "Writing Requirement", "Economics Colloquium", "Principles of Economics", "Interm. Microeconomics", "Interm. Macroeconomics", "1st Econ. Elective", "2nd Econ. Elective", "3rd Econ. Elective", "4th Econ. Elective", "5th Econ. Elective", "6th Econ. Elective", "Senior Project Requirement", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ECO",
        "name": "BS in ECO",
        "type": "BS",
        "year": ["2014", "2013", "2012", "2011", "2010", "2008", "2006", "2004", "2002", "2000"]
    }, {
        "requirements": ["Principles of Economics", "Interm. Microeconomics", "Interm. Macroeconomics", "Intro to Probability Theory", "Intro to Statistical Inferen", "Econometrics", "Modern Regression", "Differential/Integral Calc.", "Integ, Dif. Eqs, & Approx.", "Concepts of Mathematics", "Discrete Mathematics", "Matrix Algebra", "Calculus in Three Dimensions", "Differential Equations", "Principles of Real Analysis", "Principles of Real Analysis", "Principles of Computing", "Writing Requirement", "1st Econ. Elective", "2nd Econ. Elective", "3rd Econ. Elective", "4th Econ. Elective", "1st Math Elective", "2nd Math Elective", "3rd Math Elective", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ECOMTH",
        "name": "BS in ECOMTH",
        "type": "BS",
        "year": ["2014", "2012", "2011", "2010", "2008"]
    }, {
        "requirements": ["Differential/Integral Calc.", "Integ, Concepts, or Optim.", "Multivar. Analysis & Approx.", "Matrix Algebra", "Writing for Economists", "Principles of Economics", "Int. Microeconomics", "Int. Macroeconomics", "Econometrics", "1st Econ. Elective", "2nd Econ. Elective", "3rd Econ. Elective", "Data Analysis", "Modern Regression", "Adv. Data Analysis", "Intro to Prob. Theory", "Intro to Stats. Inference", "Statistical Computing", "1st Stat. Elective", "2nd Stat. Elective", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ECOSTA",
        "name": "BS in ECOSTA",
        "type": "BS",
        "year": ["2015", "2014", "2013", "2012", "2011", "2010", "2004"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "BS requirements-18 units", "Economics", "Policy History-9 units", "US History-9 units", "Non-US History-9 units", "Hist Mthds & Approaches", "Ethics-9 units", "Political Phil-9 units", "Fnds of Social Sci-9 units", "Applied Philosophy-9 units", "History or Philosophy", "Electives-27 units)"],
        "department": "EHPP",
        "name": "BS in EHPP",
        "type": "BS",
        "year": ["2014", "2009", "2006", "2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Statistical Methods", "Empir Resrch Methods", "Policy Analysis I", "Policy Analysis II", "Dec Proc Am Pol Inst", "Theories of Intl Rel", "Comparative Politics", "Intl Pol Economy", "Intl Politics", "Intl Cultures", "18 units to equal 45", "88-xxx GP electives", "Stat Reas & Prac", "1 semester calculus"],
        "department": "GP",
        "name": "BS in GP",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:HSS:BS:GP.MAJ"
    }, {
        "requirements": [],
        "department": "HIS",
        "name": "BS in HIS",
        "year": ["2009"],
        "type": "BS",
        "MajorFile": "2009:HSS:BS:HIS.MAJ"
    }, {
        "requirements": [],
        "department": "HISPOL",
        "name": "BS in HISPOL",
        "type": "BS",
        "year": ["2006", "2004", "2002", "1998"]
    }, {
        "requirements": ["CCR1", "CCR2", "CCR3", "DCR1", "DCR2", "DCR3", "DCR4", "DCR5", "DCR6", "8th DCR", "Computing Skills Wrkshp", "Freshman Seminar-beganF97", "Fn Sys Dev I & AD&D;", "Fn Sys Dev II or FIS", "Information Sys Appl", "Dec Anal & Supp Syst", "Empir Resrc Mtds I", "Empir Resrc Mtds II", "Policy Analysis I", "Organizations", "Mgmt DM & Tech-18u", "Year of Calculus", "Statistics"],
        "department": "IDS",
        "name": "BS in IDS",
        "year": ["1998"],
        "type": "BS",
        "MajorFile": "1998:HSS:BS:IDS.MAJ"
    }, {
        "requirements": ["Calculus sequence (2)", "Statistical Reasoning", "Computer Science", "The Info. Systems Milieux", "DB Design & Development", "Appl. Design & Development", "Software Development Proj.", "Innovation in Info. Systems", "Prof Core Elective", "Professional Communications", "Quant. Analys. & Resrch. Mtd", "Organizations, Policy, & S.S", "Content Area (27 units)", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "INFOSYS",
        "name": "BS in INFOSYS",
        "type": "BS",
        "year": ["2015", "2010", "2006", "2004", "2002", "2000"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Dec Proc Am Pol Inst", "Pol Sci Research Methods", "Comparative Politics", "Theories of Intl Rel", "IRP Capstone Policy Forum", "Statistical Methods", "Economics", "Grand Strategy Pol Inst", "Econ & Society or Intl Cult", "84-xxx IPS electives", "Intermediate II level", "Stat Reas & Prac", "1 semester calculus", "Analytic Methods"],
        "department": "INTRELP",
        "name": "BS in INTRELP",
        "type": "BS",
        "year": ["2015", "2013", "2010", "2009"]
    }, {
        "requirements": ["Calculus sequence (2)", "Statistics", "Data Structures", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "Organizations", "Dec Sci & Rational Choice", "Research Methods", "Professional Communication", "27 units Content Area", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ISBEC",
        "name": "BS in ISBEC",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:ISBEC.MAJ"
    }, {
        "requirements": ["Calculus sequence (2)", "Statistics", "Data Structures", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "Organizations", "Dec Sci & Rational Choice", "Research Methods", "Professional Communication", "27 units Content Area", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ISCOG",
        "name": "BS in ISCOG",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:ISCOG.MAJ"
    }, {
        "requirements": [],
        "department": "ISCOM",
        "name": "BS in ISCOM",
        "type": "BS",
        "year": ["2006", "2004", "2002"]
    }, {
        "requirements": [],
        "department": "ISDEC",
        "name": "BS in ISDEC",
        "type": "BS",
        "year": ["2006", "2002"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Advanced Programming", "Fnd System Development", "Apl Design & Development", "Software Development Project", "Info System Applications", "Organizations", "Dec Sci & Computability", "Research Methods", "4 Courses/1 Area"],
        "department": "ISDES",
        "name": "BS in ISDES",
        "year": ["2004"],
        "type": "BS",
        "MajorFile": "2004:HSS:BS:ISDEC.MAJ"
    }, {
        "requirements": ["Calculus sequence (2)", "Statistics", "Data Structures", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "Organizations", "Dec Sci & Rational Choice", "Research Methods", "Professional Communication", "27 units Content Area", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ISGSM",
        "name": "BS in ISGSM",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:ISGSM.MAJ"
    }, {
        "requirements": ["Calculus sequence (2)", "Statistics", "Data Structures", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "Organizations", "Dec Sci & Rational Choice", "Research Methods", "Professional Communication", "27 units Content Area", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ISORG",
        "name": "BS in ISORG",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:ISORG.MAJ"
    }, {
        "requirements": [],
        "department": "ISPOL",
        "name": "BS in ISPOL",
        "type": "BS",
        "year": ["2004", "2002"]
    }, {
        "requirements": [],
        "department": "ISSTA",
        "name": "BS in ISSTA",
        "type": "BS",
        "year": ["2006", "2004", "2002"]
    }, {
        "requirements": ["Calculus sequence (2)", "Statistics", "Data Structures", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "Organizations", "Dec Sci & Rational Choice", "Research Methods", "Professional Communication", "27 units Content Area", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ISTEC",
        "name": "BS in ISTEC",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:ISTEC.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Advanced Programming", "Concepts of Mathematics", "Statistical Reasoning", "Nature of Reason", "Arguments & Math Inquiry", "Logic & Computation", "Comp & Incompleteness", "Prin Impreative Comp", "Prin Func Programming", "Thesis Seminar", "Logic & Comp Elct-36 units", "Concepts of Math", "Statistics", "Int / Adv Programming"],
        "department": "LOGCPTA",
        "name": "BS in LOGCPTA",
        "type": "BS",
        "year": ["2014", "2004", "2002"]
    }, {
        "requirements": ["CCR1", "CCR2", "CCR3", "DCR1", "DCR2", "DCR3", "DCR4", "DCR5", "DCR6", "8th DCR", "Computing Skills Wrkshp", "Freshman Seminar-beganF97", "Interm Microecon", "Interm Macroecon", "Econometrics I", "Econometrics II", "1st Additional Econ", "2nd Additional Econ", "3rd Additional Econ", "4th Additional Econ", "3 IM Courses", "Calculus 1", "2nd Calculus", "Statistics", "Principles of Economics"],
        "department": "MGLECO",
        "name": "BS in MGLECO",
        "year": ["2000"],
        "type": "BS",
        "MajorFile": "2000:HSS:BS:MGLECO.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Differntial and Integral Cal", "Integration, Differential Eq", "Modern Biology", "Genetics", "Intro to Modern Chemistry I", "Modern Chemistry II", "Physics I for Science Studen", "Organic Chemistry I or Physi", "Lab I", "Fund. of Computing or Princi", "Statistcal Reasoning, Probab", "Bio Found or Mole to Mind", "Cog Psych or Human Info and", "Cell Neuro", "Systems Neuro", "Neural Computation or PDP"],
        "department": "NEUROSCI",
        "name": "BS in NEUROSCI",
        "year": ["2014"],
        "type": "BS",
        "MajorFile": "2014:DC:BS:NEUROSCI.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Policy Analysis I", "Policy Analysis II", "Dec Ana & Dec Supp Syst", "Policy Analysis Sr Proj", "Organizations", "Statistical Methods", "Empir Resrch Methods", "3 elec of 88-xxx", "2 elec from list", "1st Calculus", "2nd Calculus"],
        "department": "POLMGMT",
        "name": "BS in POLMGMT",
        "type": "BS",
        "year": ["2013", "2012", "2011", "2010", "2008", "2004", "2002", "1998"]
    }, {
        "requirements": [],
        "department": "POLSCI",
        "name": "BS in POLSCI",
        "type": "BS",
        "year": ["2004", "2002", "1998"]
    }, {
        "requirements": ["2 semesters Calculus", "Statistical Reasoning", "Stats Prereq", "Intro Psy & 3 Survey", "2 Research Methods", "2 Advanced Courses", "Computing Required", "18 units same Science", "18 units more Science", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "PSY",
        "name": "BS in PSY",
        "type": "BS",
        "year": ["2015", "2014", "2004", "1998"]
    }, {
        "requirements": ["2 semesters Calculus", "Statistical Reasoning", "Stats Prereq", "Programming", "Intro Mod Chem", "Modern Chem II", "Phys for Sci St I", "Org Chemistry I", "Org Chemistry II", "Modern Biology", "Biochemistry", "Cell Biology", "Genetics", "4 Survey Courses", "1 Research Methods", "Additional Laboratory", "Chemistry Lab I", "Chemistry Lab II", "Exp Genetics & Mol Bio", "2 Psych Adv Elect", "1 Bio General Elect", "2 Bio Adv Elect", "1 Adv BioSci/Psy Elect", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "PSYBSC",
        "name": "BS in PSYBSC",
        "type": "BS",
        "year": ["2015", "2004", "2000"]
    }, {
        "requirements": [],
        "department": "SCH",
        "name": "BS in SCH",
        "type": "BS",
        "year": ["2006", "2004", "2002"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "SDM",
        "name": "BS in SDM",
        "type": "BS",
        "year": ["2015", "2009", "2006", "2000"]
    }, {
        "requirements": ["CCR1", "CCR2", "CCR3", "DCR1", "DCR2", "DCR3", "DCR4", "DCR5", "DCR6", "8th DCR", "Computing Skills Wrkshp", "Freshman Seminar-beganF97", "Empir Resrc Mtds I", "Empir Resrc Mtds II", "Policy Analysis I", "Dec Ana & Dec S S", "Organizations", "Theories & Applic-45u", "Year of Calculus", "Statistics"],
        "department": "SDS",
        "name": "BS in SDS",
        "year": ["1998"],
        "type": "BS",
        "MajorFile": "1998:HSS:BS:SDS.MAJ"
    }, {
        "requirements": ["CCR1", "CCR2", "CCR3", "DCR1", "DCR2", "DCR3", "DCR4", "DCR5", "DCR6", "8th DCR", "Computing Skills Wrkshp", "Freshman Seminar-beganF97", "History Workshop", "Intro Social History", "New Tpcs Soc History", "Social Hist Res Sem", "Hist Civilization-9u", "History Elects-27u", "1st Calculus", "2nd Calc or Stats"],
        "department": "SH",
        "name": "BS in SH",
        "year": ["1998"],
        "type": "BS",
        "MajorFile": "1998:HSS:BS:SH.MAJ"
    }, {
        "requirements": ["Calc. Course 1", "Multivar. Calc.", "Matrix Algebra", "Data Analysis", "Advanced Elective", "Modern Regression", "Adv. Data Analysis", "Intro. to Prob. Theory", "Intro. to Stat. Inference", "Statistical Computing", "Special Topics", "Elective", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "STA",
        "name": "BS in STA",
        "type": "BS",
        "year": ["2015", "2014", "2010", "2004", "2001"]
    }, {
        "requirements": [],
        "department": "STAIS",
        "name": "BS in STAIS",
        "year": ["1998"],
        "type": "BS",
        "MajorFile": "1998:HSS:BS:STAIS.MAJ"
    }, {
        "requirements": ["Calc. Course 1", "Intergration/Diff Eq", "Multivar. Calc.", "Concepts of Math", "Matrix Algebra", "Data Analysis", "Modern Regression", "Adv. Data Analysis", "Intro. to Prob. Theory", "Intro. to Stat. Inference", "Statistical Computing", "Fundamentals of Programming", "Principles of Imperative Com", "Machine Learning", "Algorithms and Adv. Data Str", "Elective", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "STAMACH",
        "name": "BS in STAMACH",
        "type": "BS",
        "year": ["2015", "2014"]
    }, {
        "requirements": ["Calc. Course 1", "Multivar. Calc.", "Matrix Algebra", "Data Analysis", "Advanced Elective", "Modern Regression", "Adv. Data Analysis", "Intro. to Prob. Theory", "Intro. to Stat. Inference", "Statistical Computing", "Special Topics", "Elective", "Concepts of Math", "Principles of Real Analysis", "Intro to Probability Modelin", "First Elective", "Second Elective", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "STAMSC",
        "name": "BS in STAMSC",
        "year": ["2015"],
        "type": "BS",
        "MajorFile": "2015:DC:BS:STAMSC.MAJ"
    }, {
        "requirements": ["Calc. Course 1", "Multivar. Calc.", "Matrix Algebra", "Data Analysis", "Advanced Elective", "Modern Regression", "Adv. Data Analysis", "Intro. to Prob. Theory", "Intro. to Stat. Inference", "Statistical Computing", "Special Topics", "Elective", "Time Series Analysis", "Statistical Models of the Br", "Cognitive Psychology", "Biological Foundations of Be", "Elective 1", "Elective 2", "Elective 3", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "STASN",
        "name": "BS in STASN",
        "year": ["2015"],
        "type": "BS",
        "MajorFile": "2015:DC:BS:STASN.MAJ"
    }, {
        "requirements": [],
        "department": "TW",
        "name": "BS in TW",
        "type": "BS",
        "year": ["2008", "1998"]
    }, {
        "requirements": [],
        "department": "TWCM",
        "name": "BS in TWCM",
        "type": "BS",
        "year": ["2008", "2004", "2000"]
    }, {
        "requirements": ["Intro & Methods Courses", "Anthopological Perspectives", "Global Histories"],
        "department": "ANTHRO",
        "name": "MINOR in ANTHRO",
        "year": ["2013"],
        "type": "MINOR",
        "MajorFile": "2013:DC:MINOR:ANTHRO.MAJ"
    }, {
        "requirements": ["Survey of Forms", "Two Fiction or Poetry Worksh", "One Reading in Forms Course", "Elective"],
        "department": "CW",
        "name": "MINOR in CW",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:CW.MAJ"
    }, {
        "requirements": [],
        "department": "DECSCI",
        "name": "MINOR in DECSCI",
        "type": "MINOR",
        "year": ["2008", "2002", "2001"]
    }, {
        "requirements": ["Differential/Integral Calc.", "Multivariate Analysis", "Principles of Economics", "Interm. Microeconomics", "Interm. Macroeconomics", "Probability Pre-Req", "Regression Pre-Req", "Fund. of Stat. Modeling", "Engr. Stats and Quality Cont", "Fund. of Stat. Modeling", "1st Econ. Elective", "2nd Econ. Elective", "3rd Econ. Elective"],
        "department": "ECO",
        "name": "MINOR in ECO",
        "type": "MINOR",
        "year": ["2014", "2013", "2012", "2011", "2010", "2008", "2006"]
    }, {
        "requirements": ["Complete 27 units", "Complete 18 units"],
        "department": "ETHICS",
        "name": "MINOR in ETHICS",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:ETHICS.MAJ"
    }, {
        "requirements": [],
        "department": "FRANCO",
        "name": "MINOR in FRANCO",
        "year": ["2004"],
        "type": "MINOR",
        "MajorFile": "2004:HSS_MINOR:FRANCO.MAJ"
    }, {
        "requirements": ["Dec Proc Am Pol Inst", "Theories of Intl Rel", "Comparative Politics", "Intl Pol Economy", "Intl Politics", "Intl Cultures"],
        "department": "GP",
        "name": "MINOR in GP",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:GP.MAJ"
    }, {
        "requirements": [],
        "department": "GSM",
        "name": "MINOR in GSM",
        "type": "MINOR",
        "year": ["2010", "2008"]
    }, {
        "requirements": [],
        "department": "HIS",
        "name": "MINOR in HIS",
        "type": "MINOR",
        "year": ["2002", "2001"]
    }, {
        "requirements": ["Intro. to Entrprnrshp", "Org. Lrng & Knwldge Mgt", "Comm. and Innov.", "Fdmtls of Stats. Modling", "Technology Strategy", "Firms, Mkt. Struct, & Strat", "Elect. 1", "Elect. 2"],
        "department": "IEE",
        "name": "MINOR in IEE",
        "type": "MINOR",
        "year": ["2014", "2013", "2012"]
    }, {
        "requirements": ["Core courses", "Electives"],
        "department": "INENED",
        "name": "MINOR in INENED",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:INENED.MAJ"
    }, {
        "requirements": ["Am Foreign Policy", "Theories of Int Rel", "Comp Politics or For Policy", "Min. 200 level Mod Lang", "27 units One Region"],
        "department": "INTREL",
        "name": "MINOR in INTREL",
        "year": ["2006"],
        "type": "MINOR",
        "MajorFile": "2006:HSS:MINOR:INTREL.MAJ"
    }, {
        "requirements": ["Dec Proc Am Pol Inst", "Comparative Politics", "Theories of Intl Rel", "IPS Electives", "Elective", "Economics Pre-Requisite"],
        "department": "INTRELP",
        "name": "MINOR in INTRELP",
        "type": "MINOR",
        "year": ["2015", "2009"]
    }, {
        "requirements": ["27 units Core Crses", "18 units min 300 level", "9 units"],
        "department": "LNGHSS",
        "name": "MINOR in LNGHSS",
        "year": ["2006"],
        "type": "MINOR",
        "MajorFile": "2006:HSS:MINOR:LNGHSS.MAJ"
    }, {
        "requirements": ["Logic", "Minds, Mach, Knowledge", "Computation", "Philosophy - complete 18 uni", "Logic & Comp Tools - complet"],
        "department": "LOGCPTA",
        "name": "MINOR in LOGCPTA",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:LOGCPTA.MAJ"
    }, {
        "requirements": ["Modern Biology", "Systems Neuroscience", "Biological Foundations", "Distribution Requirements"],
        "department": "NEURO",
        "name": "MINOR in NEURO",
        "year": ["2014"],
        "type": "MINOR",
        "MajorFile": "2014:DC:MINOR:NEURO.MAJ"
    }, {
        "requirements": ["Phil of Logic/Math/Science -", "Area 5 - 18 units", "Area 6 - 18 units"],
        "department": "PHI",
        "name": "MINOR in PHI",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:PHI.MAJ"
    }, {
        "requirements": [],
        "department": "POLMGMT",
        "name": "MINOR in POLMGMT",
        "type": "MINOR",
        "year": ["2011", "2010", "2008", "2002"]
    }, {
        "requirements": ["Internship Seminar", "Policy Forum", "Core Seminar", "Elective Seminar", "CMU-Pittsburgh Course", "Economics Pre-Requisite"],
        "department": "POLPUB",
        "name": "MINOR in POLPUB",
        "year": ["2015"],
        "type": "MINOR",
        "MajorFile": "2015:DC:MINOR:POLPUB.MAJ"
    }, {
        "requirements": ["Decision Processes in A P I", "Elec Sys & Proc OR", "Comp Pol OR", "two from 88-xxx", "one additional elective"],
        "department": "POLSCI",
        "name": "MINOR in POLSCI",
        "year": ["2002"],
        "type": "MINOR",
        "MajorFile": "2002:HSS:MINOR:POLSCI.MAJ"
    }, {
        "requirements": ["3 Survey Courses", "Statistics", "2 Research Methods", "2 Advanced Courses"],
        "department": "PSY",
        "name": "MINOR in PSY",
        "type": "MINOR",
        "year": ["2015", "2014", "2001"]
    }, {
        "requirements": ["Interpretation & Argument", "Writing for the Professions", "Two 300 or 400 level Writing", "One Rhetoric/Language Studie", "Elective"],
        "department": "PW",
        "name": "MINOR in PW",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:PW.MAJ"
    }, {
        "requirements": [],
        "department": "SDM",
        "name": "MINOR in SDM",
        "type": "MINOR",
        "year": ["2012", "2011", "2007", "2006", "2000"]
    }, {
        "requirements": ["Calc. Course 1", "Multivar. Calc.", "Matrix Algebra", "Beginning", "Intermediate", "Modern Regression", "Adv. Data Analysis", "Intro. to Prob. Theory", "Intro. to Stat. Inference"],
        "department": "STA",
        "name": "MINOR in STA",
        "type": "MINOR",
        "year": ["2014", "2010", "2004", "2001"]
    }, {
        "requirements": ["Interpretation & Argument", "Introduction to Professional", "Two 300 or 400 level Writing", "One Rhetoric/Language Studie", "Elective"],
        "department": "TW",
        "name": "MINOR in TW",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:TW.MAJ"
    }],
    "SCS": [{
        "requirements": ["Imperative Programming", "Functional Programming", "Par & Seq Data Structures", "Intro to Computer Systems", "Technical Communication", "Great Theoretical Ideas", "Algorithm Design & Analysis", "Algorithms & Complexity Elec", "Applications Elective", "Logics & Languages Elective", "Software Systems Elective", "2 SCS Electives", "Two Semesters of Calculus", "Concepts of Math", "Linear Algebra", "Probability Course"],
        "department": "CS",
        "name": "A_MAJ in CS",
        "type": "A_MAJ",
        "year": ["2011", "2009", "2008", "2006", "2002", "2000", "1998"]
    }, {
        "requirements": ["Cognitive Psychology", "Design Fundamentals", "Statistics", "Introduction to Programming", "Interaction Design Studio", "User-Centered Research and E", "Interface Programming", "Project Course"],
        "department": "HCI",
        "name": "A_MAJ in HCI",
        "type": "A_MAJ",
        "year": ["2013", "2012"]
    }, {
        "requirements": ["Overview - Introductory", "Controls", "Kinematics", "Machine Perception", "Cognition and Reasoning", "Hands on Course", "Systems Engineering", "Robotics Capstone", "Elective", "Elective"],
        "department": "ROB",
        "name": "A_MAJ in ROB",
        "year": ["2014"],
        "type": "A_MAJ",
        "MajorFile": "2014:SCS:A_MAJ:ROB.MAJ"
    }, {
        "requirements": ["Immigration Course", "Imperative Programming", "Functional Programming", "Par & Seq Data Structures", "Intro to Computer Systems", "Great Theoretical Ideas", "Algorithm Design & Analysis", "Algorithms & Complexity Elec", "Applications Elective", "Logics & Languages Elective", "Software Systems Elective", "2 SCS Electives", "Two Semesters of Calculus", "Concepts of Math", "Linear Algebra", "Probability Course", "Writing", "Technical Communication", "Category 1 Breadth", "Category 2 Breadth", "Category 3 Breadth", "Humanities/Arts Electives", "Computing@Carnegie Mellon", "Two Sci/Eng, Same Dept", "Sci/Eng, Any Dept", "Sci/Eng, Any Dept", "Approved for Lab"],
        "department": "CS",
        "name": "BS in CS",
        "type": "BS",
        "year": ["2010", "2009", "2008", "2006", "2005", "2002", "2001", "2000", "1998", "1996"]
    }, {
        "requirements": ["HCI Pro Seminar", "User-Centered Research and E", "Interaction Design Studio", "User Interfaces", "User Interface Lab", "HCI Project I", "HCI Project II"],
        "department": "MHCI",
        "name": "MHCI in MHCI",
        "year": ["2013"],
        "type": "MHCI",
        "MajorFile": "2013:SCS:MHCI:HCI.MAJ"
    }, {
        "requirements": ["Prerequisites", "Required Course 15-122", "Required Course 15-150", "Required Course 15-210", "one of 15-213/15-251", "2 CS Electives"],
        "department": "CS",
        "name": "MINOR in CS",
        "type": "MINOR",
        "year": ["2011", "2006", "2002", "2000", "1998"]
    }, {
        "requirements": ["Required Portal Course", "Three Collaborative or Suppo", "Fourth Collaborative or Supp"],
        "department": "IE",
        "name": "MINOR in IE",
        "year": ["2014"],
        "type": "MINOR",
        "MajorFile": "2014:SCS:MINOR:IE.MAJ"
    }, {
        "requirements": ["Programming Prerequisite", "Calculus Prerequisites", "Prob/Stats Prerequisites", "ML Core Course", "Statistics Core Course", "3 Technical Electives"],
        "department": "ML",
        "name": "MINOR in ML",
        "year": ["2011"],
        "type": "MINOR",
        "MajorFile": "2011:SCS:MINOR:ML.MAJ"
    }, {
        "requirements": ["Required Portal Course", "Three Collaborative or Suppo", "Fourth Collaborative or Supp"],
        "department": "PC",
        "name": "MINOR in PC",
        "year": ["2014"],
        "type": "MINOR",
        "MajorFile": "2014:SCS:MINOR:PC.MAJ"
    }, {
        "requirements": ["Required Overview Course", "Controls Requirement", "Manipulation Requirement", "1 Technical Electives", "2 Technical Electives"],
        "department": "ROB",
        "name": "MINOR in ROB",
        "type": "MINOR",
        "year": ["2014", "2011"]
    }, {
        "requirements": ["Prerequisites", "Internship Reflection", "Core Courses", "Technical S/E Elective", "Software Project Elective", "Societal Context Elective"],
        "department": "SE",
        "name": "MINOR in SE",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:SCS:MINOR:SE.MAJ"
    }, {
        "requirements": [],
        "department": "ROBSYSDV",
        "name": "MS in ROBSYSDV",
        "type": "MS",
        "year": ["2014", "2012"]
    }],
    "CMU": [{
        "requirements": ["Survey Course", "Hist Evidence & Int", "Theory & Pract In Anthr", "Thematic Cluster - 18 units", "Regional Cluster - 27 units", "Adv Studies in Anthr & His"],
        "department": "ANTHIS",
        "name": "A_MAJ in ANTHIS",
        "year": ["2006"],
        "type": "A_MAJ",
        "MajorFile": "2006:HSS:A_MAJ:ANTHIS.MAJ"
    }, {
        "requirements": ["1st Year of Calculus", "2nd Year of Calculus", "Physics 1", "Physics 2", "Computer Science", "Modern Biology", "Biochemistry", "Cell Biology", "Genetics", "Colloquium", "Bio Electives - 54 Units", "Modern Biology Lab", "Exper Genetics/Molec Biology", "Exper Biochem/Cell Dev", "Topics in Research", "Modern Chem I", "Modern Chem II", "Organic Chem", "Exper Tech Chem", "Physical Chemistry", "Check", "Genetics Option", "Biochemistry Option", "Biophysics Option", "Cell Biology Option", "Developmental Biology Option", "Molecular Biology Option", "Computational Biology Option"],
        "department": "BSC",
        "name": "A_MAJ in BSC",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:MCS:A_MAJ:BSC.MAJ"
    }, {
        "requirements": ["Modern Biology", "Biochemistry", "Cell Biology", "Genetics", "Exper Genetics/Molec Biology", "Exper Biochem/Cell Dev", "Topics in Research", "Colloquium", "Computational Biology", "Adv Bio Elective - 9 Units", "Modern Chem II", "Organic Chem", "Exper Tech Chem", "Physical Chemistry", "Compbio Elective Reqs", "Differential Equations", "Computing Electives"],
        "department": "BSCCB",
        "name": "A_MAJ in BSCCB",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:MCS:A_MAJ:BSCCB.MAJ"
    }, {
        "requirements": ["Intro to Modern Chem", "Modern Chemistry II", "Issues in Chem", "Organic Chem I", "Organic Chem II", "Math. Methods", "Modern Analytical Inst.", "Physical Chemistry I", "Physical Chemistry II", "Inorganic Chemistry", "Lab I", "Lab II", "Lab III", "Lab IV", "Chem Seminars - 8 Units", "Chem Electives - 18 Units"],
        "department": "CMY",
        "name": "A_MAJ in CMY",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:MCS:A_MAJ:CMY.MAJ"
    }, {
        "requirements": ["Computing Prereq", "Concepts of Math", "Statistics", "Fundamental Structures I", "Fundamental Structures II", "AI or PSMT or IPDP", "Cog Psych or IPAI", "Res Mtds Cog Psych", "Experimental Design", "Plus One Cog Psych", "4 Courses - Track", "2 Additional Sci"],
        "department": "COGSCI",
        "name": "A_MAJ in COGSCI",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:COGSCI.MAJ"
    }, {
        "requirements": ["Calculus", "Intro CS Course", "Adv Prog Practicum", "Calc in 3D", "Matrix Algebra", "Intro Math Finance", "OR 1", "Differential Equations", "Numerical Methods", "Disrete Time Finance", "Continuous Time Finance", "Science Requirement", "Principles of Economics", "Microeconomics", "Macroeconomics", "Intro Prob & Stats", "Intro Prob & Stats II", "Intro Prob Models", "Depth Electives", "Intro Accounting", "Prof Writing", "Prof Speaking", "Fin. Engineering", "Org Design & Imp"],
        "department": "COMPFIN",
        "name": "A_MAJ in COMPFIN",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:MCS:A_MAJ:COMPFIN.MAJ"
    }, {
        "requirements": ["2nd 9 units-Survey of Forms", "4 CW Workshops", "1 Reading in Forms"],
        "department": "CW",
        "name": "A_MAJ in CW",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:CW.MAJ"
    }, {
        "requirements": ["1 semester Calculus", "Statistics", "Reason, Passion & Cognition", "Cognitive Psychology", "Policy Analysis I", "Dec Ana & Dec S S", "Behavioral Decision Making", "Statistical Methods", "Empir Resrch Methods", "27 units from 88-xxx", "18 units to equal 45"],
        "department": "DECSCI",
        "name": "A_MAJ in DECSCI",
        "year": ["2011"],
        "type": "A_MAJ",
        "MajorFile": "2011:HSS:A_MAJ:DECSCI.MAJ"
    }, {
        "requirements": [],
        "department": "ECO",
        "name": "A_MAJ in ECO",
        "type": "A_MAJ",
        "year": ["2014", "2013", "2011"]
    }, {
        "requirements": [],
        "department": "ECOSTA",
        "name": "A_MAJ in ECOSTA",
        "type": "A_MAJ",
        "year": ["2014", "2013", "2012", "2011"]
    }, {
        "requirements": [],
        "department": "EHPP",
        "name": "A_MAJ in EHPP",
        "type": "A_MAJ",
        "year": ["2014", "2006"]
    }, {
        "requirements": ["Interpretive Practices", "Research in Eng Studies", "Rhetoric Requirement", "76-3xx English-18u", "76-4xx English Sem-18u"],
        "department": "ENG",
        "name": "A_MAJ in ENG",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:ENG.MAJ"
    }, {
        "requirements": ["French Culture", "Francophone World", "French Social Cntxts", "Core in Modern Languages", "Senior Seminar", "List A complete 45 units", "List B complete 9 units"],
        "department": "FRANCO",
        "name": "A_MAJ in FRANCO",
        "year": ["2004"],
        "type": "A_MAJ",
        "MajorFile": "2004:HSS:A_MAJ:FRANCO.MAJ"
    }, {
        "requirements": ["French Culture", "Francophone Cultures", "Cont Spoken French", "Learning About Lang Learn", "Senior Seminar", "Core in History", "List A/B not to exceed 45 un"],
        "department": "FRENCH",
        "name": "A_MAJ in FRENCH",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:FRENCH.MAJ"
    }, {
        "requirements": ["Adv Gram, Styl & Wr", "Contmp Spoken German", "Intro German Studies", "Learning About Lang Learn", "Senior Seminar", "Core in History", "List A/B not to exceed 45 un"],
        "department": "GERMAN",
        "name": "A_MAJ in GERMAN",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:GERMAN.MAJ"
    }, {
        "requirements": [],
        "department": "GS",
        "name": "A_MAJ in GS",
        "type": "A_MAJ",
        "year": ["2014", "2012"]
    }, {
        "requirements": [],
        "department": "HIS",
        "name": "A_MAJ in HIS",
        "type": "A_MAJ",
        "year": ["2013", "2009"]
    }, {
        "requirements": ["Survey Course-2nd", "Hist Evidence & Int", "Intro Courses-18u", "Issues Public Agenda-36u", "Iss Pub Agenda/Intl-9u", "Hist & Pol Proj Courses", "One Calculus Crse.", "One Statistics Crse."],
        "department": "HISPOL",
        "name": "A_MAJ in HISPOL",
        "year": ["2004"],
        "type": "A_MAJ",
        "MajorFile": "2004:HSS:A_MAJ:HISPOL.MAJ"
    }, {
        "requirements": [],
        "department": "INTRELP",
        "name": "A_MAJ in INTRELP",
        "type": "A_MAJ",
        "year": ["2015", "2013", "2010"]
    }, {
        "requirements": ["Interm Japanese II", "Japanese Lang & Cult", "Adv Japanese I", "Adv Japanese II", "Learning About LL", "Senior Seminar", "History Core Course", "Electives - 36u"],
        "department": "JAPAN",
        "name": "A_MAJ in JAPAN",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:JAPAN.MAJ"
    }, {
        "requirements": ["Introductory Course", "Sounds", "Structure", "Meaning", "Same Language-18 units", "45/27 units one group", "Approved Thesis Proj."],
        "department": "LNGHSS",
        "name": "A_MAJ in LNGHSS",
        "year": ["2007"],
        "type": "A_MAJ",
        "MajorFile": "2007:HSS:A_MAJ:LNGHSS.MAJ"
    }, {
        "requirements": [],
        "department": "LOGCPTA",
        "name": "A_MAJ in LOGCPTA",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:LOGCPTA.MAJ"
    }, {
        "requirements": ["Calculus I", "Calculus II", "Statistics I", "Statistics II", "Principles of Econ.", "Intermediate Micro.", "Econometrics I", "Econometrics II", "Intermediate Macro.", "Additional Econ.", "Additional Econ.", "Additional Econ.", "Additional Econ.", "3 Additional IM"],
        "department": "MGLECO",
        "name": "A_MAJ in MGLECO",
        "year": ["2000"],
        "type": "A_MAJ",
        "MajorFile": "2000:HSS:A_MAJ:MGLECO.MAJ"
    }, {
        "requirements": [],
        "department": "MSCM",
        "name": "A_MAJ in MSCM",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:MCS:A_MAJ:MSCM.MAJ"
    }, {
        "requirements": [],
        "department": "MSCOR",
        "name": "A_MAJ in MSCOR",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:MCS_A_MAJ:MSCOR.MAJ"
    }, {
        "requirements": ["9 units Introduction to Phil", "Area 1 - complete 9 units", "Area 2 - complete 9 units", "Area 3 - complete 9 units", "Area 4 - complete 9 units", "Area 5 - complete 18 units", "Area 6 - complete 27 units"],
        "department": "PHI",
        "name": "A_MAJ in PHI",
        "year": ["2010"],
        "type": "A_MAJ",
        "MajorFile": "2010:HSS:A_MAJ:PHI.MAJ"
    }, {
        "requirements": ["Physics I", "Physics II", "Experimental Physics", "Undergrad Colloquium**", "Physics III Mod. Ess.", "Electronics", "Physical Analysis", "Qhantum Physics", "Physical Mechanics I", "Int. Elect. & Mag I", "Modern Physics Lab", "Thermal Physics", "Physics Electives", "Calculus I", "Calculus II", "Calculus in 3D", "Math Methods for Physicists", "Computer Science"],
        "department": "PHY",
        "name": "A_MAJ in PHY",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:MCS:A_MAJ:PHY.MAJ"
    }, {
        "requirements": ["Calculus", "Statistics", "Decision Processes in A P I", "Elec Sys & Proc OR", "Comp Pol OR", "Policy Analysis I", "Policy Analysis II", "Policy Analysis III", "Statistical Methods", "Empir Resrch Mtds", "two from 88-xxx", "two additional electives"],
        "department": "POLSCI",
        "name": "A_MAJ in POLSCI",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:HSS:A_MAJ:POLSCI.MAJ"
    }, {
        "requirements": [],
        "department": "PSY",
        "name": "A_MAJ in PSY",
        "year": ["2010"],
        "type": "A_MAJ",
        "MajorFile": "2010:HSS:A_MAJ.PSY-BA.MAJ"
    }, {
        "requirements": [],
        "department": "SCH",
        "name": "A_MAJ in SCH",
        "year": ["2004"],
        "type": "A_MAJ",
        "MajorFile": "2004:HSS:A_MAJ:SCH.MAJ"
    }, {
        "requirements": ["History Workshop", "Intro Social History", "New Tpcs Soc History", "Social Hist Res Sem", "Hist Civilization-9u", "History Elects-27u", "1st Calculus", "2nd Calc or Stats"],
        "department": "SH",
        "name": "A_MAJ in SH",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:SH.MAJ"
    }, {
        "requirements": [],
        "department": "STA",
        "name": "A_MAJ in STA",
        "type": "A_MAJ",
        "year": ["2014", "2010"]
    }, {
        "requirements": [],
        "department": "TW",
        "name": "A_MAJ in TW",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:TW.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Survey Course", "Hist Evidence & Int", "Theory & Pract In Anthr", "Thematic Cluster - 18 units", "Regional Cluster - 27 units", "Adv Studies in Anthr & His"],
        "department": "ANTHIS",
        "name": "BA in ANTHIS",
        "year": ["2006"],
        "type": "BA",
        "MajorFile": "2006:HSS:BA:ANTHIS.MAJ"
    }, {
        "requirements": ["Calculus", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Cell Biology", "Biochemistry", "Genetics", "Biology Lab", "Topics in Research", "Colloquium", "Bio Electives - 36 Units", "Modern Chem II", "Organic Chem", "Exper Tech Chem", "Free Electives - 99 Units", "Check"],
        "department": "BSC",
        "name": "BA in BSC",
        "year": ["2011"],
        "type": "BA",
        "MajorFile": "2011:MCS:BA:BSC.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Interm. Chinese II", "Advanced Chinese I", "Advanced Chinese II", "Chinese Lang & Cult", "Complete 9 units", "Senior Seminar", "Complete 9 units", "Complete 36 units"],
        "department": "CHINES",
        "name": "BA in CHINES",
        "year": ["2006"],
        "type": "BA",
        "MajorFile": "2006:HSS:BA:CHINES.MAJ"
    }, {
        "requirements": ["Calculus", "Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives", "Intro to Modern Chem", "Modern Chemistry II", "Issues in Chemistry", "Modern Organic Chem I", "Modern Organic Chem II", "Physical Chemistry", "Inorganic Chemistry", "Lab I", "Lab II", "Lab III", "Chem Seminars - 8 Units", "Chem Electives - 18 Units"],
        "department": "CMY",
        "name": "BA in CMY",
        "year": ["2008"],
        "type": "BA",
        "MajorFile": "2008:MCS:BA:CMY.MAJ"
    }, {
        "requirements": ["Writing Expression", "Cultural Analysis", "CCB or EPS", "HSS Depth", "Math and Probability", "Science", "Computing at CM", "BXA Fr. Research Sem.", "BXA Capstone", "Intro Data Structures", "C/UNIX", "Immigration Course", "Fundamental Data Structures", "Princ Prog/Intro Comp Syst", "Great Theoretical Ideas", "Concepts of Math", "CS Electives (min 5 courses)", "Intro Course", "Architectural Drawing I", "Architectural Drawing II", "Survey of World Arch", "Arch History Lecture", "Arch History Lecture", "Gen_Ed_Focus", "Rep_Vis_Focus", "Tech_Focus", "Arch_Hist_Focus"],
        "department": "CSARC",
        "name": "BA in CSARC",
        "year": ["2010"],
        "type": "BA",
        "MajorFile": "2010:CMU:BCA:CSARC.MAJ"
    }, {
        "requirements": ["Writing Expression", "Cultural Analysis", "CCB or EPS", "HSS Depth", "Math and Probability", "Science", "Computing at CM", "BXA Fr. Research Sem.", "BXA Capstone", "Intro Data Structures", "C/UNIX", "Immigration Course", "Fundamental Data Structures", "Princ Prog/Intro Comp Syst", "Great Theoretical Ideas", "Concepts of Math", "CS Electives (min 5 courses)", "Concept Studios", "Media Studios", "Advanced Media Studios", "Art History/Theory", "Sophomore Review", "Senior Review"],
        "department": "CSART",
        "name": "BA in CSART",
        "year": ["2010"],
        "type": "BA",
        "MajorFile": "2010:CMU:BCA:CSART.MAJ"
    }, {
        "requirements": ["Writing Expression", "Cultural Analysis", "CCB or EPS", "HSS Depth", "Math and Probability", "Science", "Computing at CM", "BXA Fr. Research Sem.", "BXA Capstone", "Intro Data Structures", "C/UNIX", "Immigration Course", "Fundamental Data Structures", "Princ Prog/Intro Comp Syst", "Great Theoretical Ideas", "Concepts of Math", "CS Electives (min 5 courses)", "Design Studio I", "Design Studio II", "Design Drawing I", "Design Drawing II", "Intro to Photo Design", "Photo Design II", "Human Exp in Design", "Design History I", "Crit Hist/Arts", "Design Electives"],
        "department": "CSDES",
        "name": "BA in CSDES",
        "year": ["2010"],
        "type": "BA",
        "MajorFile": "2010:CMU:BCA:CSDES.MAJ"
    }, {
        "requirements": ["Writing Expression", "Cultural Analysis", "CCB or EPS", "HSS Depth", "Math and Probability", "Science", "Computing at CM", "BXA Fr. Research Sem.", "BXA Capstone", "Intro Data Structures", "C/UNIX", "Immigration Course", "Fundamental Data Structures", "Princ Prog/Intro Comp Syst", "Great Theoretical Ideas", "Concepts of Math", "CS Electives (min 5 courses)", "Foundations I", "Foundations II", "Conservatory Hour", "Stagecraft", "Design/PTM Units", "Directing I", "Directing II", "Prod. Symp. I", "Directing Colloq.", "Directing Units", "Dramaturgy I", "Dramaturgy II", "Prod. Symp. Spring", "Ghost Light Forum", "Dramaturgy Prod. I", "History of Drama", "Dramaturgy 3/4/5/6", "Dramaturgy Units"],
        "department": "CSDRA",
        "name": "BA in CSDRA",
        "year": ["2010"],
        "type": "BA",
        "MajorFile": "2010:CMU:BCA:CSDRA.MAJ"
    }, {
        "requirements": ["Writing Expression", "Cultural Analysis", "CCB or EPS", "HSS Depth", "Math and Probability", "Science", "Computing at CM", "BXA Fr. Research Sem.", "BXA Capstone", "Intro Data Structures", "C/UNIX", "Immigration Course", "Fundamental Data Structures", "Princ Prog/Intro Comp Syst", "Great Theoretical Ideas", "Concepts of Math", "CS Electives (min 5 courses)", "Harmony I", "Survey/West Mus Hist", "Rep & List I", "BXA Studio", "Major Ensemble", "Eurhythmics I", "Solfege I", "Composition Electives", "Intro to Music Tech", "Solfege I", "Sound Recording", "Electronic/Computer Music", "Ind Study/Music Tech", "Music Tech", "Music Tech Electives"],
        "department": "CSMUS",
        "name": "BA in CSMUS",
        "year": ["2010"],
        "type": "BA",
        "MajorFile": "2010:CMU:BCA:CSMUS.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "9 units Survey of Forms", "2nd 9 units-Survey of Forms", "4 CW Workshops", "9 units Reading in Forms", "English Electives"],
        "department": "CW",
        "name": "BA in CW",
        "year": ["2008"],
        "type": "BA",
        "MajorFile": "2008:HSS:BA:CW.MAJ"
    }, {
        "requirements": [],
        "department": "ECO",
        "name": "BA in ECO",
        "type": "BA",
        "year": ["2014", "2013", "2011", "2008"]
    }, {
        "requirements": [],
        "department": "EHPP",
        "name": "BA in EHPP",
        "type": "BA",
        "year": ["2014", "2009"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "9 units Survey of Forms", "Interpretive Practices", "Research in Eng Studies", "Rhetoric Requirement", "76-3xx English-18u", "76-4xx English Sem-18u", "27 units Eng Elect"],
        "department": "ENG",
        "name": "BA in ENG",
        "year": ["2008"],
        "type": "BA",
        "MajorFile": "2008:HSS:BA:ENG.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "French Culture", "Francophone World", "French Social Cntxts", "9 units - core course", "Senior Seminar", "List A complete 45 units", "List B complete 9 units"],
        "department": "FRENCH",
        "name": "BA in FRENCH",
        "year": ["2004"],
        "type": "BA",
        "MajorFile": "2004:HSS:BA:FRENCH.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Grmy, Astr, Switz 20th Ctry", "Ctmpry Grmy, Astr, Switz", "Intro to German Studies", "9 units - core course", "Senior Seminar", "List A complete 45 units", "List B complete 9 units"],
        "department": "GERMAN",
        "name": "BA in GERMAN",
        "year": ["2004"],
        "type": "BA",
        "MajorFile": "2004:HSS:BA:GERMAN.MAJ"
    }, {
        "requirements": [],
        "department": "GS",
        "name": "BA in GS",
        "type": "BA",
        "year": ["2014", "2012", "2009"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Survey", "Survey", "Survey", "Required Intro Research Cour", "18 units before 1900", "18 units Research", "Senior Research Seminar"],
        "department": "HIS",
        "name": "BA in HIS",
        "year": ["2009"],
        "type": "BA",
        "MajorFile": "2009:HSS:BA:HIS.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Survey Course-2nd", "Hist Evidence & Int", "Intro Courses-18u", "Issues Public Agenda-36u", "Iss Pub Agenda/Intl-9u", "Hist & Pol Proj Courses"],
        "department": "HISPOL",
        "name": "BA in HISPOL",
        "year": ["2006"],
        "type": "BA",
        "MajorFile": "2006:HSS:BA:HISPOL.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Intermediate Japanese II", "Intro Japanese Lang & Cult", "Advanced Japanese I", "Advanced Japanese II", "9 units - core course", "Senior Seminar", "Complete one course", "List A complete 45 units", "List B complete 9 units"],
        "department": "JAPAN",
        "name": "BA in JAPAN",
        "year": ["2004"],
        "type": "BA",
        "MajorFile": "2004:HSS:BA:JAPAN.MAJ"
    }, {
        "requirements": [],
        "department": "LNGHSS",
        "name": "BA in LNGHSS",
        "type": "BA",
        "year": ["2010", "2007"]
    }, {
        "requirements": [],
        "department": "LOGCPTA",
        "name": "BA in LOGCPTA",
        "year": ["2008"],
        "type": "BA",
        "MajorFile": "2008:HSS:BA:LOGCPTA.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Learn about Lang L", "Tutoring for Comm O", "Intro Sec Lang Acq", "ESL Practicum", "Senior Seminar", "Intro to Dis Analysis", "Grammar Std Written Eng", "Choose 9 units", "27 units minimum"],
        "department": "MLESL",
        "name": "BA in MLESL",
        "year": ["2004"],
        "type": "BA",
        "MajorFile": "2004:HSS:BA:MLESL.MAJ"
    }, {
        "requirements": [],
        "department": "PHI",
        "name": "BA in PHI",
        "type": "BA",
        "year": ["2010", "2008"]
    }, {
        "requirements": ["Undergrad Colloquium**", "Experimental Physics", "Physics III", "Electronics", "Physical Analysis", "Quantum Physics", "Physical Mechanics I", "Physical Mechanics II", "Inter. Elect. & Magnet. I", "Inter. Elect. & Magnet. II", "Modern Physics Lab", "Thermal Physics", "Physics Electives", "Chemistry I", "Modern Biology", "Calculus", "Physics I", "Physics II", "Computer Science", "Computing Skills", "Designated Writing - A", "Cognition, Choice, Behavior", "Economic, Political, Social", "Cultural Analysis - B3", "HSS/CFA Electives - C", "Free Electives"],
        "department": "PHY",
        "name": "BA in PHY",
        "year": ["2000"],
        "type": "BA",
        "MajorFile": "2000:MCS:BA:PHY.MAJ"
    }, {
        "requirements": [],
        "department": "PSY",
        "name": "BA in PSY",
        "type": "BA",
        "year": ["2014", "2004"]
    }, {
        "requirements": [],
        "department": "PW",
        "name": "BA in PW",
        "year": ["2008"],
        "type": "BA",
        "MajorFile": "2008:HSS:BA:PA.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "9 units Hist Core crse", "18 units Hist Elective", "Intermediate Russian I", "Intermediate Russian II", "Advanced Russian I", "18 units Required Elective", "Russian Studies Thesis", "Elementary Russian I", "Elementary Russian II"],
        "department": "RUSSTU",
        "name": "BA in RUSSTU",
        "year": ["2004"],
        "type": "BA",
        "MajorFile": "2004:HSS:BA:RUSSTU.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Survey Courses", "Hist Evidence & Interpration", "Requirement 1", "Requirement 2", "Adv Studies in SCH"],
        "department": "SCH",
        "name": "BA in SCH",
        "year": ["2006"],
        "type": "BA",
        "MajorFile": "2006:HSS:BA:SCH.MAJ"
    }, {
        "requirements": ["CCR1", "CCR2", "CCR3", "DCR1", "DCR2", "DCR3", "DCR4", "DCR5", "DCR6", "8th DCR", "Computing Skills Wrkshp", "Freshman Seminar-beganF97", "History Workshop", "Intro Social History", "New Tpcs Soc History", "Social Hist Res Sem", "Hist Civilization-9u", "History Elects-27u"],
        "department": "SH",
        "name": "BA in SH",
        "year": ["1998"],
        "type": "BA",
        "MajorFile": "1998:HSS:BA:SH.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Complete 18 units", "Intro Hisp Lit&Cult; St", "9 units - core course", "Senior Seminar", "List A complete 45 units", "List B complete 9 units"],
        "department": "SPANISH",
        "name": "BA in SPANISH",
        "year": ["2004"],
        "type": "BA",
        "MajorFile": "2004:HSS:BA:SPANISH.MAJ"
    }, {
        "requirements": [],
        "department": "TW",
        "name": "BA in TW",
        "year": ["2008"],
        "type": "BA",
        "MajorFile": "2008:HSS:BA:TW.MAJ"
    }, {
        "requirements": [],
        "department": "TWCM",
        "name": "BA in TWCM",
        "year": ["2008"],
        "type": "BA",
        "MajorFile": "2008:HSS:BA:TWCM.MAJ"
    }, {
        "requirements": ["Writing Expression", "BXA Research Seminars", "Cultural Analysis", "Math and Probability", "Science", "CCB or EPS", "HSS Depth", "Computing at CM", "Immigration Course", "Programming Course", "C/UNIX", "Concepts of Math", "Fundamental Data Structures", "Princ Prog/Intro Comp Syst", "Great Theoretical Ideas", "CS Electives (min 5 courses)", "Concept Studios", "Media Studios", "Advanced Studios", "Art History/Theory", "Sophomore Review", "Senior Review"],
        "department": "CSART",
        "name": "BCA in CSART",
        "year": ["2008"],
        "type": "BCA",
        "MajorFile": "2008:CMU:BCA:CSART.MAJ"
    }, {
        "requirements": ["COMMUNICATING", "REFLECTING", "MODELING", "DECIDING", "BHA/BSA INTERDIS", "COMPUTING @ CMU", "Intro Course", "Drawing 1", "Drawing 2", "Survey World Arch", "Arch History Lecture", "Arch History Lecture", "Architecture Electives"],
        "department": "HSSARC",
        "name": "BHA in HSSARC",
        "type": "BHA",
        "year": ["2004", "2002"]
    }, {
        "requirements": ["COMMUNICATING", "REFLECTING", "MODELING", "DECIDING", "BHA/BSA INTERDIS", "COMPUTING @ CMU", "Concept Studios", "Media Studios", "Advanced Studios", "Art History/Theory", "Sophomore Review", "Senior Review"],
        "department": "HSSART",
        "name": "BHA in HSSART",
        "type": "BHA",
        "year": ["2004", "2002"]
    }, {
        "requirements": ["COMMUNICATING", "REFLECTING", "MODELING", "DECIDING", "BHA/BSA INTERDIS", "COMPUTING @ CMU", "Design Studio I", "Design Studio II", "Design Drawing I", "Design Drawing II", "Intro Photo Design", "Human Experience in Design", "Crit Histories/ObjectsImages", "Design History I", "Des Hist II/Social Change", "Design Electives"],
        "department": "HSSDES",
        "name": "BHA in HSSDES",
        "type": "BHA",
        "year": ["2004", "2003", "2002"]
    }, {
        "requirements": ["COMMUNICATING", "REFLECTING", "MODELING", "DECIDING", "BHA/BSA INTERDIS", "COMPUTING @ CMU", "Foundations I", "Foundations II", "Foundations III", "Foundations IV", "Stagecraft", "Conservatory Hour I", "Conservatory Hour II", "Electives"],
        "department": "HSSDRA",
        "name": "BHA in HSSDRA",
        "type": "BHA",
        "year": ["2004", "2002"]
    }, {
        "requirements": ["COMMUNICATING", "REFLECTING", "MODELING", "DECIDING", "BHA/BSA INTERDIS", "COMPUTING @ CMU", "Harmony", "Eurythmics I", "Survey Music Hist", "Solfege I", "Additional Academics", "Studio", "Ensemble"],
        "department": "HSSMUS",
        "name": "BHA in HSSMUS",
        "type": "BHA",
        "year": ["2004", "2002"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Survey Course", "Hist Evidence & Int", "Theory & Pract In Anthr", "Thematic Cluster - 18 units", "Regional Cluster - 27 units", "Adv Studies in Anthr & His"],
        "department": "ANTHIS",
        "name": "BS in ANTHIS",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:ANTHIS.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "H&SS; Freshman Seminar", "Comp. Science Prereq.", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "IS Elective", "Organizations", "Quan Analysis & Rsch Mtds", "Professional Communication", "Professional Communication", "Professional Communication", "IS Content Area 9 units", "Other Content Area 18 units"],
        "department": "API",
        "name": "BS in API",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:QIS:API.MAJ"
    }, {
        "requirements": [],
        "department": "BA",
        "name": "BS in BA",
        "type": "BS",
        "year": ["2013", "2012", "2008", "2005"]
    }, {
        "requirements": [],
        "department": "BAENT",
        "name": "BS in BAENT",
        "type": "BS",
        "year": ["2013", "2012", "2005"]
    }, {
        "requirements": [],
        "department": "BAFIN",
        "name": "BS in BAFIN",
        "type": "BS",
        "year": ["2013", "2012"]
    }, {
        "requirements": [],
        "department": "BAGENMAN",
        "name": "BS in BAGENMAN",
        "type": "BS",
        "year": ["2013", "2012"]
    }, {
        "requirements": [],
        "department": "BAIMN",
        "name": "BS in BAIMN",
        "type": "BS",
        "year": ["2013", "2005"]
    }, {
        "requirements": ["Global Business", "Intro to Accounting", "Prof & Service Projects", "Organizational Behavior", "Business, Society, & Ethics", "Business Communications", "Business Presentations", "Operations Management", "Marketing", "Finance", "Mgmt Info Systems", "Management Game", "Principles of Economics", "Intermed Microeconomics", "Intermed Macroeconomics", "Calculus", "Multivariate Analysis", "Optimization", "Prob/Stat for Business", "Regression Analysis", "Intro to Computing", "CSW", "Global Histories", "Writing", "Science & Technology", "Cognition, Choice, Behavior", "Political & Social Instns", "Creative Production", "Cultural Analysis", "Mngng Across Cultures", "Intl Trade & Intl Law", "Intl Management", "Intl Marketing", "Ind Study in Intl Mgmt", "Language Proficiency", "Two Intl Mgmt Electives"],
        "department": "BAITM",
        "name": "BS in BAITM",
        "year": ["2013"],
        "type": "BS",
        "MajorFile": "2013:CMU:BS:QBA-ITM.MAJ"
    }, {
        "requirements": [],
        "department": "BAMARK",
        "name": "BS in BAMARK",
        "type": "BS",
        "year": ["2013", "2012"]
    }, {
        "requirements": [],
        "department": "BIOARC",
        "name": "BS in BIOARC",
        "year": ["2001"],
        "type": "BS",
        "MajorFile": "2001:CMU:BSA:BIOARC.MAJ"
    }, {
        "requirements": ["Calculus 1", "Calculus 2", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives - Restricted", "Free Electives - Unrestricte", "Modern Biology", "Biochemistry", "Cell Biology", "CompBio", "Genetics", "Exper Genetics/Molec Biology", "Exper Biochem/Cell Dev", "Topics in Research", "Colloquium", "Bio Electives - 54 Units", "Modern Chem II", "Organic Chem", "Exper Tech Chem", "Check", "Genetics Option", "Biochemistry Option", "Biophysics Option", "Cell Biology Option", "Developmental Biology Option", "Molecular Biology Option 201", "Computational Biology Option", "Required Courses", "Additional Courses"],
        "department": "BSC",
        "name": "BS in BSC",
        "year": ["2011"],
        "type": "BS",
        "MajorFile": "2011:MCS:BS:BSC.MAJ"
    }, {
        "requirements": ["Calculus", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives", "Modern Biology", "Biochemistry", "Cell Biology", "Genetics", "Exper Genetics/Molec Biology", "Exper Biochem/Cell Dev", "Topics in Research", "Colloquium", "Computational Biology", "Adv Bio Elective - 9 Units", "Modern Chem II", "Organic Chem", "Exper Tech Chem", "Physical Chemistry", "Compbio Elective Reqs", "Differential Equations", "Computing Electives", "Genetics Option", "Biochemistry Option", "Biophysics Option", "Cell Biology Option", "Developmental Biology Option", "Molecular Biology Option", "Computational Biology Option", "Check"],
        "department": "BSCCB",
        "name": "BS in BSCCB",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:BSCCB.MAJ"
    }, {
        "requirements": ["Modern Biology", "Colloquia", "Biochemistry", "Cell Biology", "Genetics", "Intro to Bio Lab Processes", "Exper Tech/Molecular Biology", "Senior Seminar", "Advanced Biology Elective", "Funamentals of Programming", "Imperative Programming", "Functional Programming", "Par & Seq Data Structures", "Great Theoretical Ideas", "Algorithm Design & Analysis", "Advanced CS Elective", "Intro to Comp Bio", "Computational Genomics", "Comp Bio Elective", "Modern Chem I", "Modern Chem II", "Organic Chemistry I", "Physics I", "Differential & Integral Calc", "Integration & Approximation", "Concepts of Math", "Matrix Algebra/DiffEQ", "Probability Course", "Writing", "Cognition, Choice, Behavior", "Econ, Politcl, Social Insts", "Cultural Analysis", "Humanities/Arts Electives", "CSW"],
        "department": "BSCCBIO",
        "name": "BS in BSCCBIO",
        "type": "BS",
        "year": ["2014", "2001"]
    }, {
        "requirements": [],
        "department": "BSCNSC",
        "name": "BS in BSCNSC",
        "type": "BS",
        "year": ["2013"]
    }, {
        "requirements": [],
        "department": "BSCPSY",
        "name": "BS in BSCPSY",
        "year": ["2011"],
        "type": "BS",
        "MajorFile": "2011:MCS:BS:BSCPSY.MAJ"
    }, {
        "requirements": ["Calculus 1", "Calculus 2", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives - Restricted", "Free Electives - Unrestricte", "Genetics", "Modern Chemistry II", "Organic Chemistry I", "Chemistry Lab I", "Statistics", "BFoB or Mol to Mind", "Cog Psych or Human Info Pro", "Cellular Neuroscience", "Systems Neuroscience", "Neural Computation", "Princ Imper Comp", "Matric and Lin Trans", "Laboratory, Data Analysis, a", "18 units of CompNeuro electi", "18 additional units of Neuro"],
        "department": "CMPNRO",
        "name": "BS in CMPNRO",
        "year": ["2014"],
        "type": "BS",
        "MajorFile": "2014:MCS:BS:CMPNRO.MAJ"
    }, {
        "requirements": ["Calculus", "Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives", "Intro to Modern Chem", "Modern Chemistry II", "Issues in Chem", "Modern Organic Chem I", "Modern Organic Chem II", "Modern Analytical Inst.", "Physical Chemistry I", "Physical Chemistry II", "Inorganic Chemistry", "Lab I", "Lab II", "Lab III", "Lab IV", "Chem Seminars - 8 Units", "Chem Electives - 18 Units", "Advanced Math"],
        "department": "CMY",
        "name": "BS in CMY",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:CMY.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Diff & Integral Calculus", "Int, Diff Equat & Approx", "Modern Biology", "Genetics", "Intro to Mod Chemistry I", "Modern Chemistry II", "Physics I for Sci Students", "Org Chem I or Physics II", "Lab I", "Fund Prog & Comp Sci", "Bio Fnd Beh or Mol to Mind", "Cog Psych or Human Info Pro", "Cellular Neuroscience", "Systems Neuroscience", "Neural Comp or Par Dist Prof", "Introduction to Psychology", "Exp Des Beh & Soc Science", "Research Methods Cog Neuro", "Research Methods Cog", "27 units Cog Neuroscience"],
        "department": "COGNEURO",
        "name": "BS in COGNEURO",
        "year": ["2014"],
        "type": "BS",
        "MajorFile": "2014:DC:BS:COGNEURO.MAJ"
    }, {
        "requirements": ["Calculus 1", "Calculus 2", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives - Restricted", "Free Electives - Unrestricte", "Genetics", "Modern Chemistry II", "Organic Chemistry I", "Chemistry Lab I", "Statistics", "BFoB or Mol to Mind", "Cog Psych or Human Info Pro", "Cellular Neuroscience", "Systems Neuroscience", "Neural Comp or Par Dist Prof", "Introduction to Psychology", "Exp Des Beh & Soc Science", "Research Methods Cog Neuro", "Research Methods Cog Psych", "27 units Cog Neuroscience", "18 additional units of Neuro"],
        "department": "COGNRO",
        "name": "BS in COGNRO",
        "year": ["2014"],
        "type": "BS",
        "MajorFile": "2014:MCS:BS:COGNRO.MAJ"
    }, {
        "requirements": [],
        "department": "COGSCI",
        "name": "BS in COGSCI",
        "type": "BS",
        "year": ["2014", "2004"]
    }, {
        "requirements": ["Calculus", "Science Requirement", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Cultural Analysis", "Non-Tech Electives", "Free Electives - Restricted", "Free Electives - Unrestricte", "Adv Prog Practicum", "Calc in 3D", "Matrix Algebra", "Intro Math Finance", "OR 1", "Differential Equations", "Numerical Methods", "Disrete Time Finance", "Continuous Time Finance", "Finance", "Principles of Economics", "Microeconomics", "Macroeconomics", "Intro Prob & Stats", "Intro Prob & Stats II", "Intro Prob Models", "Depth Electives", "Intro Accounting", "Prof Writing", "Prof Speaking", "Fin. Engineering", "Org Design & Imp"],
        "department": "COMPFIN",
        "name": "BS in COMPFIN",
        "year": ["2002"],
        "type": "BS",
        "MajorFile": "2002:MCS:BS:COMPFIN.MAJ"
    }, {
        "requirements": [],
        "department": "CS",
        "name": "BS in CS",
        "type": "BS",
        "year": ["2013", "2010", "2008", "2006", "2005"]
    }, {
        "requirements": [],
        "department": "DECSCI",
        "name": "BS in DECSCI",
        "type": "BS",
        "year": ["2013", "2012", "2011", "2010", "2008"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "H&SS; Freshman Seminar", "Comp. Science Prereq.", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "IS Elective", "Organizations", "Quan Analysis & Rsch Mtds", "Professional Communication", "Professional Communication", "Professional Communication", "IS Content Area 9 units", "Other Content Area 18 units"],
        "department": "DES",
        "name": "BS in DES",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:QIS:DES.MAJ"
    }, {
        "requirements": [],
        "department": "ECO",
        "name": "BS in ECO",
        "type": "BS",
        "year": ["2014", "2013", "2011", "2008"]
    }, {
        "requirements": [],
        "department": "ECOMTH",
        "name": "BS in ECOMTH",
        "type": "BS",
        "year": ["2014", "2011", "2008"]
    }, {
        "requirements": [],
        "department": "ECOSTA",
        "name": "BS in ECOSTA",
        "type": "BS",
        "year": ["2014", "2013", "2012", "2011", "2004"]
    }, {
        "requirements": [],
        "department": "EHPP",
        "name": "BS in EHPP",
        "type": "BS",
        "year": ["2014", "2009"]
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob/Stat for Business", "Regression", "C@CM", "Programming", "Prin of Economics", "Microeconomics", "Macroeconomics", "Intro to World History", "Interp/Argument", "Science/Technology", "Cognition & Behavior", "Political & Social", "Creative Production", "Cultural Analysis", "Intro to Business", "Intro to Accounting", "Org Behavior", "Bus,Society & Ethics", "Bus Communications", "Bus Presentations", "Prod & Oper Mgmt", "Marketing", "Finance", "Mgmt Info Systems", "Service Project", "Management Game"],
        "department": "GENMAN",
        "name": "BS in GENMAN",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:TSB:BS:QBAGENMAN.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Statistical Methods", "Empir Resrch Methods", "Policy Analysis I", "Policy Analysis II", "Dec Proc Am Pol Inst", "Theories of Intl Rel", "Comparative Politics", "Intl Pol Economy", "Intl Politics", "Intl Cultures", "18 units to equal 45", "88-xxx GP electives", "Stat Reas & Prac", "1 semester calculus"],
        "department": "GP",
        "name": "BS in GP",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2008:HSS:BS:GP.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "H&SS; Freshman Seminar", "Comp. Science Prereq.", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "IS Elective", "Organizations", "Quan Analysis & Rsch Mtds", "Professional Communication", "Professional Communication", "Professional Communication", "IS Content Area 9 units", "Other Content Area 18 units"],
        "department": "GSM",
        "name": "BS in GSM",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:QIS:GSM.MAJ"
    }, {
        "requirements": [],
        "department": "HIS",
        "name": "BS in HIS",
        "year": ["2009"],
        "type": "BS",
        "MajorFile": "2009:HSS:BS:HIS.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Survey Course-2nd", "Hist Evidence & Int", "Intro Courses-18u", "Issues Public Agenda-36u", "Iss Pub Agenda/Intl-9u", "Hist & Pol Proj Courses"],
        "department": "HISPOL",
        "name": "BS in HISPOL",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:HISPOL.MAJ"
    }, {
        "requirements": [],
        "department": "INFOSYS",
        "name": "BS in INFOSYS",
        "type": "BS",
        "year": ["2014", "2013", "2010", "2006"]
    }, {
        "requirements": [],
        "department": "INTRELP",
        "name": "BS in INTRELP",
        "type": "BS",
        "year": ["2015", "2013", "2010"]
    }, {
        "requirements": ["Calculus sequence (2)", "Statistics", "Data Structures", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "Organizations", "Dec Sci & Rational Choice", "Research Methods", "Professional Communication", "27 units Content Area", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ISSTA",
        "name": "BS in ISSTA",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:ISSTA.MAJ"
    }, {
        "requirements": [],
        "department": "LOGCPTA",
        "name": "BS in LOGCPTA",
        "type": "BS",
        "year": ["2014", "2008"]
    }, {
        "requirements": [],
        "department": "MGLECO",
        "name": "BS in MGLECO",
        "year": ["2000"],
        "type": "BS",
        "MajorFile": "2000:HSS:BS:MLECO.MAJ"
    }, {
        "requirements": ["Concepts of Mathematics", "Discrete Mathematics", "Undergraduate Colloquium", "Matrix Algebra", "Calculus in 3D", "Differential Equations", "Symbolic Computing Methods", "Probability", "Real Analysis I", "Real Analysis II", "Numerical Methods", "Computer Science", "Depth Electives", "Calculus", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives"],
        "department": "MSCCSM",
        "name": "BS in MSCCSM",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:MSCCAM.MAJ"
    }, {
        "requirements": ["Computer Science Core", "Concepts of Mathematics", "Discrete Mathematics", "Matrix Algebra", "Basic Logic", "Combinatorics", "Linear Algebra", "Real Analysis I", "Algebraic Structures", "Discrete Math and Logic", "Undergraduate Colloquium", "Math Electives", "Computer Science Electives", "Calculus", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives"],
        "department": "MSCDML",
        "name": "BS in MSCDML",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:MSCDML.MAJ"
    }, {
        "requirements": ["Concepts of Mathematics", "Discrete Mathematics", "Matrix Algebra", "Linear Algebra", "Calculus in 3D", "Differential Equations", "Principles of Real Analysis", "Principles of Real Analysis", "Algebraic Structures", "Math Science Electives", "Probability", "Math, Stats, CS Electives", "Calculus", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Pol,and Soc Inst", "Cultural Analysis", "Electives"],
        "department": "MSCM",
        "name": "BS in MSCM",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:MSCM.MAJ"
    }, {
        "requirements": ["Concepts of Mathematics", "Discrete Mathematics", "Matrix Algebra", "Calculus in 3D", "Differential Equations", "Operations Research I, II", "Numerical Methods", "Probability", "Intro Prob & Stats II", "Modern Regression", "Advanced Data Analysis", "Intro to Prob Models", "Undergraduate Colloquium", "Intro to Accounting", "Principles of Economics", "Micro Economics", "Macro Economics", "Depth Electives", "Calculus", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer_Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Cultural Analysis", "H&SS;, CFA, IM Elective Cours"],
        "department": "MSCOR",
        "name": "BS in MSCOR",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:MSCOR.MAJ"
    }, {
        "requirements": ["Concepts of Mathematics", "Discrete Mathematics", "Matrix Algebra", "Calculus in Three Dimensions", "Differential Equations", "Operations Research I, II", "Numerical Methods", "Probability", "Intro Prob & Stat II", "Adv Data Analysis I, II", "Intro to Probability Models", "Statistics Elective", "Undergraduate Colloquium", "Principles of Economics", "Data Structures", "Depth Electives", "Calculus", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Economic, Political and Soci", "Cultural Analysis", "Non-Tech Electives"],
        "department": "MSCSTA",
        "name": "BS in MSCSTA",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:MSCSTA.MAJ"
    }, {
        "requirements": ["Concepts of Math", "Matrix Algebra", "Calc in 3D", "Operation Research I", "Advanced Calc/Num. Methods", "Colloquium", "Math Electives - 2 Courses", "Prob & Stats I", "Prob & Stats II", "Intro to Probability Models", "Seminar", "Modern Regression", "Stats & Data Analysis Electi", "Free Electives - Restricted"],
        "department": "MSCSTAT",
        "name": "BS in MSCSTAT",
        "year": ["2001"],
        "type": "BS",
        "MajorFile": "2001:CMU:BS:SHS:MSCSTAT.MAJ"
    }, {
        "requirements": ["Principles of Economics", "Microeconomics", "Macroeconomics", "Adv. Microecon. Theory", "Adv. Macroecon. Theory", "Intro to Prob and Stats I", "Intro to Prob and Stats II", "Econometrics", "Modern Regression", "Concepts of Mathematics", "Discrete Mathematics", "Matrix Algebra", "Calculus in Three Dimensions", "Differential Equations", "Principles of Real Analysis", "Principles of Real Analysis", "Programming", "Writing Requirement", "1st Econ. Elective", "2nd Econ. Elective", "3rd Econ. Elective", "Math Science Electives", "Calculus", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Pol,and Soc Inst", "Cultural Analysis", "Electives"],
        "department": "MTHECO",
        "name": "BS in MTHECO",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:MTHECO.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Differntial and Integral Cal", "Integration, Differential Eq", "Modern Biology", "Genetics", "Intro to Modern Chemistry I", "Modern Chemistry II", "Physics I for Science Studen", "Organic Chemistry I or Physi", "Lab I", "Fund. of Computing or Princi", "Statistcal Reasoning, Probab", "Bio Found or Mole to Mind", "Cog Psych or Human Info and", "Cell Neuro", "Systems Neuro", "Neural Computation or PDP"],
        "department": "NEURO",
        "name": "BS in NEURO",
        "year": ["2014"],
        "type": "BS",
        "MajorFile": "2014:DC:BS:NEURO.MAJ"
    }, {
        "requirements": ["Calculus 1", "Calculus 2", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives - Restricted", "Free Electives - Unrestricte", "Genetics", "Modern Chemistry II", "Organic Chemistry I", "Chemistry Lab I", "Statistics", "BFoB or Mol to Mind", "Cog Psych or Human Info Pro", "Cellular Neuroscience", "Systems Neuroscience", "Neural Comp or Par Dist Prof", "Biochemistry I", "Cell Biology", "Neuro of Disease or Neural C", "Laboratory, Data Analysis, a", "9 units of Neurobiology elec", "18 additional units of Neuro"],
        "department": "NROBIO",
        "name": "BS in NROBIO",
        "year": ["2014"],
        "type": "BS",
        "MajorFile": "2014:MCS:BS:NROBIO.MAJ"
    }, {
        "requirements": ["Undergrad Colloquium**", "Experimental Physics", "Physics III", "Electronics", "Physical Analysis", "Quantum Physics", "Physical Mechanics I", "Inter. Elect. & Magnet. I", "Modern Physics Lab", "Thermal Physics", "Physics Electives", "Calculus in 3D", "Math Methods for Physicists", "Math Electives", "Chemistry I", "Modern Biology", "Calculus", "Physics I", "Physics II", "Computer Science", "Computing Skills", "Designated Writing - A", "Cognition, Choice, Behavior", "Economic, Political, Social", "Cultural Analysis - B3", "HSS/CFA Electives - C", "Technical Electives", "Free Electives"],
        "department": "PHY",
        "name": "BS in PHY",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:PHY.MAJ"
    }, {
        "requirements": [],
        "department": "PHYAPP",
        "name": "BS in PHYAPP",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:PHYAPP.MAJ"
    }, {
        "requirements": ["Undergrad Colloquium**", "Experimental Physics", "Physics III", "Electronics", "Physical Analysis", "Quantum Physics", "Physical Mechanics I", "Inter. Elect. & Magnet. I", "Modern Physics Lab", "Thermal Physics", "Physics Electives", "Stars Galaxies Universe", "Intro Astrophysics", "Intro Cosmology", "Research in Astrophysics", "Calculus in 3D", "Math Methods for Physicists", "Math Electives", "Chemistry I", "Modern Biology", "Calculus", "Physics I", "Physics II", "Computer Science", "Computing Skills", "Designated Writing - A", "Cognition, Choice, Behavior", "Economic, Political, Social", "Cultural Analysis - B3", "HSS/CFA Electives - C", "Free Electives - Restricted", "Free Electives - Unrestricte"],
        "department": "PHYAST",
        "name": "BS in PHYAST",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:PHYAST.MAJ"
    }, {
        "requirements": ["Undergrad Colloquium**", "Experimental Physics", "Physics III", "Electronics", "Physical Analysis", "Quantum Physics", "Physical Mechanics I", "Inter. Elect. & Magnet. I", "Modern Physics Lab", "Thermal Physics", "Physics Electives", "Biochemistry", "Intro. to Biophysics", "Organic Chemistry", "Biology Electives", "Calculus in 3D", "Math Methods for Physicists", "Math Electives", "Chemistry I", "Modern Biology", "Calculus", "Physics I", "Physics II", "Computer Science", "Computing Skills", "Designated Writing - A", "Cognition, Choice, Behavior", "Economic, Political, Social", "Cultural Analysis - B3", "HSS/CFA Electives - C", "Free Electives"],
        "department": "PHYBP",
        "name": "BS in PHYBP",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:PHYBP.MAJ"
    }, {
        "requirements": ["Experimental Physics", "Undergraduate Colloquium**", "Physics III", "Electronics", "Physical Analysis", "Quantum Physics", "Physical Mechanics I", "Physical Mechanics II", "Intermed Elec & Mag I", "Intermed Elec & Mag II", "Modern Physics Lab", "Thermal Physics", "Physics Electives", "Calculus in 3D", "Differential Equations", "Math Elective", "Technical Electives", "Free Electives"],
        "department": "PHYCHM",
        "name": "BS in PHYCHM",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:PHYCHM.MAJ"
    }, {
        "requirements": ["Undergrad Colloquium**", "Experimental Physics", "Physics III", "Electronics", "Physical Analysis", "Quantum Physics", "Physical Mechanics I", "Inter. Elect. & Magnet. I", "Modern Physics Lab", "Thermal Physics", "Physics Electives", "Intro. to Computational Phys", "Advanced Computational Physi", "Fund. Structures of CS I", "Fund. Structures of CS II", "Concepts of Mathematics", "Numerical Methods", "Calculus in 3D", "Math Methods for Physicists", "Math Electives", "Chemistry I", "Modern Biology", "Calculus", "Physics I", "Physics II", "Computer Science", "Computing Skills", "Designated Writing - A", "Cognition, Choice, Behavior", "Economic, Political, Social", "Cultural Analysis - B3", "HSS/CFA Electives - C", "Technical Electives", "Free Electives"],
        "department": "PHYCP",
        "name": "BS in PHYCP",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:PHYCP.MAJ"
    }, {
        "requirements": [],
        "department": "POLMGMT",
        "name": "BS in POLMGMT",
        "type": "BS",
        "year": ["2013", "2011", "2010", "2008"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Calculus", "Decision Processes in A P I", "Elec Sys & Proc OR", "Comp Pol OR", "Policy Analysis I", "Policy Analysis II", "Policy Analysis III", "Statistical Methods", "Empir Resrch Mtds", "two from 88-xxx", "two additional electives"],
        "department": "POLSCI",
        "name": "BS in POLSCI",
        "year": ["2004"],
        "type": "BS",
        "MajorFile": "2004:HSS:BS:POLSCI.MAJ"
    }, {
        "requirements": [],
        "department": "PSY",
        "name": "BS in PSY",
        "type": "BS",
        "year": ["2014", "2004"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Experimental Des", "Phys for Sci St I", "Org Chemistry I", "Org Chemistry II", "Modern Biology", "Biochemistry", "Cell Biology", "Genetics", "Intro to Psychology", "3 Survey Courses", "Chemistry Lab I", "Chemistry Lab II", "Exp Genetics & Mol Bio", "1 Research Methods", "Additional Laboratory", "2 Psych Adv Elect", "1 Bio General Elect", "2 Bio Adv Elect", "1 Adv BioSci/Psy Elect", "2 semesters Calculus", "Stats Reasoning", "Nat Sci-Mod Chem I&II;", "Intro Programming"],
        "department": "PSYBSC",
        "name": "BS in PSYBSC",
        "year": ["2004"],
        "type": "BS",
        "MajorFile": "2004:HSS:BS:PSYBSC.MAJ"
    }, {
        "requirements": ["Modern Biology", "Colloquia", "Biochemistry", "Cell Biology", "Comp Bio", "Genetics", "Exper Tech/Molecular Biology", "Experimental Biochemistry", "Senior Seminars", "General Biology Electives", "Two Advanced Bio Electives", "Modern Chem I", "Modern Chem II", "Organic Chemistry I", "Organic Chemistry II", "Lab I", "Lab II", "Differential & Integral Calc", "Integration & Approximation", "Physics I", "Physics II", "Intro to Computing", "CSW", "Writing", "Cognition, Choice, Behavior", "Econ, Politcl, Social Insts", "Cultural Analysis", "Humanities/Arts Electives"],
        "department": "QBS",
        "name": "BS in QBS",
        "year": ["2013"],
        "type": "BS",
        "MajorFile": "2013:CMU:BS:QBS.MAJ"
    }, {
        "requirements": [],
        "department": "QINFOSYS",
        "name": "BS in QINFOSYS",
        "type": "BS",
        "year": ["2010", "2006"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Survey Courses", "Hist Evidence & Interpration", "Requirement 1", "Requirement 2", "Adv studies in Social and Cu"],
        "department": "SCH",
        "name": "BS in SCH",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:SCH.MAJ"
    }, {
        "requirements": ["CCR1", "CCR2", "CCR3", "DCR1", "DCR2", "DCR3", "DCR4", "DCR5", "DCR6", "8th DCR", "Computing Skills Wrkshp", "Freshman Seminar-beganF97", "History Workshop", "Intro Social History", "New Tpcs Soc History", "Social Hist Res Sem", "Hist Civilization-9u", "History Elects-27u", "1st Calculus", "2nd Calc or Stats"],
        "department": "SH",
        "name": "BS in SH",
        "year": ["1998"],
        "type": "BS",
        "MajorFile": "1998:HSS:BS:SH.MAJ"
    }, {
        "requirements": [],
        "department": "STA",
        "name": "BS in STA",
        "type": "BS",
        "year": ["2014", "2010", "2004"]
    }, {
        "requirements": ["Calc. Course 1", "Intergration/Diff Eq", "Multivar. Calc.", "Concepts of Math", "Matrix Algebra", "Data Analysis", "Modern Regression", "Adv. Data Analysis", "Intro. to Prob. Theory", "Intro. to Stat. Inference", "Statistical Computing", "Fundamentals of Programming", "Principles of Imperative Com", "Machine Learning", "Algorithms and Adv. Data Str", "Large Datasets", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "STAMACH",
        "name": "BS in STAMACH",
        "year": ["2014"],
        "type": "BS",
        "MajorFile": "2014:DC:BS:STAMACH.MAJ"
    }, {
        "requirements": [],
        "department": "TEC",
        "name": "BS in TEC",
        "type": "BS",
        "year": ["2006"]
    }, {
        "requirements": [],
        "department": "TW",
        "name": "BS in TW",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:HSS:BS:TW.MAJ"
    }, {
        "requirements": [],
        "department": "TWCM",
        "name": "BS in TWCM",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:HSS:BA:TWCM.MAJ"
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Biochemistry I", "Cell Biology", "Genetics", "Modern Biology Laboratory", "Undergrad Colloq/Soph", "Modern Chemistry II", "Organic Chemistry I", "Organic Chemistry II", "Lab I", "Lab II", "Physics II/Sci Students", "Biology Electives", "Intro Course", "Architectural Drawing I", "Architectural Drawing II", "Survey of World Arch", "Arch History Lecture", "Arch History Lecture", "Gen_Ed_Focus", "Rep_Vis_Focus", "Tech_Focus", "Arch_Hist_Focus"],
        "department": "BIOARC",
        "name": "BSA in BIOARC",
        "type": "BSA",
        "year": ["2010", "2001"]
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Biochemistry I", "Cell Biology", "Genetics", "Modern Biology Laboratory", "Undergrad Colloq/Soph", "Modern Chemistry II", "Organic Chemistry I", "Organic Chemistry II", "Lab I", "Lab II", "Physics II/Sci Students", "Biology Electives", "Concept Studios", "Media Studios", "Advanced Studios", "Art History/Theory", "Sophomore Review", "Senior Review"],
        "department": "BIOART",
        "name": "BSA in BIOART",
        "type": "BSA",
        "year": ["2010", "2001"]
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Biochemistry I", "Cell Biology", "Genetics", "Modern Biology Laboratory", "Undergrad Colloq/Soph", "Modern Chemistry II", "Organic Chemistry I", "Organic Chemistry II", "Lab I", "Lab II", "Physics II/Sci Students", "Biology Electives", "Design Studio I", "Design Studio II", "Design Drawing I", "Design Drawing II", "Intro to Photo Design", "Photo Design II", "Human Exp in Design", "Design History I", "Crit Hist/Arts", "Design Electives"],
        "department": "BIODES",
        "name": "BSA in BIODES",
        "type": "BSA",
        "year": ["2010", "2003", "2002"]
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Biochemistry I", "Cell Biology", "Genetics", "Modern Biology Laboratory", "Undergrad Colloq/Soph", "Modern Chemistry II", "Organic Chemistry I", "Organic Chemistry II", "Lab I", "Lab II", "Physics II/Sci Students", "Biology Electives", "Foundations I", "Foundations II", "Conservatory Hour", "Stagecraft", "Design/PTM Units", "Directing I", "Directing II", "Prod. Symp. I", "Directing Colloq.", "Directing Units", "Dramaturgy I", "Dramaturgy II", "Prod. Symp. Spring", "Ghost Light Forum", "Dramaturgy Prod. I", "History of Drama", "Dramaturgy 3/4/5/6", "Dramaturgy Units"],
        "department": "BIODRA",
        "name": "BSA in BIODRA",
        "type": "BSA",
        "year": ["2010", "2002"]
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Biochemistry I", "Cell Biology", "Genetics", "Modern Biology Laboratory", "Undergrad Colloq/Soph", "Modern Chemistry II", "Organic Chemistry I", "Organic Chemistry II", "Lab I", "Lab II", "Physics II/Sci Students", "Biology Electives", "Harmony I", "Survey/West Mus Hist", "Rep & List I", "BXA Studio", "Major Ensemble", "Eurhythmics I", "Solfege I", "Performance Electives", "Music History I", "Music History II", "Rep & List III", "Rep & List IV", "Ind Study/Music History", "Hist_Cult", "Hist_Cult_Elect", "Intro to Music Tech", "Solfege I", "Sound Recording", "Electronic/Computer Music", "Ind Study/Music Tech", "Music Tech", "Music Tech Electives"],
        "department": "BIOMUS",
        "name": "BSA in BIOMUS",
        "type": "BSA",
        "year": ["2010", "2002"]
    }, {
        "requirements": [],
        "department": "CHMARC",
        "name": "BSA in CHMARC",
        "year": ["2010"],
        "type": "BSA",
        "MajorFile": "2010:CMU:BSA:CHMARC.MAJ"
    }, {
        "requirements": [],
        "department": "CHMART",
        "name": "BSA in CHMART",
        "year": ["2010"],
        "type": "BSA",
        "MajorFile": "2010:CMU:BSA:CHMART.MAJ"
    }, {
        "requirements": [],
        "department": "CHMDES",
        "name": "BSA in CHMDES",
        "year": ["2010"],
        "type": "BSA",
        "MajorFile": "2010:CMU:BSA:CHMDES.MAJ"
    }, {
        "requirements": [],
        "department": "CHMDRA",
        "name": "BSA in CHMDRA",
        "year": ["2010"],
        "type": "BSA",
        "MajorFile": "2010:CMU:BSA:CHMDRA.MAJ"
    }, {
        "requirements": [],
        "department": "CHMMUS",
        "name": "BSA in CHMMUS",
        "year": ["2010"],
        "type": "BSA",
        "MajorFile": "2010:CMU:BSA:CHMMUS.MAJ"
    }, {
        "requirements": [],
        "department": "CMYARC",
        "name": "BSA in CMYARC",
        "year": ["2002"],
        "type": "BSA",
        "MajorFile": "2002:CMU:BSA:CMYARC.MAJ"
    }, {
        "requirements": [],
        "department": "CMYART",
        "name": "BSA in CMYART",
        "year": ["2002"],
        "type": "BSA",
        "MajorFile": "2002:CMU:BSA:CMYART.MAJ"
    }, {
        "requirements": [],
        "department": "CMYDES",
        "name": "BSA in CMYDES",
        "type": "BSA",
        "year": ["2003", "2002"]
    }, {
        "requirements": [],
        "department": "CMYDRA",
        "name": "BSA in CMYDRA",
        "year": ["2002"],
        "type": "BSA",
        "MajorFile": "2002:CMU:BSA:CMYDRA.MAJ"
    }, {
        "requirements": [],
        "department": "CMYMUS",
        "name": "BSA in CMYMUS",
        "year": ["2002"],
        "type": "BSA",
        "MajorFile": "2002:CMU:BSA:CMYMUS.MAJ"
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Intro to Programming", "Concepts of Math", "Discrete Math", "Matrix or Linear Algebra", "Calc in 3D", "Differential Equations", "Princ/Real Analysis I", "Algebraic Struct", "Physics II/Sci Stud", "Math Electives", "Math/Stats/CS Electives", "Intro Course", "Architectural Drawing I", "Architectural Drawing II", "Survey of World Arch", "Arch History Lecture", "Arch History Lecture", "Gen_Ed_Focus", "Rep_Vis_Focus", "Tech_Focus", "Arch_Hist_Focus"],
        "department": "MTHARC",
        "name": "BSA in MTHARC",
        "type": "BSA",
        "year": ["2010", "2001"]
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Intro to Programming", "Concepts of Math", "Discrete Math", "Matrix or Linear Algebra", "Calc in 3D", "Differential Equations", "Princ/Real Analysis I", "Algebraic Struct", "Physics II/Sci Stud", "Math Electives", "Math/Stats/CS Electives", "Concept Studios", "Media Studios", "Advanced Media Studios", "Art History/Theory", "Sophomore Review", "Senior Review"],
        "department": "MTHART",
        "name": "BSA in MTHART",
        "type": "BSA",
        "year": ["2010", "2002"]
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Intro to Programming", "Concepts of Math", "Discrete Math", "Matrix or Linear Algebra", "Calc in 3D", "Differential Equations", "Princ/Real Analysis I", "Algebraic Struct", "Physics II/Sci Stud", "Math Electives", "Math/Stats/CS Electives", "Design Studio I", "Design Studio II", "Design Drawing I", "Design Drawing II", "Intro to Photo Design", "Photo Design II", "Human Exp in Design", "Design History I", "Crit Hist/Arts", "Design Electives"],
        "department": "MTHDES",
        "name": "BSA in MTHDES",
        "type": "BSA",
        "year": ["2010", "2003", "2002"]
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Intro to Programming", "Concepts of Math", "Discrete Math", "Matrix or Linear Algebra", "Calc in 3D", "Differential Equations", "Princ/Real Analysis I", "Algebraic Struct", "Physics II/Sci Stud", "Math Electives", "Math/Stats/CS Electives", "Foundations I", "Foundations II", "Conservatory Hour", "Stagecraft", "Design/PTM Units", "Directing I", "Directing II", "Prod. Symp. I", "Directing Colloq.", "Directing Units", "Dramaturgy I", "Dramaturgy II", "Prod. Symp. Spring", "Ghost Light Forum", "Dramaturgy Prod. I", "History of Drama", "Dramaturgy 3/4/5/6", "Dramaturgy Units"],
        "department": "MTHDRA",
        "name": "BSA in MTHDRA",
        "type": "BSA",
        "year": ["2010", "2002"]
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Intro to Programming", "Concepts of Math", "Discrete Math", "Matrix or Linear Algebra", "Calc in 3D", "Differential Equations", "Princ/Real Analysis I", "Algebraic Struct", "Physics II/Sci Stud", "Math Electives", "Math/Stats/CS Electives", "Harmony I", "Survey/West Mus Hist", "Rep & List I", "BXA Studio", "Major Ensemble", "Eurhythmics I", "Solfege I", "Performance Electives", "Music History I", "Music History II", "Rep & List III", "Rep & List IV", "Ind Study/Music History", "Hist_Cult", "Hist_Cult_Elect", "Intro to Music Tech", "Solfege I", "Sound Recording", "Electronic/Computer Music", "Ind Study/Music Tech", "Music Tech", "Music Tech Electives"],
        "department": "MTHMUS",
        "name": "BSA in MTHMUS",
        "type": "BSA",
        "year": ["2010", "2002"]
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Calculus in 3D", "Experimental Physics", "Physics II for Sci Student", "Physics Soph Colloq I", "Physics Soph Colloq II", "Physics III", "Electronics", "Physical Analysis", "Math Methods of Physics", "Quantum Physics", "Physics Upperclass Colloq I", "Physics Upperclass Colloq II", "Physical Mechanics", "Int Elec and Magnetism I", "Modern Physics Lab", "Thermal Physics I", "Physics Electives", "Intro Course", "Architectural Drawing I", "Architectural Drawing II", "Survey of World Arch", "Arch History Lecture", "Arch History Lecture", "Gen_Ed_Focus", "Rep_Vis_Focus", "Tech_Focus", "Arch_Hist_Focus"],
        "department": "PHYARC",
        "name": "BSA in PHYARC",
        "type": "BSA",
        "year": ["2010", "2002"]
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Calculus in 3D", "Experimental Physics", "Physics II for Sci Student", "Physics Soph Colloq I", "Physics Soph Colloq II", "Physics III", "Electronics", "Physical Analysis", "Math Methods of Physics", "Quantum Physics", "Physics Upperclass Colloq I", "Physics Upperclass Colloq II", "Physical Mechanics", "Int Elec and Magnetism I", "Modern Physics Lab", "Thermal Physics I", "Physics Electives", "Concept Studios", "Media Studios", "Advanced Media Studios", "Art History/Theory", "Sophomore Review", "Senior Review"],
        "department": "PHYART",
        "name": "BSA in PHYART",
        "type": "BSA",
        "year": ["2010", "2002"]
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Calculus in 3D", "Experimental Physics", "Physics II for Sci Student", "Physics Soph Colloq I", "Physics Soph Colloq II", "Physics III", "Electronics", "Physical Analysis", "Math Methods of Physics", "Quantum Physics", "Physics Upperclass Colloq I", "Physics Upperclass Colloq II", "Physical Mechanics", "Int Elec and Magnetism I", "Modern Physics Lab", "Thermal Physics I", "Physics Electives", "Design Studio I", "Design Studio II", "Design Drawing I", "Design Drawing II", "Intro to Photo Design", "Photo Design II", "Human Exp in Design", "Design History I", "Crit Hist/Arts", "Design Electives"],
        "department": "PHYDES",
        "name": "BSA in PHYDES",
        "type": "BSA",
        "year": ["2010", "2003", "2002"]
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Calculus in 3D", "Experimental Physics", "Physics II for Sci Student", "Physics Soph Colloq I", "Physics Soph Colloq II", "Physics III", "Electronics", "Physical Analysis", "Math Methods of Physics", "Quantum Physics", "Physics Upperclass Colloq I", "Physics Upperclass Colloq II", "Physical Mechanics", "Int Elec and Magnetism I", "Modern Physics Lab", "Thermal Physics I", "Physics Electives", "Foundations I", "Foundations II", "Conservatory Hour", "Stagecraft", "Design/PTM Units", "Directing I", "Directing II", "Prod. Symp. I", "Directing Colloq.", "Directing Units", "Dramaturgy I", "Dramaturgy II", "Prod. Symp. Spring", "Ghost Light Forum", "Dramaturgy Prod. I", "History of Drama", "Dramaturgy 3/4/5/6", "Dramaturgy Units"],
        "department": "PHYDRA",
        "name": "BSA in PHYDRA",
        "type": "BSA",
        "year": ["2010", "2002"]
    }, {
        "requirements": ["Modern Biology", "Intro to Modern Chem I", "Physics I for Sci Student", "Diff & Int Calc", "Int, DiffEq, and Approx", "BXA Freshman Research Sem", "BXA Capstone Project I", "BXA Capstone Project II", "Writing/Expression", "Cultural Analysis", "English, History, or Psych", "CCB or EPS", "Computing at CMU", "Calculus in 3D", "Experimental Physics", "Physics II for Sci Student", "Physics Soph Colloq I", "Physics Soph Colloq II", "Physics III", "Electronics", "Physical Analysis", "Math Methods of Physics", "Quantum Physics", "Physics Upperclass Colloq I", "Physics Upperclass Colloq II", "Physical Mechanics", "Int Elec and Magnetism I", "Modern Physics Lab", "Thermal Physics I", "Physics Electives", "Harmony I", "Survey/West Mus Hist", "Rep & List I", "BXA Studio", "Major Ensemble", "Eurhythmics I", "Solfege I", "Performance Electives", "Music History I", "Music History II", "Rep & List III", "Rep & List IV", "Ind Study/Music History", "Hist_Cult", "Hist_Cult_Elect", "Intro to Music Tech", "Solfege I", "Sound Recording", "Electronic/Computer Music", "Ind Study/Music Tech", "Music Tech", "Music Tech Electives"],
        "department": "PHYMUS",
        "name": "BSA in PHYMUS",
        "type": "BSA",
        "year": ["2010", "2002"]
    }, {
        "requirements": ["ETC Fundamentals", "Improvisational Acting", "Visual Story", "Building Virtual Worlds", "ETC Interdisciplinary Projec", "ETC Interdisciplinary Projec", "ETC Interdisciplinary Projec", "Electives"],
        "department": "ENTECH",
        "name": "MET in ENTECH",
        "year": ["2014"],
        "type": "MET",
        "MajorFile": "2014:CMU:MET:ENTECH.MAJ"
    }, {
        "requirements": ["Required Portal Course", "Collaborative or Supportive"],
        "department": "GAMEDESG",
        "name": "MINOR in GAMEDESG",
        "year": ["2014"],
        "type": "MINOR",
        "MajorFile": "2014:CMU:MINOR:GAMEDESG.MAJ"
    }, {
        "requirements": ["Dec Proc Am Pol Inst", "Comparative Politics", "Theories of Intl Rel", "IPS Electives", "Elective", "Economics Pre-Requisite"],
        "department": "INRELP",
        "name": "MINOR in INRELP",
        "year": ["2015"],
        "type": "MINOR",
        "MajorFile": "2015:DC:MINOR:INTRELP.MAJ"
    }, {
        "requirements": ["Internship Seminar", "Policy Forum", "Core Seminar", "Elective Seminar", "CMU-Pittsburgh Course", "Economics Pre-Requisite"],
        "department": "POLPUB",
        "name": "MINOR in POLPUB",
        "year": ["2015"],
        "type": "MINOR",
        "MajorFile": "2015:DC:MINOR:POLPUB.MAJ"
    }],
    "HSS": [{
        "requirements": ["Survey Course", "Hist Evidence & Int", "Theory & Pract In Anthr", "Thematic Cluster - 18 units", "Regional Cluster - 27 units", "Adv Studies in Anthr & His"],
        "department": "ANTHIS",
        "name": "A_MAJ in ANTHIS",
        "type": "A_MAJ",
        "year": ["2006", "2004", "2002", "2001"]
    }, {
        "requirements": ["Computing Prereq", "Concepts of Math", "Statistics", "Fundamental Structures I", "Fundamental Structures II", "AI or PSMT or IPDP", "Cog Psych or IPAI", "Res Mtds Cog Psych", "Experimental Design", "Plus One Cog Psych", "4 Courses - Track", "2 Additional Sci"],
        "department": "COGSCI",
        "name": "A_MAJ in COGSCI",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:COGSCI.MAJ"
    }, {
        "requirements": ["2nd 9 units-Survey of Forms", "4 CW Workshops", "1 Reading in Forms"],
        "department": "CW",
        "name": "A_MAJ in CW",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:CW.MAJ"
    }, {
        "requirements": ["1 semester Calculus", "Statistics", "Reason, Passion & Cognition", "Cognitive Psychology", "Policy Analysis I", "Dec Ana & Dec S S", "Behavioral Decision Making", "Statistical Methods", "Empir Resrch Methods", "27 units from 88-xxx", "18 units to equal 45"],
        "department": "DECSCI",
        "name": "A_MAJ in DECSCI",
        "type": "A_MAJ",
        "year": ["2011", "2010", "2008", "2002", "2001"]
    }, {
        "requirements": ["Differential/Integral Calc.", "Integ, Dif. Eqs, & Approx.", "Multivar. Analysis & Approx.", "Intro to Prob and Stats I", "Intro to Prob and Stats II", "Econometrics", "Writing Requirement", "Economics Colloquium", "Principles of Economics", "Int. Microeconomics", "Int. Macroeconomics", "Adv. Microecon. Theory", "Adv. Macroecon. Theory", "1st Econ. Elective", "2nd Econ. Elective", "3rd Econ. Elective", "4th Econ. Elective", "5th Econ. Elective", "Senior Project Requirement"],
        "department": "ECO",
        "name": "A_MAJ in ECO",
        "type": "A_MAJ",
        "year": ["2011", "2010", "2008", "2006", "2004", "2002", "2000"]
    }, {
        "requirements": [],
        "department": "ECOSTA",
        "name": "A_MAJ in ECOSTA",
        "type": "A_MAJ",
        "year": ["2011", "2010"]
    }, {
        "requirements": ["Optional Internshp", "9 units American Hist", "9 units P History/S History", "9 units Interntional History", "9 units PH/S Hist or IntlH", "9 units Ethics", "9 units Political Phil", "9 units Apl Phil/Apl Ethics", "9 units E or PP or AP/AE", "Track - 45 units"],
        "department": "EHPP",
        "name": "A_MAJ in EHPP",
        "year": ["2006"],
        "type": "A_MAJ",
        "MajorFile": "2006:HSS:A_MAJ:EHPP.MAJ"
    }, {
        "requirements": ["Interpretive Practices", "Research in Eng Studies", "Rhetoric Requirement", "76-3xx English-18u", "76-4xx English Sem-18u"],
        "department": "ENG",
        "name": "A_MAJ in ENG",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:ENG.MAJ"
    }, {
        "requirements": ["French Culture", "Francophone World", "French Social Cntxts", "Core in Modern Languages", "Senior Seminar", "List A complete 45 units", "List B complete 9 units"],
        "department": "FRANCO",
        "name": "A_MAJ in FRANCO",
        "year": ["2004"],
        "type": "A_MAJ",
        "MajorFile": "2004:HSS:A_MAJ:FRANCO.MAJ"
    }, {
        "requirements": ["French Culture", "Francophone Cultures", "Cont Spoken French", "Learning About Lang Learn", "Senior Seminar", "Core in History", "List A/B not to exceed 45 un"],
        "department": "FRENCH",
        "name": "A_MAJ in FRENCH",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:FRENCH.MAJ"
    }, {
        "requirements": ["Adv Gram, Styl & Wr", "Contmp Spoken German", "Intro German Studies", "Learning About Lang Learn", "Senior Seminar", "Core in History", "List A/B not to exceed 45 un"],
        "department": "GERMAN",
        "name": "A_MAJ in GERMAN",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:GERMAN.MAJ"
    }, {
        "requirements": ["Statistical Methods", "Empir Resrch Methods", "Policy Analysis I", "Policy Analysis II", "Dec Proc Am Pol Inst", "Theories of Intl Rel", "Comparative Politics", "Intl Pol Economy", "Intl Politics", "Intl Cultures", "18 units to equal 45", "88-xxx GP electives", "Stat Reas & Prac", "1 semester calculus"],
        "department": "GP",
        "name": "A_MAJ in GP",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:GP.MAJ"
    }, {
        "requirements": ["Intro to Global Studies", "Advanced Seminar", "Complete 18 units", "Complete 27 units", "Complete 27 units", "Global Histories", "Advanced level proficiency"],
        "department": "GS",
        "name": "A_MAJ in GS",
        "year": ["2009"],
        "type": "A_MAJ",
        "MajorFile": "2009:HSS:A_MAJ:GS.MAJ"
    }, {
        "requirements": ["Survey", "Survey", "Survey", "Required Intro Research Cour", "18 units before 1900", "18 units Research", "Senior Research Seminar"],
        "department": "HIS",
        "name": "A_MAJ in HIS",
        "year": ["2009"],
        "type": "A_MAJ",
        "MajorFile": "2009:HSS:A_MAJ:HIS.MAJ"
    }, {
        "requirements": ["Survey Course-2nd", "Hist Evidence & Int", "Intro Courses-18u", "Issues Public Agenda-36u", "Iss Pub Agenda/Intl-9u", "Hist & Pol Proj Courses", "One Calculus Crse.", "One Statistics Crse."],
        "department": "HISPOL",
        "name": "A_MAJ in HISPOL",
        "type": "A_MAJ",
        "year": ["2004", "2002", "2001"]
    }, {
        "requirements": ["Statistical Methods", "Empir Resrch Methods", "Policy Analysis I", "Dec Proc Am Pol Inst", "Theories of Intl Rel", "Comparative Politics", "Intl Political Economy", "Intl Politics-Grand Strategy", "Intl Cultures", "18 units to equal 45", "88-xxx IR&P; electives", "Intermediate II level", "Stat Reas & Prac", "1 semester calculus"],
        "department": "INTRELP",
        "name": "A_MAJ in INTRELP",
        "type": "A_MAJ",
        "year": ["2010", "2009"]
    }, {
        "requirements": ["Interm Japanese II", "Japanese Lang & Cult", "Adv Japanese I", "Adv Japanese II", "Learning About LL", "Senior Seminar", "History Core Course", "Electives - 36u"],
        "department": "JAPAN",
        "name": "A_MAJ in JAPAN",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:JAPAN.MAJ"
    }, {
        "requirements": ["Introductory Course", "Sounds", "Structure", "Meaning", "Same Language-18 units", "45/27 units one group", "Approved Thesis Proj."],
        "department": "LNGHSS",
        "name": "A_MAJ in LNGHSS",
        "year": ["2007"],
        "type": "A_MAJ",
        "MajorFile": "2007:HSS:A_MAJ:LNGHSS.MAJ"
    }, {
        "requirements": [],
        "department": "LOGCPTA",
        "name": "A_MAJ in LOGCPTA",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:LOGCPTA.MAJ"
    }, {
        "requirements": ["Calculus I", "Calculus II", "Statistics I", "Statistics II", "Principles of Econ.", "Intermediate Micro.", "Econometrics I", "Econometrics II", "Intermediate Macro.", "Additional Econ.", "Additional Econ.", "Additional Econ.", "Additional Econ.", "3 Additional IM"],
        "department": "MGLECO",
        "name": "A_MAJ in MGLECO",
        "year": ["2000"],
        "type": "A_MAJ",
        "MajorFile": "2000:HSS:A_MAJ:MGLECO.MAJ"
    }, {
        "requirements": ["9 units Introduction to Phil", "Area 1 - complete 9 units", "Area 2 - complete 9 units", "Area 3 - complete 9 units", "Area 4 - complete 9 units", "Area 5 - complete 18 units", "Area 6 - complete 27 units"],
        "department": "PHI",
        "name": "A_MAJ in PHI",
        "type": "A_MAJ",
        "year": ["2010", "2008"]
    }, {
        "requirements": ["1st Calculus", "2nd Calculus", "Statistics", "Policy Analysis I", "Policy Analysis II", "Policy Analysis Sr Proj", "Dec Ana & Dec Supp Syst", "Organizations", "Statistical Methods", "Empir Resrch Methods", "3 elec of 88-xxx", "2 elec from list"],
        "department": "POLMGMT",
        "name": "A_MAJ in POLMGMT",
        "type": "A_MAJ",
        "year": ["2011", "2010", "2008", "2002"]
    }, {
        "requirements": ["Calculus", "Statistics", "Decision Processes in A P I", "Elec Sys & Proc OR", "Comp Pol OR", "Policy Analysis I", "Policy Analysis II", "Policy Analysis III", "Statistical Methods", "Empir Resrch Mtds", "two from 88-xxx", "two additional electives"],
        "department": "POLSCI",
        "name": "A_MAJ in POLSCI",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:HSS:A_MAJ:POLSCI.MAJ"
    }, {
        "requirements": [],
        "department": "PSY",
        "name": "A_MAJ in PSY",
        "type": "A_MAJ",
        "year": ["2010", "2004", "2001"]
    }, {
        "requirements": ["Intro Prof & Tech Writing", "Style", "Argument", "9 units Rhetoric Course", "36 units Adv Wr/Rhet Courses"],
        "department": "PW",
        "name": "A_MAJ in PW",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:PW.MAJ"
    }, {
        "requirements": ["Survey Russian History", "Two History Courses", "Elementary Russian I", "Elementary Russian II", "Interm Russian I", "Interm Russian II", "Advanced Russian I", "Required Electives - 18u", "Required Ind Study"],
        "department": "RUSSTU",
        "name": "A_MAJ in RUSSTU",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:RUSSTU.MAJ"
    }, {
        "requirements": [],
        "department": "SCH",
        "name": "A_MAJ in SCH",
        "type": "A_MAJ",
        "year": ["2004", "2002"]
    }, {
        "requirements": [],
        "department": "SDM",
        "name": "A_MAJ in SDM",
        "type": "A_MAJ",
        "year": ["2009", "2008", "2006", "2000"]
    }, {
        "requirements": ["History Workshop", "Intro Social History", "New Tpcs Soc History", "Social Hist Res Sem", "Hist Civilization-9u", "History Elects-27u", "1st Calculus", "2nd Calc or Stats"],
        "department": "SH",
        "name": "A_MAJ in SH",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:SH.MAJ"
    }, {
        "requirements": ["Two Advanced Language", "Intro Lit & Culture", "Learning About Lang Learn", "Senior Seminar", "Core in History", "List A/B not to exceed 45 un"],
        "department": "SPANISH",
        "name": "A_MAJ in SPANISH",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:HSS:A_MAJ:SPANISH.MAJ"
    }, {
        "requirements": ["Calc. Course 1", "Multivar. Calc.", "Matrix Algebra", "Beginning", "Intermediate", "Advanced Elective", "Modern Regression", "Adv. Data Analysis", "Intro. to Prob. Theory", "Intro. to Stat. Inference", "Special Topics", "Elective"],
        "department": "STA",
        "name": "A_MAJ in STA",
        "type": "A_MAJ",
        "year": ["2010", "2004", "2001"]
    }, {
        "requirements": [],
        "department": "TW",
        "name": "A_MAJ in TW",
        "year": ["2008"],
        "type": "A_MAJ",
        "MajorFile": "2008:HSS:A_MAJ:TW.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Survey Course", "Hist Evidence & Int", "Theory & Pract In Anthr", "Thematic Cluster - 18 units", "Regional Cluster - 27 units", "Adv Studies in Anthr & His"],
        "department": "ANTHIS",
        "name": "BA in ANTHIS",
        "type": "BA",
        "year": ["2006", "2004", "2002", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Interm. Chinese II", "Advanced Chinese I", "Advanced Chinese II", "Chinese Lang & Cult", "Complete 9 units", "Senior Seminar", "Complete 9 units", "Complete 36 units"],
        "department": "CHINES",
        "name": "BA in CHINES",
        "type": "BA",
        "year": ["2006", "2004"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "9 units Survey of Forms", "2nd 9 units-Survey of Forms", "4 CW Workshops", "9 units Reading in Forms", "English Electives"],
        "department": "CW",
        "name": "BA in CW",
        "type": "BA",
        "year": ["2008", "2004", "1998"]
    }, {
        "requirements": ["Differential/Integral Calc.", "Multivar. Analysis & Approx.", "Writing Requirement", "Economics Colloquium Req.", "Principles of Economics", "Inter. Microeconomics", "Inter. Macroeconomics", "Evol. of Ec. Ideas & Analy.", "Statistical Methods", "Fund. Statistical Modeling", "Sampling, Survey, and Soc", "1st Econ. Elective", "2nd Econ. Elective", "3rd Econ. Elective", "4th Econ. Elective", "1st Spcl. Elective", "2nd Spcl. Elective", "3rd Spcl. Elective", "Senior Project Requirement", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ECO",
        "name": "BA in ECO",
        "type": "BA",
        "year": ["2011", "2010", "2008", "2006", "2004", "2000"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Economics", "Policy History-9 units", "US History-9 units", "Non-US History-9 units", "Hist Mthds & Approaches", "Ethics-9 units", "Political Phil-9 units", "Fnds of Social Sci-9 units", "Applied Philosophy-9 units", "History or Philosophy", "Electives-27 units)"],
        "department": "EHPP",
        "name": "BA in EHPP",
        "type": "BA",
        "year": ["2009", "2006", "2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "9 units Survey of Forms", "Interpretive Practices", "Research in Eng Studies", "Rhetoric Requirement", "76-3xx English-18u", "76-4xx English Sem-18u", "27 units Eng Elect"],
        "department": "ENG",
        "name": "BA in ENG",
        "type": "BA",
        "year": ["2008", "2004", "2000", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Lang Sequence-same language", "Dev of European Culture", "9 units-Pre-20th C Eur Hist", "9 units-European History", "Complete 36 units"],
        "department": "EURSTU",
        "name": "BA in EURSTU",
        "type": "BA",
        "year": ["2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "French Culture", "Francophone World", "French Social Cntxts", "9 units - core course", "Senior Seminar", "List A complete 45 units", "List B complete 9 units"],
        "department": "FRENCH",
        "name": "BA in FRENCH",
        "type": "BA",
        "year": ["2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Grmy, Astr, Switz 20th Ctry", "Ctmpry Grmy, Astr, Switz", "Intro to German Studies", "9 units - core course", "Senior Seminar", "List A complete 45 units", "List B complete 9 units"],
        "department": "GERMAN",
        "name": "BA in GERMAN",
        "type": "BA",
        "year": ["2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Intro to Global Studies", "Advanced Seminar", "Complete 18 units", "Complete 27 units", "Complete 27 units", "Global Histories", "Advanced level proficiency"],
        "department": "GS",
        "name": "BA in GS",
        "year": ["2009"],
        "type": "BA",
        "MajorFile": "2009:HSS:BA:GS.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Survey", "Survey", "Survey", "Required Intro Research Cour", "18 units before 1900", "18 units Research", "Senior Research Seminar"],
        "department": "HIS",
        "name": "BA in HIS",
        "year": ["2009"],
        "type": "BA",
        "MajorFile": "2009:HSS:BA:HIS.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Survey Course-2nd", "Hist Evidence & Int", "Intro Courses-18u", "Issues Public Agenda-36u", "Iss Pub Agenda/Intl-9u", "Hist & Pol Proj Courses"],
        "department": "HISPOL",
        "name": "BA in HISPOL",
        "type": "BA",
        "year": ["2006", "2004", "2002", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Intermediate Japanese II", "Intro Japanese Lang & Cult", "Advanced Japanese I", "Advanced Japanese II", "9 units - core course", "Senior Seminar", "Complete one course", "List A complete 45 units", "List B complete 9 units"],
        "department": "JAPAN",
        "name": "BA in JAPAN",
        "type": "BA",
        "year": ["2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Introductory Course", "Sounds", "Structure", "Meaning", "Same Language-18 units", "Area 1 Language Learning & L", "Area 2 Discourse, Society an", "Electives", "Approved Thesis Proj."],
        "department": "LNGHSS",
        "name": "BA in LNGHSS",
        "type": "BA",
        "year": ["2010", "2007"]
    }, {
        "requirements": [],
        "department": "LOGCPTA",
        "name": "BA in LOGCPTA",
        "year": ["2008"],
        "type": "BA",
        "MajorFile": "2008:HSS:BA:LOGCPTA.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Learn about Lang L", "Tutoring for Comm O", "Intro Sec Lang Acq", "ESL Practicum", "Senior Seminar", "Intro to Dis Analysis", "Grammar Std Written Eng", "Choose 9 units", "27 units minimum"],
        "department": "MLESL",
        "name": "BA in MLESL",
        "year": ["2004"],
        "type": "BA",
        "MajorFile": "2004:HSS:BA:MLESL.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "9 units Introduction to Phil", "Area 1 - complete 9 units", "Area 2 - complete 9 units", "Area 3 - complete 9 units", "Area 4 - complete 9 units", "Area 5 - complete 18 units", "Area 6 - complete 27 units"],
        "department": "PHI",
        "name": "BA in PHI",
        "type": "BA",
        "year": ["2010", "2008", "2006", "2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Stats Prereq", "Intro to Psychology", "3 Survey Courses", "2 Research Methods", "2 Advanced Courses", "Computing Required", "1 Additional Sci", "2 semesters Calculus", "Stats Reasoning", "2 Sci Courses", "Intro & 3 Sur-4 Sur"],
        "department": "PSY",
        "name": "BA in PSY",
        "type": "BA",
        "year": ["2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "9 units Survey of Forms", "Intro Prof & Tech Writing", "Style", "Argument", "9 units Rhetoric Course", "36 units Adv Wr/Rhet Courses", "English Electives"],
        "department": "PW",
        "name": "BA in PW",
        "type": "BA",
        "year": ["2008", "2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "9 units Hist Core crse", "18 units Hist Elective", "Intermediate Russian I", "Intermediate Russian II", "Advanced Russian I", "18 units Required Elective", "Russian Studies Thesis", "Elementary Russian I", "Elementary Russian II"],
        "department": "RUSSTU",
        "name": "BA in RUSSTU",
        "type": "BA",
        "year": ["2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Survey Courses", "Hist Evidence & Interpration", "Requirement 1", "Requirement 2", "Adv Studies in SCH"],
        "department": "SCH",
        "name": "BA in SCH",
        "type": "BA",
        "year": ["2006", "2004", "2002"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "SDM",
        "name": "BA in SDM",
        "type": "BA",
        "year": ["2009", "2006", "2000"]
    }, {
        "requirements": ["CCR1", "CCR2", "CCR3", "DCR1", "DCR2", "DCR3", "DCR4", "DCR5", "DCR6", "8th DCR", "Computing Skills Wrkshp", "Freshman Seminar-beganF97", "History Workshop", "Intro Social History", "New Tpcs Soc History", "Social Hist Res Sem", "Hist Civilization-9u", "History Elects-27u"],
        "department": "SH",
        "name": "BA in SH",
        "year": ["1998"],
        "type": "BA",
        "MajorFile": "1998:HSS:BA:SH.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Complete 18 units", "Intro Hisp Lit&Cult; St", "9 units - core course", "Senior Seminar", "List A complete 45 units", "List B complete 9 units"],
        "department": "SPANISH",
        "name": "BA in SPANISH",
        "type": "BA",
        "year": ["2004", "1998"]
    }, {
        "requirements": [],
        "department": "TW",
        "name": "BA in TW",
        "year": ["2008"],
        "type": "BA",
        "MajorFile": "2008:HSS:BA:TW.MAJ"
    }, {
        "requirements": [],
        "department": "TWCM",
        "name": "BA in TWCM",
        "type": "BA",
        "year": ["2008", "2004"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Survey Course", "Hist Evidence & Int", "Theory & Pract In Anthr", "Thematic Cluster - 18 units", "Regional Cluster - 27 units", "Adv Studies in Anthr & His"],
        "department": "ANTHIS",
        "name": "BS in ANTHIS",
        "type": "BS",
        "year": ["2006", "2004", "2002", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Stats Prereq", "Fund Data Struct & Algo", "Grt Theoretical Ideas in CS", "AI or PSMT or IPDP", "Cognitive Psychology", "Res Mtds Cog Psych", "Plus One Cog Psych", "4 Courses - Track", "1 Additional Sci", "2 semesters Calculus", "Concepts of Math", "Stats Reasoning", "2 Same Sci Courses"],
        "department": "COGSCI",
        "name": "BS in COGSCI",
        "type": "BS",
        "year": ["2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Reason, Passion & Cognition", "Cognitive Psychology", "Policy Analysis I", "Behavioral Decision Making", "Dec Ana & Dec Supp Sys", "Statistical Methods", "Empir Resrch Methods", "3 elec from 88-xxx", "2 elec from list", "1st Calculus"],
        "department": "DECSCI",
        "name": "BS in DECSCI",
        "type": "BS",
        "year": ["2011", "2010", "2008", "2004", "2002", "2001"]
    }, {
        "requirements": ["Differential/Integral Calc.", "Integ, Dif. Eqs, & Approx.", "Multivar. Analysis & Approx.", "Intro to Probability Theory", "Intro to Statistical Inferen", "Econometrics", "Writing Requirement", "Economics Colloquium", "Principles of Economics", "Int. Microeconomics", "Int. Macroeconomics", "Adv. Microecon. Theory", "Adv. Macroecon. Theory", "1st Econ. Elective", "2nd Econ. Elective", "3rd Econ. Elective", "4th Econ. Elective", "5th Econ. Elective", "Senior Project Requirement", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ECO",
        "name": "BS in ECO",
        "type": "BS",
        "year": ["2011", "2010", "2008", "2006", "2004", "2002", "2000"]
    }, {
        "requirements": ["Principles of Economics", "Inter. Microeconomics", "Inter. Macroeconomics", "Adv. Microecon. Theory", "Adv. Macroecon. Theory", "Intro to Probability Theory", "Intro to Statistical Inferen", "Econometrics", "Modern Regression", "Differential/Integral Calc.", "Integ, Dif. Eqs, & Approx.", "Concepts of Mathematics", "Discrete Mathematics", "Matrix Algebra", "Calculus in Three Dimensions", "Differential Equations", "Principles of Real Analysis", "Principles of Real Analysis", "Intro/Inter Programming", "Writing Requirement", "1st Econ. Elective", "2nd Econ. Elective", "3rd Econ. Elective", "1st Math Elective", "2nd Math Elective", "3rd Math Elective", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ECOMTH",
        "name": "BS in ECOMTH",
        "type": "BS",
        "year": ["2011", "2010", "2008"]
    }, {
        "requirements": ["Differential/Integral Calc.", "Integ, Dif. Eqs, & Approx.", "Multivar. Analysis & Approx.", "Matrix Algebra", "Writing for Economists", "Principles of Economics", "Int. Microeconomics", "Int. Macroeconomics", "Adv. Microecon. Theory", "Adv. Macroecon. Theory", "Econometrics", "1st Econ. Elective", "2nd Econ. Elective", "Intro. Data Analysis", "Intermediate Data Analysis", "Intro to Probability Theory", "Intro to Statistical Inferen", "Modern Regression", "Adv. Data Analysis", "1st Stat. Elective", "2nd Stat. Elective", "Stat. Elective", "or Econ. Elective", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ECOSTA",
        "name": "BS in ECOSTA",
        "type": "BS",
        "year": ["2011", "2010", "2004"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "BS requirements-18 units", "Economics", "Policy History-9 units", "US History-9 units", "Non-US History-9 units", "Hist Mthds & Approaches", "Ethics-9 units", "Political Phil-9 units", "Fnds of Social Sci-9 units", "Applied Philosophy-9 units", "History or Philosophy", "Electives-27 units)"],
        "department": "EHPP",
        "name": "BS in EHPP",
        "type": "BS",
        "year": ["2009", "2006", "2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Statistical Methods", "Empir Resrch Methods", "Policy Analysis I", "Policy Analysis II", "Dec Proc Am Pol Inst", "Theories of Intl Rel", "Comparative Politics", "Intl Pol Economy", "Intl Politics", "Intl Cultures", "18 units to equal 45", "88-xxx GP electives", "Stat Reas & Prac", "1 semester calculus"],
        "department": "GP",
        "name": "BS in GP",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:HSS:BS:GP.MAJ"
    }, {
        "requirements": [],
        "department": "HIS",
        "name": "BS in HIS",
        "year": ["2009"],
        "type": "BS",
        "MajorFile": "2009:HSS:BS:HIS.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Survey Course-2nd", "Hist Evidence & Int", "Intro Courses-18u", "Issues Public Agenda-36u", "Iss Pub Agenda/Intl-9u", "Hist & Pol Proj Courses"],
        "department": "HISPOL",
        "name": "BS in HISPOL",
        "type": "BS",
        "year": ["2006", "2004", "2002", "1998"]
    }, {
        "requirements": ["CCR1", "CCR2", "CCR3", "DCR1", "DCR2", "DCR3", "DCR4", "DCR5", "DCR6", "8th DCR", "Computing Skills Wrkshp", "Freshman Seminar-beganF97", "Fn Sys Dev I & AD&D;", "Fn Sys Dev II or FIS", "Information Sys Appl", "Dec Anal & Supp Syst", "Empir Resrc Mtds I", "Empir Resrc Mtds II", "Policy Analysis I", "Organizations", "Mgmt DM & Tech-18u", "Year of Calculus", "Statistics"],
        "department": "IDS",
        "name": "BS in IDS",
        "year": ["1998"],
        "type": "BS",
        "MajorFile": "1998:HSS:BS:IDS.MAJ"
    }, {
        "requirements": ["Calculus sequence (2)", "Statistical Reasoning", "Computer Science", "The Info. Systems Milieux", "Appl. Design & Development", "Fund Sys Dev or DBase Sys", "Software Development Proj.", "Innovation in Info. Systems", "IS Elective", "Professional Communications", "Quant. Analys. & Resrch. Mtd", "Organizations, Policy, & S.S", "Content Area (27 units)", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "INFOSYS",
        "name": "BS in INFOSYS",
        "type": "BS",
        "year": ["2010", "2006", "2004", "2002", "2000"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Statistical Methods", "Empir Resrch Methods", "Policy Analysis I", "Dec Proc Am Pol Inst", "Theories of Intl Rel", "Comparative Politics", "Intl Political Economy", "Intl Politics-Grand Strategy", "Intl Cultures", "18 units to equal 45", "88-xxx IR&P; electives", "Intermediate II level", "Stat Reas & Prac", "1 semester calculus"],
        "department": "INTRELP",
        "name": "BS in INTRELP",
        "type": "BS",
        "year": ["2010", "2009"]
    }, {
        "requirements": ["Calculus sequence (2)", "Statistics", "Data Structures", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "Organizations", "Dec Sci & Rational Choice", "Research Methods", "Professional Communication", "27 units Content Area", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ISBEC",
        "name": "BS in ISBEC",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:ISBEC.MAJ"
    }, {
        "requirements": ["Calculus sequence (2)", "Statistics", "Data Structures", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "Organizations", "Dec Sci & Rational Choice", "Research Methods", "Professional Communication", "27 units Content Area", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ISCOG",
        "name": "BS in ISCOG",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:ISCOG.MAJ"
    }, {
        "requirements": ["Calculus sequence (2)", "Statistics", "Data Structures", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "Organizations", "Dec Sci & Rational Choice", "Research Methods", "Professional Communication", "27 units Content Area", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ISCOM",
        "name": "BS in ISCOM",
        "type": "BS",
        "year": ["2006", "2004", "2002"]
    }, {
        "requirements": ["Calculus sequence (2)", "Statistics", "Data Structures", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "Organizations", "Dec Sci & Rational Choice", "Research Methods", "Professional Communication", "27 units Content Area", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ISDEC",
        "name": "BS in ISDEC",
        "type": "BS",
        "year": ["2006", "2002"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Advanced Programming", "Fnd System Development", "Apl Design & Development", "Software Development Project", "Info System Applications", "Organizations", "Dec Sci & Computability", "Research Methods", "4 Courses/1 Area"],
        "department": "ISDES",
        "name": "BS in ISDES",
        "year": ["2004"],
        "type": "BS",
        "MajorFile": "2004:HSS:BS:ISDEC.MAJ"
    }, {
        "requirements": ["Calculus sequence (2)", "Statistics", "Data Structures", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "Organizations", "Dec Sci & Rational Choice", "Research Methods", "Professional Communication", "27 units Content Area", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ISGSM",
        "name": "BS in ISGSM",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:ISGSM.MAJ"
    }, {
        "requirements": ["Calculus sequence (2)", "Statistics", "Data Structures", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "Organizations", "Dec Sci & Rational Choice", "Research Methods", "Professional Communication", "27 units Content Area", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ISORG",
        "name": "BS in ISORG",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:ISORG.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Advanced Programming", "Fnd System Development", "Apl Design & Development", "Software Development Project", "Info System Applications", "Organizations", "Dec Sci & Computability", "Research Methods", "4 Courses/1 Area"],
        "department": "ISPOL",
        "name": "BS in ISPOL",
        "type": "BS",
        "year": ["2004", "2002"]
    }, {
        "requirements": ["Calculus sequence (2)", "Statistics", "Data Structures", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "Organizations", "Dec Sci & Rational Choice", "Research Methods", "Professional Communication", "27 units Content Area", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ISSTA",
        "name": "BS in ISSTA",
        "type": "BS",
        "year": ["2006", "2004", "2002"]
    }, {
        "requirements": ["Calculus sequence (2)", "Statistics", "Data Structures", "Info Systems Milieux", "Fnd of Systems Development", "Appl Design & Development", "Software Development Project", "Info Systems Applications", "Organizations", "Dec Sci & Rational Choice", "Research Methods", "Professional Communication", "27 units Content Area", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "ISTEC",
        "name": "BS in ISTEC",
        "year": ["2006"],
        "type": "BS",
        "MajorFile": "2006:HSS:BS:ISTEC.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Arguments & Math Inquiry", "Minds, Mach, Knowledge", "Logic & Computation", "Comp & Incompleteness", "Thesis Seminar", "Fund Data Struct & Alg", "Princ of Programming", "Logic & Comp Elct-36u", "Concepts of Math", "Statistics", "Int / Adv Programming"],
        "department": "LOGCPTA",
        "name": "BS in LOGCPTA",
        "type": "BS",
        "year": ["2004", "2002"]
    }, {
        "requirements": ["CCR1", "CCR2", "CCR3", "DCR1", "DCR2", "DCR3", "DCR4", "DCR5", "DCR6", "8th DCR", "Computing Skills Wrkshp", "Freshman Seminar-beganF97", "Interm Microecon", "Interm Macroecon", "Econometrics I", "Econometrics II", "1st Additional Econ", "2nd Additional Econ", "3rd Additional Econ", "4th Additional Econ", "3 IM Courses", "Calculus 1", "2nd Calculus", "Statistics", "Principles of Economics"],
        "department": "MGLECO",
        "name": "BS in MGLECO",
        "year": ["2000"],
        "type": "BS",
        "MajorFile": "2000:HSS:BS:MGLECO.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Policy Analysis I", "Policy Analysis II", "Policy Analysis Sr Proj", "Dec Ana & Dec Supp Syst", "Organizations", "Statistical Methods", "Empir Resrch Methods", "3 elec of 88-xxx", "2 elec from list", "1st Calculus", "2nd Calculus"],
        "department": "POLMGMT",
        "name": "BS in POLMGMT",
        "type": "BS",
        "year": ["2011", "2010", "2008", "2004", "2002", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Calculus", "Decision Processes in A P I", "Elec Sys & Proc OR", "Comp Pol OR", "Policy Analysis I", "Policy Analysis II", "Policy Analysis III", "Statistical Methods", "Empir Resrch Mtds", "two from 88-xxx", "two additional electives"],
        "department": "POLSCI",
        "name": "BS in POLSCI",
        "type": "BS",
        "year": ["2004", "2002", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Stats Prereq", "Intro to Psychology", "3 Survey Courses", "2 Research Methods", "2 Advanced Courses", "Computing Required", "3 Additional Sci", "2 semesters Calculus", "Stats Reasoning", "4 Sci Courses", "Intro & 3 Sur-4 Sur"],
        "department": "PSY",
        "name": "BS in PSY",
        "type": "BS",
        "year": ["2004", "1998"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Experimental Des", "Phys for Sci St I", "Org Chemistry I", "Org Chemistry II", "Modern Biology", "Biochemistry", "Cell Biology", "Genetics", "Intro to Psychology", "3 Survey Courses", "Chemistry Lab I", "Chemistry Lab II", "Exp Genetics & Mol Bio", "1 Research Methods", "Additional Laboratory", "2 Psych Adv Elect", "1 Bio General Elect", "2 Bio Adv Elect", "1 Adv BioSci/Psy Elect", "2 semesters Calculus", "Stats Reasoning", "Nat Sci-Mod Chem I&II;", "Intro Programming"],
        "department": "PSYBSC",
        "name": "BS in PSYBSC",
        "type": "BS",
        "year": ["2004", "2000"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "Survey Courses", "Hist Evidence & Interpration", "Requirement 1", "Requirement 2", "Adv studies in Social and Cu"],
        "department": "SCH",
        "name": "BS in SCH",
        "type": "BS",
        "year": ["2006", "2004", "2002"]
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "SDM",
        "name": "BS in SDM",
        "type": "BS",
        "year": ["2009", "2006", "2000"]
    }, {
        "requirements": ["CCR1", "CCR2", "CCR3", "DCR1", "DCR2", "DCR3", "DCR4", "DCR5", "DCR6", "8th DCR", "Computing Skills Wrkshp", "Freshman Seminar-beganF97", "Empir Resrc Mtds I", "Empir Resrc Mtds II", "Policy Analysis I", "Dec Ana & Dec S S", "Organizations", "Theories & Applic-45u", "Year of Calculus", "Statistics"],
        "department": "SDS",
        "name": "BS in SDS",
        "year": ["1998"],
        "type": "BS",
        "MajorFile": "1998:HSS:BS:SDS.MAJ"
    }, {
        "requirements": ["CCR1", "CCR2", "CCR3", "DCR1", "DCR2", "DCR3", "DCR4", "DCR5", "DCR6", "8th DCR", "Computing Skills Wrkshp", "Freshman Seminar-beganF97", "History Workshop", "Intro Social History", "New Tpcs Soc History", "Social Hist Res Sem", "Hist Civilization-9u", "History Elects-27u", "1st Calculus", "2nd Calc or Stats"],
        "department": "SH",
        "name": "BS in SH",
        "year": ["1998"],
        "type": "BS",
        "MajorFile": "1998:HSS:BS:SH.MAJ"
    }, {
        "requirements": ["Calc. Course 1", "Multivar. Calc.", "Matrix Algebra", "Beginning", "Intermediate", "Advanced Elective", "Modern Regression", "Adv. Data Analysis", "Intro. to Prob. Theory", "Intro. to Stat. Inference", "Special Topics", "Elective", "Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar"],
        "department": "STA",
        "name": "BS in STA",
        "type": "BS",
        "year": ["2010", "2004", "2001"]
    }, {
        "requirements": [],
        "department": "STAIS",
        "name": "BS in STAIS",
        "year": ["1998"],
        "type": "BS",
        "MajorFile": "1998:HSS:BS:STAIS.MAJ"
    }, {
        "requirements": ["CCR1", "CCR2", "CCR3", "DCR1", "DCR2", "DCR3", "DCR4", "DCR5", "DCR6", "8th DCR", "Computing Skills Wrkshp", "Freshman Seminar-beganF97", "Survey of Forms", "Interpretive Practsices", "Intro Prof & Tech Writing", "Adv Prof & Tech Writing", "Adv Writ, Rhet Crs-36u", "Visual Design Course", "One Statistics Course", "One Calculus Course", "One Biology Course", "One Chemistry Course", "One Physics Course", "One Comp Sci Course", "2nd Calc or Stats Course", "8th Course - S&T;", "9th Course - S&T;", "10th Course - S&T;", "11th Course - S&T;"],
        "department": "TW",
        "name": "BS in TW",
        "year": ["1998"],
        "type": "BS",
        "MajorFile": "1998:HSS:BS:TW.MAJ"
    }, {
        "requirements": ["Cat1", "Cat1", "Cat2", "Cat2", "Cat3", "Cat3", "Cat3", "Cat4", "Cat4", "Cat5", "Complete 18 more units", "University Req.", "DC H&SS; Freshman Seminar", "9 units Survey of Forms", "Interpretive Practices", "Intro Prof & Tech Writing", "Adv P&Tech; Writing or Style", "Document Design", "On-Line Info Design", "27 units Theory/Spec", "27 units Tech Commun", "Calculus", "Statistics", "Computer Science"],
        "department": "TWCM",
        "name": "BS in TWCM",
        "type": "BS",
        "year": ["2004", "2000"]
    }, {
        "requirements": ["Survey of Forms", "Two Fiction or Poetry Worksh", "One Reading in Forms Course", "Elective"],
        "department": "CW",
        "name": "MINOR in CW",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:CW.MAJ"
    }, {
        "requirements": ["Reason, Passion & Cognition", "Policy Analysis I", "Dec Ana & Dec S S", "Behavioral Decision Making", "18 units to equal 18"],
        "department": "DECSCI",
        "name": "MINOR in DECSCI",
        "type": "MINOR",
        "year": ["2008", "2002", "2001"]
    }, {
        "requirements": ["Differential/Integral Calc.", "Multivariate Analysis", "Principles of Economics", "Inter. Microeconomics", "Inter. Macroeconomics", "Statistical Reasoning", "Statistical Methods", "Fund. of Stat. Modeling", "Intro. to Prob. Theory", "Statistical Methods", "Fund. of Stat. Modeling", "1st Econ. Elective", "2nd Econ. Elective", "3rd Econ. Elective"],
        "department": "ECO",
        "name": "MINOR in ECO",
        "type": "MINOR",
        "year": ["2011", "2010", "2008", "2006"]
    }, {
        "requirements": ["Complete 27 units", "Complete 18 units"],
        "department": "ETHICS",
        "name": "MINOR in ETHICS",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:ETHICS.MAJ"
    }, {
        "requirements": [],
        "department": "FRANCO",
        "name": "MINOR in FRANCO",
        "year": ["2004"],
        "type": "MINOR",
        "MajorFile": "2004:HSS_MINOR:FRANCO.MAJ"
    }, {
        "requirements": ["Dec Proc Am Pol Inst", "Theories of Intl Rel", "Comparative Politics", "Intl Pol Economy", "Intl Politics", "Intl Cultures"],
        "department": "GP",
        "name": "MINOR in GP",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:GP.MAJ"
    }, {
        "requirements": ["Contemp Themes in GS", "Communications-18u", "HHC & Intl Mgmt-27u"],
        "department": "GSM",
        "name": "MINOR in GSM",
        "type": "MINOR",
        "year": ["2010", "2008"]
    }, {
        "requirements": ["Prerequisite", "Introductory Courses", "Advanced Courses"],
        "department": "HIS",
        "name": "MINOR in HIS",
        "type": "MINOR",
        "year": ["2002", "2001"]
    }, {
        "requirements": ["Core courses", "Electives"],
        "department": "INENED",
        "name": "MINOR in INENED",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:INENED.MAJ"
    }, {
        "requirements": ["Am Foreign Policy", "Theories of Int Rel", "Comp Politics or For Policy", "Min. 200 level Mod Lang", "27 units One Region"],
        "department": "INTREL",
        "name": "MINOR in INTREL",
        "year": ["2006"],
        "type": "MINOR",
        "MajorFile": "2006:HSS:MINOR:INTREL.MAJ"
    }, {
        "requirements": ["Dec Proc Am Pol Inst", "Theories of Intl Rel", "Comparative Politics", "Intl Pol Economy", "Intl Politics", "Intl Cultures"],
        "department": "INTRELP",
        "name": "MINOR in INTRELP",
        "year": ["2009"],
        "type": "MINOR",
        "MajorFile": "2009:HSS:MINOR:INTRELP.MAJ"
    }, {
        "requirements": ["27 units Core Crses", "18 units min 300 level", "9 units"],
        "department": "LNGHSS",
        "name": "MINOR in LNGHSS",
        "year": ["2006"],
        "type": "MINOR",
        "MajorFile": "2006:HSS:MINOR:LNGHSS.MAJ"
    }, {
        "requirements": ["Logic", "Minds, Mach, Knowledge", "Computation", "Philosophy - complete 18 uni", "Logic & Comp Tools - complet"],
        "department": "LOGCPTA",
        "name": "MINOR in LOGCPTA",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:LOGCPTA.MAJ"
    }, {
        "requirements": ["Phil of Logic/Math/Science -", "Area 5 - 18 units", "Area 6 - 18 units"],
        "department": "PHI",
        "name": "MINOR in PHI",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:PHI.MAJ"
    }, {
        "requirements": ["Policy Analysis I", "Policy Analysis II", "Dec Anal & Dec Supp Syst", "Organizations", "one from 88-xxx", "one additional elective"],
        "department": "POLMGMT",
        "name": "MINOR in POLMGMT",
        "type": "MINOR",
        "year": ["2011", "2010", "2008", "2002"]
    }, {
        "requirements": ["Decision Processes in A P I", "Elec Sys & Proc OR", "Comp Pol OR", "two from 88-xxx", "one additional elective"],
        "department": "POLSCI",
        "name": "MINOR in POLSCI",
        "year": ["2002"],
        "type": "MINOR",
        "MajorFile": "2002:HSS:MINOR:POLSCI.MAJ"
    }, {
        "requirements": ["Introductory Courses - Intro", "2 Survey Courses", "Statistics", "2 Research Methods", "2 Advanced Courses"],
        "department": "PSY",
        "name": "MINOR in PSY",
        "year": ["2001"],
        "type": "MINOR",
        "MajorFile": "2001:HSS:MINOR:PSY.MAJ"
    }, {
        "requirements": ["Interpretation & Argument", "Writing for the Professions", "Two 300 or 400 level Writing", "One Rhetoric/Language Studie", "Elective"],
        "department": "PW",
        "name": "MINOR in PW",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:PW.MAJ"
    }, {
        "requirements": [],
        "department": "SDM",
        "name": "MINOR in SDM",
        "type": "MINOR",
        "year": ["2011", "2007", "2006", "2000"]
    }, {
        "requirements": ["Calc. Course 1", "Multivar. Calc.", "Matrix Algebra", "Beginning", "Intermediate", "Modern Regression", "Adv. Data Analysis", "Intro. to Prob. Theory", "Intro. to Stat. Inference"],
        "department": "STA",
        "name": "MINOR in STA",
        "type": "MINOR",
        "year": ["2010", "2004", "2001"]
    }, {
        "requirements": ["Interpretation & Argument", "Introduction to Professional", "Two 300 or 400 level Writing", "One Rhetoric/Language Studie", "Elective"],
        "department": "TW",
        "name": "MINOR in TW",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:HSS:MINOR:TW.MAJ"
    }],
    "CIT": [{
        "requirements": ["Intro to EPP", "EPP Sophomore Seminar", "Principles of Economics", "Statistics", "Decision Science", "Writing and Communication", "Applied Methods for Technolo", "EPP Project", "Technology Policy Electives"],
        "department": "EPP",
        "name": "A_MAJ in EPP",
        "year": ["2013"],
        "type": "A_MAJ",
        "MajorFile": "2013:CIT:A_MAJ:EPP.MAJ"
    }, {
        "requirements": ["Intro to EPP", "EPP Sophomore Seminar", "Principles of Economics", "Statistics", "Decision Science", "Writing and Communication", "Applied Methods for Technolo", "EPP Project", "Technology Policy Electives"],
        "department": "STPP",
        "name": "A_MAJ in STPP",
        "year": ["2014"],
        "type": "A_MAJ",
        "MajorFile": "2014:CIT:A_MAJ:STPP.MAJ"
    }, {
        "requirements": ["Computing at Carnegie Mellon", "Intro to Chem Engineering", "Intro Engineering Elect", "Freshman Math I", "Freshman Math II", "Modern Chemistry I", "Interpretation & Argument", "First Year General Eduation", "Innovation & Intrntionlztion", "People, Places & Cultures", "Social Anal. & Dec. Making", "Writing & Expression", "General Education Electives", "Experiential Learning I", "Experiential Learning II", "Experiential Learning III", "Organic Chem I", "Phys Prin Anlyt Chem", "Adv Phys Chemistry", "Lab I", "Programming", "Calculus in 3D", "Physics I", "Physics II", "Biochemistry", "Thermodynamics", "ChemE Sophomore Seminar", "ChemE Junior Seminar", "Fluid Mechanics", "Math Methods of ChemE", "Heat and Mass Transfer", "Chem Eng Thermodynamics", "Unit Oper Chem Eng", "Transport Proc Lab", "Chem Reaction Engineering", "Chem Proc Systems Design", "Unit Operations Lab", "Opti Modeling & Algorithms", "Chemical Product Design", "Chem Engr Proc Control", "Electives"],
        "department": "CHE",
        "name": "BS in CHE",
        "type": "BS",
        "year": ["2018", "2017", "2013", "2012", "2011", "2010", "2009", "2008", "2003", "2002", "2000", "1998"]
    }, {
        "requirements": ["Diff/Integral Calculus", "Diff Eq and Calc of Approx", "Diff Equations", "Prob Stat", "Calculus in 3 Dimensions", "Physics I", "Physics II", "Chemistry 1", "Chemistry Lab", "Computing at Carnegie Mellon", "Programming", "Intro to Civ and Env Eng", "Intro to Engineering", "Statics", "Intro to Env Eng.", "Env Eng Lab", "Intro Comp App in CE", "CEE Project", "Solid Mechanics", "Solid Mechanics Lab", "Soil Mechanics", "Soil Mechanics Lab", "Fluid Mechanics", "Fluid Mechanics Lab", "CEE Design", "Project Mgmt for Const", "Engineering Econ", "Materials", "Materials Lab", "Interpretation and Argument", "First Year General Education", "Innovation and International", "People Places and Cultures", "Social Analysis and Decision", "Writing Expression", "General Education Electives", "Experiential Learning I", "Experiential Learning II", "Experiential Learning III", "CIV Elective", "Basic Science Elective", "Free Electives"],
        "department": "CIV",
        "name": "BS in CIV",
        "type": "BS",
        "year": ["2012", "2006", "2001", "2000"]
    }, {
        "requirements": ["Computing@Carnegie Mellon", "Interpretation & Argument", "First-Year General Education", "Innovation & Intrntionlztion", "People, Places & Cultures", "Social Anal. & Dec. Making", "Writing & Expression", "General Education Electives", "Experiential Learning I", "Experiential Learning II", "Experiential Learning III", "Freshmen Math I", "Freshmen Math II", "Physics I", "Physics II", "Math\\Sci Electives", "Prob & Statistics", "Intro Engineering Elect", "ECE Core Corequisites", "Introductory Programming", "Intermediate C Programming", "Intro_to_ECE", "ECE Core", "ECE Sophomore Seminar", "ECE Area 1", "ECE Area 2", "Capstone Design Elective", "Free Electives"],
        "department": "ECE",
        "name": "BS in ECE",
        "type": "BS",
        "year": ["2013", "2012", "2011", "2008", "2004", "2001", "1999"]
    }, {
        "requirements": ["Computing@Carnegie Mellon", "Writing/Expression", "Humanistic Studies", "Cognition and Institutions", "Depth Seq in H&SS;/FA", "Non Tech Electives", "Freshmen Math I", "Freshmen Math II", "Physics I", "Physics II", "Math\\Sci Electives", "Prob & Statistics", "Intro Engineering Elect", "ECE Core Corequisites", "Introductory Programming", "Intermediate C Programming", "Intro_to_ECE", "ECE Core", "ECE Sophomore Seminar", "ECE Breadth", "ECE Coverage", "ECE Depth", "Capstone Design Elective", "Free Electives", "ECE Graduate Coursework", "Restricted Electives", "Less Restricted Elective"],
        "department": "ECE-IMB",
        "name": "BS in ECE-IMB",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:CIT:BS:ECE-IMB.MAJ"
    }, {
        "requirements": ["Interp and Argument", "Writing and Expression", "Diff/Integral Calculus", "Fund. of M.E.", "Physics I", "Computing @ Carnegie Mellon", "FY General Education Course", "Diff Eq and Calc of Approx", "Physics II", "Intro. Engineering Elective", "Innovation and International", "Modern Chemistry I", "Chemistry Lab", "Calculus in 3D", "Thermodynamics I", "Statics", "Programming", "Differential Equations", "Fluid Mechanics", "Stress Analysis", "Machine Shop Pract", "Intro to CAD", "Seminar I", "Design I", "Heat Transfer", "Dynamics", "Eng Stats and Qual. Control", "Numerical Methods", "Thermal - Fluids Exp.", "Dyn. Systems & Control", "Design II", "Mechanical Systems Exp.", "MechE Technical Elective", "People Places and Cultures", "Soc Analysis and Dec Making", "Gen Ed Electives", "Experiential Learning I", "Experiential Learning II", "Experiential Learning III", "Elective 1", "Elective 2", "Elective 3", "Elective 4", "Free Electives"],
        "department": "MEG",
        "name": "BS in MEG",
        "type": "BS",
        "year": ["2017", "2016", "2014", "2012", "2011", "2007", "2006", "2005", "2001"]
    }, {
        "requirements": [],
        "department": "MEGAGP",
        "name": "BS in MEGAGP",
        "type": "BS",
        "year": ["2013", "2011"]
    }, {
        "requirements": ["Materials in Engineering", "Intro Eng Elective", "Chemistry", "Intro to Exp. Chem.", "Engineering Physics I", "Engineering Physics II", "Quantum Phy/Org Chem/Mod Bio", "Math & Basic Sciences", "Diff/Integral Calculus", "Diff Eq and Calc of Approx", "Calculus in 3-D", "Differential Equations", "Programming", "Computing at Carnegie Mellon", "Eng. Statistics & Q.Control", "Interpretation & Argument", "First Year General Eduation", "Innovation & Intrntionlztion", "People, Places & Cultures", "Social Anal. & Dec. Making", "Writing & Expression", "General Education Electives", "Experiential Learning I", "Experiential Learning II", "Experiential Learning III", "Perfect Crystals", "Intro to Materials Character", "Defects in Materials", "Materials Engineering Essent", "Thermodynamics of Materials", "Transport & Materials", "Phase Relations and Diagrams", "Microstructure/Properties I", "Selection & Performance of M", "MSE Capstone Course - 1", "MSE Restricted Electives", "Free Electives"],
        "department": "MSE",
        "name": "BS in MSE",
        "type": "BS",
        "year": ["2018", "2017", "2006", "2001", "2000"]
    }, {
        "requirements": ["Beginning Piano", "Introduction to Music Tech", "Theory", "History", "Repertoire and Listening", "Sound Recording", "Music Tech Electives", "Physics of Musical Sound", "Electroacoustics", "Technical courses"],
        "department": "AUDENGR",
        "name": "MINOR in AUDENGR",
        "year": ["2009"],
        "type": "MINOR",
        "MajorFile": "2009:CIT:MINOR:ECE:AUDENGR.MAJ"
    }, {
        "requirements": ["Environmental Science", "Environmental Engineering", "Environmental Policy"],
        "department": "ENVENG",
        "name": "MINOR in ENVENG",
        "year": ["2001"],
        "type": "MINOR",
        "MajorFile": "2001:CIT:MINOR:ENVENG.MAJ"
    }, {
        "requirements": ["Prerequisite Economics", "Prerequisite Statistics", "Intro to EPP", "Decision Science Elective", "EPP Project", "Technology Policy Electives"],
        "department": "TEPP",
        "name": "MINOR in TEPP",
        "year": ["2014"],
        "type": "MINOR",
        "MajorFile": "2014:CIT:MINOR:TEPP.MAJ"
    }, {
        "requirements": ["CEE Graduate Courses", "Other Graduate Courses", "Project/Independent Study", "Teaching Requirements", "CEE Seminar 1", "CEE Seminar 2", "CEE Seminar 3", "Solid Mechanics", "Soil Mechanics", "Fluid Mechanics", "Project Management", "Engineering Economics"],
        "department": "CEE",
        "name": "MS in CEE",
        "type": "MS",
        "year": ["2013", "2000"]
    }, {
        "requirements": [],
        "department": "ECE",
        "name": "MS in ECE",
        "type": "MS",
        "year": ["2014", "2012", "2008", "2006", "2002", "2001", "1999"]
    }, {
        "requirements": ["SE Core", "SE Electives"],
        "department": "ECE-SEDM",
        "name": "MS in ECE-SEDM",
        "year": ["2013"],
        "type": "MS",
        "MajorFile": "2013:CIT:MS:ECE-SEDM.MAJ"
    }, {
        "requirements": ["Group A", "Group B", "Group C", "Group D", "Management Requirement", "Database Requirement", "List A Complete 12 units", "List B Complete 36 units", "Free Electives", "INI Seminar", "Project or Course Option"],
        "department": "IN",
        "name": "MS in IN",
        "year": ["2005"],
        "type": "MS",
        "MajorFile": "2005:CIT:MS:IN.MAJ"
    }, {
        "requirements": ["Management Requirement", "Networking & System Requirem", "Security Requirement", "Restricted Electives", "Free Electives", "INI Seminar - 3 units", "INI Project - 36 units", "Course Option"],
        "department": "ISTM",
        "name": "MS in ISTM",
        "year": ["2005"],
        "type": "MS",
        "MajorFile": "2005:CIT:MS:ISTM.MAJ"
    }, {
        "requirements": ["MSIT Core", "MSIT Elective Courses", "MSIT Seminars and Practicum", "MSIT Internship"],
        "department": "IT",
        "name": "MS in IT",
        "year": ["2012"],
        "type": "MS",
        "MajorFile": "2012:CIT:MS:ICT.MAJ"
    }, {
        "requirements": ["MechE Graduate Coursework", "Math Requirement", "Technical Electives"],
        "department": "MECHE",
        "name": "MS in MECHE",
        "year": ["2014"],
        "type": "MS",
        "MajorFile": "2014:CIT:MS:MECHE.MAJ"
    }, {
        "requirements": ["SE Core", "SE Track", "SE Practicum", "SE Electives"],
        "department": "SE-FT",
        "name": "MS in SE-FT",
        "year": ["2013"],
        "type": "MS",
        "MajorFile": "2013:CIT:MS:ECE-SE16MO.MAJ"
    }, {
        "requirements": ["SE Core", "SE Track", "SE Practicum", "SE Electives"],
        "department": "SE-PT",
        "name": "MS in SE-PT",
        "year": ["2013"],
        "type": "MS",
        "MajorFile": "2013:CIT:MS:ECE-SE-PT.MAJ"
    }, {
        "requirements": [],
        "department": "ECE",
        "name": "PHD in ECE",
        "type": "PHD",
        "year": ["2006", "2002"]
    }],
    "CFA": [{
        "requirements": ["Arch Studio 1", "Arch Studio 2", "Arch Studio 3", "Arch Studio 4", "Arch Studio 5", "Arch Studio 6", "BT Course 1", "BT Course 2", "ES Course 1", "ES Course 2", "CP Course 1", "CP Course 2", "AH Course 1", "AH Course 2", "AH Course 3"],
        "department": "ARC",
        "name": "BA in ARC",
        "year": ["2014"],
        "type": "BA",
        "MajorFile": "2014:CFA:BA:ARC.MAJ"
    }, {
        "requirements": ["Foundation I", "Foundation II", "Elaboration I", "Elaboration II", "Integration I", "Integration II", "ASOS I", "ASOS II", "ASOS III or Thesis I", "ASOS IV or Thesis II", "Building Physics", "Materials and Assembly", "Structures/Statics", "Environment 1", "Environment 2", "First Year Seminar I", "First Year Seminar II", "Context", "Human Factors in Architectur", "Real Estate Design & Develop", "Issues of Practice", "Ethics & Decision Making in", "Intro to Arch History", "Arch History 2", "Arch History 3", "Intro to Digital Media I", "Intro to Digital Media II", "Analog Media I", "Analog Media II", "Computing @ Carnegie Mellon", "Descriptive Geometry", "Interpretation & Argument", "University Electives", "Departmental Elective"],
        "department": "ARC",
        "name": "BAC in ARC",
        "type": "BAC",
        "year": ["2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2000"]
    }, {
        "requirements": ["Studio", "Design Workshop I", "Visualizing", "Computing at CM", "Placing", "Psychology", "Interpretation & Argument", "Design Lab", "Design Workshop II", "Collaborative Visualizing", "Photo Design I", "Photo Design II", "Systems", "Global History", "Studio I", "Studio I", "Prototyping Lab I", "Prototyping Lab I", "How People Work", "Design Selective", "Academic Elective", "Studio II", "Prototyping Lab II", "Research Methods", "Cultures", "Academic Elective", "Studio III", "Futures", "Design Elective", "Academic Elective", "Free Elective", "Studio IV", "Persuasion", "Design Elective", "Academic Elective", "Free Elective", "Design Research Studio", "Design Elective", "Academic Elective", "Free Elective", "Free Elective", "Capstone Design Project", "Design Elective", "Academic Elective", "Free Elective"],
        "department": "DES",
        "name": "BDES in DES",
        "year": ["2015"],
        "type": "BDES",
        "MajorFile": "2015:CFA:BDES:DES.MAJ"
    }, {
        "requirements": ["Concept Studio I", "Concept Studio II/III", "Intro Contextual Prac", "Senior Studio", "Extended/Adv Studio", "Senior Studio", "Extended/Adv Studio", "Electronic Media I", "2D Media", "2D Media", "3D Media I", "3D Media II", "2D Media", "Electronic Media II", "Sophomore Review", "Senior Review", "Adv Art Studio Conc (4)", "Adv Art Studios (5)", "Non-Art CFA Studio (1)", "Contemp Issues Forum", "Advent. in Arts Time/Passpor", "Modern Vis Culture", "Contemp Vis Culture", "Art Hist/Theory (2)", "C@CM", "Global Histories", "Interp & Argument", "Electvs(1 ea)Hum/SS/Tech", "Elective Focus (3)", "Electives (Any 2)"],
        "department": "ART",
        "name": "BFA in ART",
        "type": "BFA",
        "year": ["2015", "2014", "2010", "2009", "2000"]
    }, {
        "requirements": ["Design Studio I", "Design Workshop I", "Design Drawing I", "Computing at CM", "Human Experience in Design", "Psychology", "Interpretation & Argument", "Design Studio II", "Design Workshop II", "Design Drawing II", "Photo Design I", "Photo Design II", "Design Thinking or CFA Inter", "Global History", "Type I", "CD Computer Lab", "Digital Photo Imaging", "How People Work", "Design History I", "Type II", "Decoding Place", "Web Design", "Type III", "Type IV", "Design Topics Course", "Senior Design Lab", "Senior Design Project", "Design Electives", "Academic Electives", "Free Electives"],
        "department": "COMDES",
        "name": "BFA in COMDES",
        "type": "BFA",
        "year": ["2011", "2009", "2008", "2007", "2006", "2004", "2003", "2002", "2001", "2000", "1998", "1996"]
    }, {
        "requirements": ["Design Studio I", "Design Workshop I", "Design Drawing I", "Computing at CM", "Human Experience in Design", "Psychology", "Interpretation & Argument", "Design Studio II", "Design Workshop II", "Design Drawing II", "Photo Design I", "Photo Design II", "Design Thinking or CFA Inter", "Global History"],
        "department": "DES",
        "name": "BFA in DES",
        "type": "BFA",
        "year": ["2011", "2009", "2006", "2003", "2002", "2001", "2000"]
    }, {
        "requirements": ["Design Studio I", "Design Workshop I", "Design Drawing I", "Computing at CM", "Human Experience in Design", "Psychology", "Interpretation & Argument", "Design Studio II", "Design Workshop II", "Design Drawing II", "Photo Design I", "Photo Design II", "Design Thinking or CFA Inter", "Global History", "ID Studio I", "Prototyping", "Digital Prototyping", "How People Work", "Design History I", "ID Studio II", "How Things Work", "Visual Communication for ID", "ID Studio III", "How Things are Made", "ID Studio IV", "Design Topics Course", "Senior Design Lab", "Senior Design Project", "Design Electives", "Academic Electives", "Free Electives"],
        "department": "INDDES",
        "name": "BFA in INDDES",
        "type": "BFA",
        "year": ["2011", "2009", "2008", "2007", "2006", "2004", "2003", "2002", "2001", "2000", "1998", "1996"]
    }, {
        "requirements": ["Studio", "Soph Recital - STRING ONLY", "Junior Recital", "Senior Recital", "Chamber Music - ALL STUDENTS", "String Chamber Mus - STRING", "Major Ensemble", "Harmony I,II", "Concept and Practice of Coun", "Form and Analysis", "Eurhythmics I-IV", "Solfege I-IV", "Music History I", "Music History II", "Music History III", "Repertoire and Listening", "Music Analysis Support Cours", "Music Support Courses", "Keyboard Studies", "Keyboard Studies Prof. Test", "Convocation", "Designated Writing Course", "Computer Courses", "Designated History Course", "General Studies Courses", "Elective Courses"],
        "department": "MP",
        "name": "BFA in MP",
        "type": "BFA",
        "year": ["2012", "2010", "2009", "2005", "2001", "2000", "1998"]
    }, {
        "requirements": ["Studio", "Junior Recital", "Senior Recital", "Performance Electives", "Major Ensemble", "Harmony I,II", "Concept and Practice of Coun", "Form and Analysis", "Eurhythmics I-IV", "Solfege I-IV", "Score Reading/Keyboard Harmo", "Survey of Western Music Hist", "Music History I", "Music History II", "Repertoire and Listening for", "Music Analysis Support Cours", "Music Support Courses", "Keyboard Studies", "Keyboard Studies Prof. Test", "Designated Writing Course", "Computer Courses", "Critical Histories of the Ar", "General Studies Courses", "Elective Courses"],
        "department": "MPORG",
        "name": "BFA in MPORG",
        "type": "BFA",
        "year": ["2005", "2001"]
    }, {
        "requirements": ["Studio", "Junior Recital", "Senior Recital", "Skills of Accompanying I-II", "Chamber Music", "Performance Electives", "Major Ensemble", "Harmony I,II", "Concept and Practice of Coun", "Form and Analysis", "Eurhythmics I-IV", "Solfege I-IV", "Music History I", "Music History II", "Music History III", "Repertoire and Listening", "Music Analysis Support Cours", "Music Support Courses", "Convocation", "Designated Writing Course", "Computer Courses", "Designated History Course", "General Studies Courses", "Elective Courses"],
        "department": "MPPIA",
        "name": "BFA in MPPIA",
        "type": "BFA",
        "year": ["2012", "2010", "2005", "2001", "2000", "1998"]
    }, {
        "requirements": ["Studio", "Junior Recital", "Senior Recital", "Production", "Major Vocal Performance Ense", "Harmony I,II", "Concept and Practice of Coun", "Form and Analysis", "Eurhythmics I-IV", "Solfege I-IV", "Music History I", "Music History II", "Music History III", "Repertoire and Listening", "Acting I-IV", "Movement and Dance I-IV", "Elementary Italian", "Italian Diction", "Italian Lit and Rep", "Elementary German", "German Diction", "German Lit and Rep", "Elementary French", "French Diction", "French Lit and Rep", "English Diction", "English/Contemp Lit and Rep", "Musical Theatre Lit and Rep", "Musical Theatre Lit and Rep", "Adv Lang Course-Ita/Ger/Fre", "Keyboard Studies", "Keyboard Studies Prof. Test", "Convocation", "Designated Writing Course", "Computer Courses", "Designated History Course", "Elective Courses"],
        "department": "MPVOI",
        "name": "BFA in MPVOI",
        "type": "BFA",
        "year": ["2012", "2010", "2008", "2005", "2001", "1998"]
    }, {
        "requirements": ["Studio", "Senior Project", "Major Ensemble", "Performance for Composers", "Harmony I-II", "Concept and Practice of Cpt", "Form and Analysis", "Eurhythmics I-IV", "Solfege I-IV", "20th-21st Century Techniques", "Orchestration I-II", "Introduction to Conducting", "Intrumental/Choral Conductin", "Electronic and Computer Musi", "Score Reading/Keyboard Harmo", "Supervised Theory Teaching", "Music History I", "Music History II", "Music History III", "Repertoire and Listening", "Music Analysis Support Cours", "Music Support Courses", "Keyboard Studies", "Keyboard Studies Prof. Test", "Convocation", "Designated Writing Course", "Computer Courses", "Designated History Course", "General Studies Courses", "Elective Courses"],
        "department": "MUSCOM",
        "name": "BFA in MUSCOM",
        "type": "BFA",
        "year": ["2012", "2010", "2008", "2005", "2001", "1998"]
    }, {
        "requirements": ["Grad Design Studio I", "Grad Design SeminarI", "Grad Design StudioII", "Grad Design Semin.II", "Research Methods", "Grad Thesis SeminarI", "Grad Thesis ProjectI", "Grad Thesis Semin.II", "Grad Thesis Proj. II", "Free Electives"],
        "department": "CPID",
        "name": "MDES in CPID",
        "type": "MDES",
        "year": ["2002", "2001"]
    }, {
        "requirements": ["Grad Design Studio I", "Grad Design SeminarI", "Int.& Vis.Interface", "Grad Design StudioII", "Grad Design Semin.II", "Research Methods", "Grad Thesis SeminarI", "Grad Thesis ProjectI", "Grad Thesis Semin.II", "Grad Thesis Proj. II", "Design Computing", "Free Electives"],
        "department": "INTDES",
        "name": "MDES in INTDES",
        "type": "MDES",
        "year": ["2002", "2001"]
    }, {
        "requirements": ["Collaborative Piano I", "Collaborative Piano II", "Collaborative Piano III", "Collaborative Piano IV", "Collaborative Piano V", "Collaborative Piano VI", "Elective Courses"],
        "department": "ACCOMP",
        "name": "MINOR in ACCOMP",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:CFA:MINOR:MUSCACCO.MAJ"
    }, {
        "requirements": ["Global Hist or Passport", "Studio OR", "Spatial Concepts for Non-Arc", "Arc History I", "Departmental Elective"],
        "department": "ARC",
        "name": "MINOR in ARC",
        "type": "MINOR",
        "year": ["2015", "2012"]
    }, {
        "requirements": ["Concept Studio", "Foundation Media Studios (2)", "Adv Art Studios (2)", "Art Hist/Theory (1)"],
        "department": "ART",
        "name": "MINOR in ART",
        "year": ["2009"],
        "type": "MINOR",
        "MajorFile": "2009:CFA:MINOR:ART.MAJ"
    }, {
        "requirements": ["Design History I", "Comm Design Fundamentals", "Design Electives"],
        "department": "COMDES",
        "name": "MINOR in COMDES",
        "year": ["2000"],
        "type": "MINOR",
        "MajorFile": "2000:CFA:MINOR:COMDES.MAJ"
    }, {
        "requirements": ["Des for Interactions", "Des for Interactions", "Des Studies", "Des Studies", "Design Electives"],
        "department": "DES",
        "name": "MINOR in DES",
        "year": ["2015"],
        "type": "MINOR",
        "MajorFile": "2015:CFA:MINOR:DES.MAJ"
    }, {
        "requirements": ["Design History I", "Ind Design Fundamentals", "Design Electives"],
        "department": "INDDES",
        "name": "MINOR in INDDES",
        "year": ["2000"],
        "type": "MINOR",
        "MajorFile": "2000:CFA:MINOR:INDDES.MAJ"
    }, {
        "requirements": ["Harmony I", "Solfege I", "Studio", "Jazz Ensemble", "Jazz Chamber Music", "Jazz Improvisation", "Jazz Piano", "Jazz Academic Course"],
        "department": "JAZZP",
        "name": "MINOR in JAZZP",
        "year": ["2000"],
        "type": "MINOR",
        "MajorFile": "2000:CFA:MINOR:JAZZPERF.MAJ"
    }, {
        "requirements": ["Required Portal Course", "Three Media Design Collabora", "Fourth IDeATe Collaborative"],
        "department": "MEDDES",
        "name": "MINOR in MEDDES",
        "year": ["2014"],
        "type": "MINOR",
        "MajorFile": "2014:CFA:MINOR:MD.MAJ"
    }, {
        "requirements": ["Beginning Piano", "Harmony", "Eurhythmics", "Solfege", "Survey of Western Music Hist", "Repertoire and Listening", "Elective Studio", "Music Elective Courses"],
        "department": "MUSC",
        "name": "MINOR in MUSC",
        "year": ["2010"],
        "type": "MINOR",
        "MajorFile": "2010:CFA:MINOR:MUSC.MAJ"
    }, {
        "requirements": ["Harmony I", "Harmony II", "Eurhythmics I", "Eurhythmics II", "Intro to Repertoire & Listen", "Keyboard Studies", "Introduction to Conducting", "Instrumental/Choral Conducti", "Form and Analysis", "Orchestration I", "Orchestration II", "Score Reading/Keyboard Harmo", "Conducting Practicum", "Independent Study in Conduct", "Elective Courses"],
        "department": "MUSCOND",
        "name": "MINOR in MUSCOND",
        "year": ["2008"],
        "type": "MINOR",
        "MajorFile": "2008:CFA:MINOR:MUSCCOND.MAJ"
    }, {
        "requirements": ["Beginning Piano", "Harmony", "Eurhythmics", "Solfege", "Survey of Western Music Hist", "Repertoire and Listening", "Sound Recording", "Sound Editing and Production", "MultiTrack Recording", "Music Technology/Sound Cours"],
        "department": "MUSCTECH",
        "name": "MINOR in MUSCTECH",
        "year": ["2010"],
        "type": "MINOR",
        "MajorFile": "2010:CFA:MINOR:MUSCTECH.MAJ"
    }, {
        "requirements": ["Beginning Piano", "Harmony I", "Eurhythmics I", "Solfege I", "Survey of Western Music Hist", "Repertoire and Listening for", "Concept and Practice of Coun", "Harmony II", "Form and Analysis", "Advanced Theory Course", "Music Elective Courses"],
        "department": "MUSCTHRY",
        "name": "MINOR in MUSCTHRY",
        "year": ["2010"],
        "type": "MINOR",
        "MajorFile": "2010:CFA:MINOR:MUSCTHRY.MAJ"
    }, {
        "requirements": [],
        "department": "MUSED",
        "name": "MINOR in MUSED",
        "type": "MINOR",
        "year": ["2004"]
    }, {
        "requirements": [],
        "department": "MUSPERF",
        "name": "MINOR in MUSPERF",
        "type": "MINOR",
        "year": ["2008", "2004", "2000"]
    }, {
        "requirements": [],
        "department": "MUSTECH",
        "name": "MINOR in MUSTECH",
        "type": "MINOR",
        "year": ["2008", "2000"]
    }, {
        "requirements": [],
        "department": "MUSTHEOR",
        "name": "MINOR in MUSTHEOR",
        "type": "MINOR",
        "year": ["2008", "2000"]
    }, {
        "requirements": ["Required Portal Course", "Three Sound Design Collabora", "Fourth IDeATe Collaborative"],
        "department": "SOUNDDES",
        "name": "MINOR in SOUNDDES",
        "year": ["2014"],
        "type": "MINOR",
        "MajorFile": "2014:CFA:MINOR:SD.MAJ"
    }, {
        "requirements": ["Studio", "Graduate Recital", "Sonatas/Songs I-IV", "Chamber Music Coaching", "Opera Coaching", "Chamber Music Lit I-II", "Opera Literature", "Vocal Literature I-II", "French/German/Italian/Spanis", "Research Seminar", "Score Reading/Keyboard Harmo", "Music Analysis Support Cours", "Music History Support Course", "Elective Courses", "History Proficiency Test", "Theory Proficiency Test", "Comp Review", "Comp Review", "Outreach Performance"],
        "department": "COLPIA",
        "name": "MMU in COLPIA",
        "year": ["2010"],
        "type": "MMU",
        "MajorFile": "2010:CFA:MMU:COLPIA.MAJ"
    }, {
        "requirements": ["Studio", "Graduate Composition Project", "Introduction to Music Techno", "Finale", "Electronic and Computer Musi", "Sound Recording", "Introduction to Conducting", "Instrumental/Choral Conducti", "Keyboard Courses", "Research Seminar", "Music Analysis Support Cours", "Music History Support Course", "Music Support Courses", "Elective Courses", "History Proficiency Test", "Theory Proficiency Test", "Comp Review", "Outreach Performance"],
        "department": "COMP",
        "name": "MMU in COMP",
        "year": ["2011"],
        "type": "MMU",
        "MajorFile": "2011:CFA:MMU:COMP.MAJ"
    }, {
        "requirements": ["Studio", "Graduate Conducting Project", "Conducting Laboratory/Ensemb", "Repertoire Analysis", "Sound Analysis", "Practicum (Strings/Voice)", "Practicum (Brass/Woodwind)", "Practicum (Keyboard/Percussi", "Research Seminar", "Music Analysis Support Cours", "Music History Support Course", "Music Support Courses", "Elective Courses", "History Proficiency Test", "Theory Proficiency Test", "Comp Review", "Comp Review", "Outreach Performance"],
        "department": "COND",
        "name": "MMU in COND",
        "year": ["2011"],
        "type": "MMU",
        "MajorFile": "2011:CFA:MMU:COND.MAJ"
    }, {
        "requirements": ["Studio", "Recital 1st year - string", "Recital 2nd year", "Major Ensemble", "Chamber Music", "Literature and Repertoire", "Research Seminar", "Music Analysis Support Cours", "Music History Support Course", "Music Support Courses", "Elective Courses", "History Proficiency Test", "Theory Proficiency Test", "Comp Review", "Comp Review", "Outreach Performance"],
        "department": "P",
        "name": "MMU in P",
        "year": ["2011"],
        "type": "MMU",
        "MajorFile": "2011:CFA:MMU:P.MAJ"
    }, {
        "requirements": ["Studio", "Recital - 1st year", "Recital - 2nd year", "Collaborative Playing", "Literature and Repertoire", "Piano Pedagogy", "Research Seminar", "Music Analysis Support Cours", "Music History Support Course", "Music Support Courses", "Elective Courses", "History Proficiency Test", "Theory Proficiency Test", "Comp Review", "Comp Review", "Outreach Performance"],
        "department": "PPIA",
        "name": "MMU in PPIA",
        "year": ["2011"],
        "type": "MMU",
        "MajorFile": "2011:CFA:MMU:PPIA.MAJ"
    }, {
        "requirements": ["Studio", "Graduate Recital", "Performance Courses", "Performance Elective Courses", "Solfege/Diction Course", "Music Analysis Support Cours", "Music History Support Course", "Music Support Courses", "Language Courses", "Research Seminar", "Elective Courses", "History Proficiency Test", "Theory Proficiency Test", "French Language Prof Test", "German Language Prof Test", "Italian Language Prof Test", "IPA Proficiency Test", "Solfege Proficiency Test", "Comp Review", "Comp Review", "Outreach Performance"],
        "department": "PVOI",
        "name": "MMU in PVOI",
        "year": ["2010"],
        "type": "MMU",
        "MajorFile": "2010:CFA:MMU:PVOI.MAJ"
    }, {
        "requirements": [],
        "department": "DES",
        "name": "PHD in DES",
        "year": ["2003"],
        "type": "PHD",
        "MajorFile": "2003:CFA:PHD:DES.MAJ"
    }],
    "MCS": [{
        "requirements": ["1st Year of Calculus", "2nd Year of Calculus", "Physics 1", "Physics 2", "Computer Science", "Modern Biology", "Biochemistry", "Cell Biology", "Genetics", "Colloquium", "Bio Electives - 54 Units", "Modern Biology Lab", "Exper Genetics/Molec Biology", "Exper Biochem/Cell Dev", "Topics in Research", "Modern Chem I", "Modern Chem II", "Organic Chem", "Exper Tech Chem", "Physical Chemistry", "Check", "Genetics Option", "Biochemistry Option", "Biophysics Option", "Cell Biology Option", "Developmental Biology Option", "Molecular Biology Option", "Computational Biology Option"],
        "department": "BSC",
        "name": "A_MAJ in BSC",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:MCS:A_MAJ:BSC.MAJ"
    }, {
        "requirements": ["Modern Biology", "Biochemistry", "Cell Biology", "Genetics", "Exper Genetics/Molec Biology", "Exper Biochem/Cell Dev", "Topics in Research", "Colloquium", "Computational Biology", "Adv Bio Elective - 9 Units", "Modern Chem II", "Organic Chem", "Exper Tech Chem", "Physical Chemistry", "Compbio Elective Reqs", "Differential Equations", "Computing Electives"],
        "department": "BSCCB",
        "name": "A_MAJ in BSCCB",
        "year": ["2001"],
        "type": "A_MAJ",
        "MajorFile": "2001:MCS:A_MAJ:BSCCB.MAJ"
    }, {
        "requirements": ["Intro to Modern Chem", "Modern Chemistry II", "Issues in Chem", "Organic Chem I", "Organic Chem II", "Math. Methods", "Modern Analytical Inst.", "Physical Chemistry I", "Physical Chemistry II", "Inorganic Chemistry", "Lab I", "Lab II", "Lab III", "Lab IV", "Chem Seminars - 8 Units", "Chem Electives - 18 Units"],
        "department": "CMY",
        "name": "A_MAJ in CMY",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:MCS:A_MAJ:CMY.MAJ"
    }, {
        "requirements": ["Calculus", "Intro CS Course", "Adv Prog Practicum", "Calc in 3D", "Matrix Algebra", "Intro Math Finance", "OR 1", "Differential Equations", "Numerical Methods", "Disrete Time Finance", "Continuous Time Finance", "Science Requirement", "Principles of Economics", "Microeconomics", "Macroeconomics", "Intro Prob & Stats", "Intro Prob & Stats II", "Intro Prob Models", "Depth Electives", "Intro Accounting", "Prof Writing", "Prof Speaking", "Fin. Engineering", "Org Design & Imp"],
        "department": "COMPFIN",
        "name": "A_MAJ in COMPFIN",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:MCS:A_MAJ:COMPFIN.MAJ"
    }, {
        "requirements": ["Computer Science", "Calculus 1", "Calculus 2", "Concepts of Math", "Discrete Math*", "Matrix Algebra*", "Calc in 3D", "Differential Eqns", "Advanced Calc 1", "Upper Level Math Electives*", "Additional Math Electives*", "Math, Stats, or CS Electives"],
        "department": "MSC",
        "name": "A_MAJ in MSC",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:MCS:A_MAJ:MSC.MAJ"
    }, {
        "requirements": ["Calculus 1", "Calculus 2", "Intro to Programming and Com", "Fundamental Structures of Co", "Concepts of Mathematics", "Basic Logic", "Combinatorial Analysis", "Linear Algebra I", "Advanced Calculus I", "Algebraic Structures", "Graph Theory", "Discrete Mathematics and Log", "Undergraduate Colloquium", "Computer Science Electives", "Technical Electives"],
        "department": "MSCDML",
        "name": "A_MAJ in MSCDML",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:MCS:A_MAJ:MSCDML.MAJ"
    }, {
        "requirements": [],
        "department": "MSCM",
        "name": "A_MAJ in MSCM",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:MCS:A_MAJ:MSCM.MAJ"
    }, {
        "requirements": ["Calculus 1", "Calculus 2", "Concepts of Mathematics", "Discrete Mathematics", "Matrix Algebra", "Calculus in 3D", "Differential Equations", "Operations Research I, II", "Advanced Calculus I", "Numerical Methods", "Math Science Electives", "Intro Prob & Stat I", "Intro Prob & Stats II", "Modern Regression", "Topic in Data Analysis", "Intro to Prob Models", "Undergraduate Colloquium", "Intro to Programming and Com", "Intro. to Accounting", "Principles of Economics", "Intermediate Micro Economics", "Math-Stats-Compsci Electives"],
        "department": "MSCOR",
        "name": "A_MAJ in MSCOR",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:MCS:A_MAJ:MSCOR.MAJ"
    }, {
        "requirements": ["Physics I", "Physics II", "Experimental Physics", "Undergrad Colloquium**", "Physics III Mod. Ess.", "Electronics", "Physical Analysis", "Qhantum Physics", "Physical Mechanics I", "Int. Elect. & Mag I", "Modern Physics Lab", "Thermal Physics", "Physics Electives", "Calculus I", "Calculus II", "Calculus in 3D", "Math Methods for Physicists", "Computer Science"],
        "department": "PHY",
        "name": "A_MAJ in PHY",
        "type": "A_MAJ",
        "year": ["2002", "2000"]
    }, {
        "requirements": ["Calculus", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Cell Biology", "Biochemistry", "Genetics", "Biology Lab", "Topics in Research", "Colloquium", "Bio Electives - 36 Units", "Modern Chem II", "Organic Chem", "Exper Tech Chem", "Free Electives - 99 Units", "Check"],
        "department": "BSC",
        "name": "BA in BSC",
        "type": "BA",
        "year": ["2011", "2001", "1999"]
    }, {
        "requirements": ["Calculus", "Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives", "Intro to Modern Chem", "Modern Chemistry II", "Issues in Chemistry", "Modern Organic Chem I", "Modern Organic Chem II", "Physical Chemistry", "Inorganic Chemistry", "Lab I", "Lab II", "Lab III", "Chem Seminars - 8 Units", "Chem Electives - 18 Units"],
        "department": "CMY",
        "name": "BA in CMY",
        "type": "BA",
        "year": ["2008", "2002", "2000", "1998"]
    }, {
        "requirements": ["Soph. Colloq. I", "Soph. Colloq. II", "Upperclass Colloq. I", "Upperclass Colloq. II", "Experimental Physics", "Physics III", "Physical Analysis", "Electronics", "Math Methods for Physicists", "Quantum Physics", "Physical Mechanics I", "Inter. Elect. & Magnet. I", "Thermal Physics", "Modern Physics Lab", "Physics Electives", "Calculus in 3D", "Chemistry I", "Modern Biology", "Calculus", "Physics I", "Physics II", "Computer Science", "Computing Skills", "Designated Writing - A", "Cognition, Choice, Behavior", "Economic, Political, Social", "Cultural Analysis - B3", "HSS/CFA Electives - C", "Free Electives"],
        "department": "PHY",
        "name": "BA in PHY",
        "type": "BA",
        "year": ["2012", "2000"]
    }, {
        "requirements": ["Calculus 1", "Calculus 2", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives - Restricted", "Free Electives - Unrestricte", "Modern Biology", "Biochemistry", "Cell Biology", "CompBio", "Genetics", "Exper Genetics/Molec Biology", "Exper Biochem/Cell Dev", "Topics in Research", "Colloquium", "Bio Electives - 54 Units", "Modern Chem II", "Organic Chem", "Exper Tech Chem", "Check", "Genetics Option", "Biochemistry Option", "Biophysics Option", "Cell Biology Option", "Developmental Biology Option", "Molecular Biology Option 201", "Computational Biology Option", "Required Courses", "Additional Courses"],
        "department": "BSC",
        "name": "BS in BSC",
        "type": "BS",
        "year": ["2011", "2010", "2008", "2001", "1999"]
    }, {
        "requirements": ["Calculus", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives", "Modern Biology", "Biochemistry", "Cell Biology", "Genetics", "Exper Genetics/Molec Biology", "Exper Biochem/Cell Dev", "Topics in Research", "Colloquium", "Computational Biology", "Adv Bio Elective - 9 Units", "Modern Chem II", "Organic Chem", "Exper Tech Chem", "Physical Chemistry", "Compbio Elective Reqs", "Differential Equations", "Computing Electives", "Genetics Option", "Biochemistry Option", "Biophysics Option", "Cell Biology Option", "Developmental Biology Option", "Molecular Biology Option", "Computational Biology Option", "Check"],
        "department": "BSCCB",
        "name": "BS in BSCCB",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:BSCCB.MAJ"
    }, {
        "requirements": ["Calculus", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives", "Modern Biology", "Biochemistry", "Cell Biology", "Genetics", "Exper Genetics/Molec Biology", "Exper Biochem/Cell Dev", "Topics in Research", "Colloquium", "Computational Biology", "Adv Bio Elective - 9 Units", "Modern Chem II", "Organic Chem", "Exper Tech Chem", "Physical Chemistry", "Compbio Elective Reqs", "Differential Equations", "Computing Electives", "Genetics Option", "Biochemistry Option", "Biophysics Option", "Cell Biology Option", "Developmental Biology Option", "Molecular Biology Option", "Computational Biology Option", "Check"],
        "department": "BSCCBIO",
        "name": "BS in BSCCBIO",
        "year": ["2001"],
        "type": "BS",
        "MajorFile": "2001:MCS:BS:BSCCB.MAJ"
    }, {
        "requirements": [],
        "department": "BSCNSC",
        "name": "BS in BSCNSC",
        "year": ["2013"],
        "type": "BS",
        "MajorFile": "2013:MCS:BS:BSCNSC.MAJ"
    }, {
        "requirements": [],
        "department": "BSCPSY",
        "name": "BS in BSCPSY",
        "type": "BS",
        "year": ["2011", "2008", "2001"]
    }, {
        "requirements": ["Calculus 1", "Calculus 2", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives - Restricted", "Free Electives - Unrestricte", "Genetics", "Modern Chemistry II", "Organic Chemistry I", "Chemistry Lab I", "Statistics", "BFoB or Mol to Mind", "Cog Psych or Human Info Pro", "Cellular Neuroscience", "Systems Neuroscience", "Neural Computation", "Princ Imper Comp", "Matric and Lin Trans", "Laboratory, Data Analysis, a", "18 units of CompNeuro electi", "18 additional units of Neuro"],
        "department": "CMPNRO",
        "name": "BS in CMPNRO",
        "year": ["2014"],
        "type": "BS",
        "MajorFile": "2014:MCS:BS:CMPNRO.MAJ"
    }, {
        "requirements": ["Calculus", "Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives", "Intro to Modern Chem", "Modern Chemistry II", "Issues in Chem", "Modern Organic Chem I", "Modern Organic Chem II", "Modern Analytical Inst.", "Physical Chemistry I", "Physical Chemistry II", "Inorganic Chemistry", "Lab I", "Lab II", "Lab III", "Lab IV", "Chem Seminars - 8 Units", "Chem Electives - 18 Units", "Advanced Math"],
        "department": "CMY",
        "name": "BS in CMY",
        "type": "BS",
        "year": ["2008", "2000", "1998"]
    }, {
        "requirements": ["Calculus 1", "Calculus 2", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives - Restricted", "Free Electives - Unrestricte", "Genetics", "Modern Chemistry II", "Organic Chemistry I", "Chemistry Lab I", "Statistics", "BFoB or Mol to Mind", "Cog Psych or Human Info Pro", "Cellular Neuroscience", "Systems Neuroscience", "Neural Comp or Par Dist Prof", "Introduction to Psychology", "Exp Des Beh & Soc Science", "Research Methods Cog Neuro", "Research Methods Cog Psych", "27 units Cog Neuroscience", "18 additional units of Neuro"],
        "department": "COGNRO",
        "name": "BS in COGNRO",
        "year": ["2014"],
        "type": "BS",
        "MajorFile": "2014:MCS:BS:COGNRO.MAJ"
    }, {
        "requirements": ["Calculus", "Science Requirement", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Cultural Analysis", "Non-Tech Electives", "Free Electives - Restricted", "Free Electives - Unrestricte", "Adv Prog Practicum", "Calc in 3D", "Matrix Algebra", "Intro Math Finance", "OR 1", "Differential Equations", "Numerical Methods", "Disrete Time Finance", "Continuous Time Finance", "Finance", "Principles of Economics", "Microeconomics", "Macroeconomics", "Intro Prob & Stats", "Intro Prob & Stats II", "Intro Prob Models", "Depth Electives", "Intro Accounting", "Prof Writing", "Prof Speaking", "Fin. Engineering", "Org Design & Imp"],
        "department": "COMPFIN",
        "name": "BS in COMPFIN",
        "year": ["2002"],
        "type": "BS",
        "MajorFile": "2002:MCS:BS:COMPFIN.MAJ"
    }, {
        "requirements": ["Concepts of Mathematics", "Discrete Mathematics", "Undergraduate Colloquium", "Matrix Algebra", "Calculus in 3D", "Differential Equations", "Symbolic Computing Methods", "Probability", "Real Analysis I", "Real Analysis II", "Numerical Methods", "Computer Science", "Depth Electives", "Calculus", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives"],
        "department": "MSCCAM",
        "name": "BS in MSCCAM",
        "type": "BS",
        "year": ["2008", "2000"]
    }, {
        "requirements": ["Computer Science Core", "Concepts of Mathematics", "Discrete Mathematics", "Matrix Algebra", "Basic Logic", "Combinatorics", "Linear Algebra", "Real Analysis I", "Algebraic Structures", "Discrete Math and Logic", "Undergraduate Colloquium", "Math Electives", "Computer Science Electives", "Calculus", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives"],
        "department": "MSCDML",
        "name": "BS in MSCDML",
        "type": "BS",
        "year": ["2008", "2002"]
    }, {
        "requirements": ["Concepts of Mathematics", "Discrete Mathematics", "Matrix Algebra", "Linear Algebra", "Calculus in 3D", "Differential Equations", "Principles of Real Analysis", "Principles of Real Analysis", "Algebraic Structures", "Math Science Electives", "Probability", "Math, Stats, CS Electives", "Calculus", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Pol,and Soc Inst", "Cultural Analysis", "Electives"],
        "department": "MSCM",
        "name": "BS in MSCM",
        "type": "BS",
        "year": ["2008", "2001", "2000"]
    }, {
        "requirements": ["Concepts of Mathematics", "Discrete Mathematics", "Matrix Algebra", "Calculus in 3D", "Differential Equations", "Operations Research I, II", "Numerical Methods", "Probability", "Intro Prob & Stats II", "Modern Regression", "Advanced Data Analysis", "Intro to Prob Models", "Undergraduate Colloquium", "Intro to Accounting", "Principles of Economics", "Micro Economics", "Macro Economics", "Depth Electives", "Calculus", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer_Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Cultural Analysis", "H&SS;, CFA, IM Elective Cours"],
        "department": "MSCOR",
        "name": "BS in MSCOR",
        "type": "BS",
        "year": ["2008", "2006", "2000"]
    }, {
        "requirements": ["Concepts of Mathematics", "Discrete Mathematics", "Matrix Algebra", "Calculus in Three Dimensions", "Differential Equations", "Operations Research I, II", "Numerical Methods", "Probability", "Intro Prob & Stat II", "Adv Data Analysis I, II", "Intro to Probability Models", "Statistics Elective", "Undergraduate Colloquium", "Principles of Economics", "Data Structures", "Depth Electives", "Calculus", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Economic, Political and Soci", "Cultural Analysis", "Non-Tech Electives"],
        "department": "MSCSTA",
        "name": "BS in MSCSTA",
        "type": "BS",
        "year": ["2008", "2006", "2000"]
    }, {
        "requirements": ["Principles of Economics", "Microeconomics", "Macroeconomics", "Adv. Microecon. Theory", "Adv. Macroecon. Theory", "Intro to Prob and Stats I", "Intro to Prob and Stats II", "Econometrics", "Modern Regression", "Concepts of Mathematics", "Discrete Mathematics", "Matrix Algebra", "Calculus in Three Dimensions", "Differential Equations", "Principles of Real Analysis", "Principles of Real Analysis", "Programming", "Writing Requirement", "1st Econ. Elective", "2nd Econ. Elective", "3rd Econ. Elective", "Math Science Electives", "Calculus", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Pol,and Soc Inst", "Cultural Analysis", "Electives"],
        "department": "MTHECO",
        "name": "BS in MTHECO",
        "year": ["2008"],
        "type": "BS",
        "MajorFile": "2008:MCS:BS:MTHECO.MAJ"
    }, {
        "requirements": ["Calculus 1", "Calculus 2", "Modern Biology", "Chemistry", "Physics 1", "Physics 2", "Computer Science", "CSW", "Designated Writing Course", "Cog, Choice, and Behavior", "Econ, Social, and Pol Inst.", "Cultural Analysis", "Non-Tech Electives", "Free Electives - Restricted", "Free Electives - Unrestricte", "Genetics", "Modern Chemistry II", "Organic Chemistry I", "Chemistry Lab I", "Statistics", "BFoB or Mol to Mind", "Cog Psych or Human Info Pro", "Cellular Neuroscience", "Systems Neuroscience", "Neural Comp or Par Dist Prof", "Biochemistry I", "Cell Biology", "Neuro of Disease or Neural C", "Laboratory, Data Analysis, a", "9 units of Neurobiology elec", "18 additional units of Neuro"],
        "department": "NROBIO",
        "name": "BS in NROBIO",
        "year": ["2014"],
        "type": "BS",
        "MajorFile": "2014:MCS:BS:NROBIO.MAJ"
    }, {
        "requirements": ["Soph. Colloq. I", "Soph. Colloq. II", "Upperclass Colloq. I", "Upperclass Colloq. II", "Experimental Physics", "Physics III", "Physical Analysis", "Electronics", "Math Methods for Physicists", "Quantum Physics", "Physical Mechanics I", "Inter. Elect. & Magnet. I", "Thermal Physics", "Modern Physics Lab", "Physics Electives", "Calculus in 3D", "Math Electives", "Chemistry I", "Modern Biology", "Calculus", "Physics I", "Physics II", "Computer Science", "Computing Skills", "Designated Writing - A", "Cognition, Choice, Behavior", "Economic, Political, Social", "Cultural Analysis - B3", "HSS/CFA Electives - C", "Technical Electives", "Free Electives"],
        "department": "PHY",
        "name": "BS in PHY",
        "type": "BS",
        "year": ["2012", "2008", "2002", "2000"]
    }, {
        "requirements": ["Soph. Colloq. I", "Soph. Colloq. II", "Upperclass Colloq. I", "Upperclass Colloq. II", "Experimental Physics", "Physics III", "Physical Analysis", "Electronics", "Math Methods for Physicists", "Quantum Physics", "Physical Mechanics I", "Inter. Elect. & Magnet. I", "Thermal Physics", "Modern Physics Lab", "Intro Solid State", "Computational Elective", "Lab Skills Elective", "Applied Physics Elective", "Senior Research", "Calculus in 3D", "Math Electives", "Chemistry I", "Modern Biology", "Calculus", "Physics I", "Physics II", "Computer Science", "Computing Skills", "Designated Writing - A", "Cognition, Choice, Behavior", "Economic, Political, Social", "Cultural Analysis - B3", "HSS/CFA Electives - C", "Free Electives"],
        "department": "PHYAPP",
        "name": "BS in PHYAPP",
        "type": "BS",
        "year": ["2012", "2008", "2002", "2000"]
    }, {
        "requirements": ["Soph. Colloq. I", "Soph. Colloq. II", "Upperclass Colloq. I", "Upperclass Colloq. II", "Experimental Physics", "Physics III", "Physical Analysis", "Electronics", "Math Methods for Physicists", "Quantum Physics", "Physical Mechanics I", "Inter. Elect. & Magnet. I", "Thermal Physics", "Modern Physics Lab", "Stars Galaxies Universe", "Astrophys of Stars & Galaxy", "Ex Astrophys & Cosmology", "Research in Astrophysics", "Calculus in 3D", "Math Electives", "Chemistry I", "Modern Biology", "Calculus", "Physics I", "Physics II", "Computer Science", "Computing Skills", "Designated Writing - A", "Cognition, Choice, Behavior", "Economic, Political, Social", "Cultural Analysis - B3", "HSS/CFA Electives - C", "Technical Electives", "Free Electives"],
        "department": "PHYAST",
        "name": "BS in PHYAST",
        "type": "BS",
        "year": ["2012", "2008", "2002", "2000"]
    }, {
        "requirements": ["Soph. Colloq. I", "Soph. Colloq. II", "Upperclass Colloq. I", "Upperclass Colloq. II", "Experimental Physics", "Physics III", "Physical Analysis", "Electronics", "Math Methods for Physicists", "Quantum Physics", "Physical Mechanics I", "Inter. Elect. & Magnet. I", "Thermal Physics", "Modern Physics Lab", "Physics Electives", "Intro. to Biophysics", "Biochemistry", "Organic Chemistry", "Biology Electives", "Calculus in 3D", "Math Electives", "Chemistry I", "Modern Biology", "Calculus", "Physics I", "Physics II", "Computer Science", "Computing Skills", "Designated Writing - A", "Cognition, Choice, Behavior", "Economic, Political, Social", "Cultural Analysis - B3", "HSS/CFA Electives - C", "Free Electives"],
        "department": "PHYBP",
        "name": "BS in PHYBP",
        "type": "BS",
        "year": ["2012", "2008", "2002", "2000"]
    }, {
        "requirements": ["Soph. Colloq. I", "Soph. Colloq. II", "Upperclass Colloq. I", "Upperclass Colloq. II", "Experimental Physics", "Physics III", "Physical Analysis", "Electronics", "Math Methods for Physicists", "Quantum Physics", "Physical Mechanics I", "Inter. Elect. & Magnet. I", "Thermal Physics", "Modern Physics Lab", "Physics Electives", "Modern Chemistry II", "Physical Chemistry I (Quantu", "Physical Chemistry II (Therm", "Chemistry Electives", "Calculus in 3D", "Math Electives", "Chemistry I", "Modern Biology", "Calculus", "Physics I", "Physics II", "Computer Science", "Computing Skills", "Designated Writing - A", "Cognition, Choice, Behavior", "Economic, Political, Social", "Cultural Analysis - B3", "HSS/CFA Electives - C", "Free Electives"],
        "department": "PHYCHM",
        "name": "BS in PHYCHM",
        "type": "BS",
        "year": ["2012", "2008", "2002", "2000"]
    }, {
        "requirements": ["Soph. Colloq. I", "Soph. Colloq. II", "Upperclass Colloq. I", "Upperclass Colloq. II", "Experimental Physics", "Physics III", "Physical Analysis", "Electronics", "Math Methods for Physicists", "Quantum Physics", "Physical Mechanics I", "Inter. Elect. & Magnet. I", "Thermal Physics", "Modern Physics Lab", "Physics Electives", "Intro. to Computational Phys", "Advanced Computational Physi", "Prin. of Imperative Computat", "Prin. of Functional Programm", "Concepts of Mathematics", "Numerical Methods", "Calculus in 3D", "Chemistry I", "Modern Biology", "Calculus", "Physics I", "Physics II", "Computer Science", "Computing Skills", "Designated Writing - A", "Cognition, Choice, Behavior", "Economic, Political, Social", "Cultural Analysis - B3", "HSS/CFA Electives - C", "Free Electives"],
        "department": "PHYCP",
        "name": "BS in PHYCP",
        "type": "BS",
        "year": ["2012", "2008", "2002", "2000"]
    }, {
        "requirements": ["Modern Biology", "Biochemistry", "Cell Biology", "Genetics", "Biology Electives"],
        "department": "BSC",
        "name": "MINOR in BSC",
        "type": "MINOR",
        "year": ["2008", "2001"]
    }, {
        "requirements": ["Intro to Modern Chemistry", "Lab I", "Organic Chemistry", "Inorganic/Physical Chemistry", "Chemistry Electives"],
        "department": "CMY",
        "name": "MINOR in CMY",
        "year": ["2002"],
        "type": "MINOR",
        "MajorFile": "2002:MCS:MINOR:CMY.MAJ"
    }, {
        "requirements": ["Calc in 3D", "Matrix Algebra", "Intro Math Finance", "Differential Equations", "Disrete Time Finance", "Continuous Time Finance"],
        "department": "COMPFIN",
        "name": "MINOR in COMPFIN",
        "year": ["2002"],
        "type": "MINOR",
        "MajorFile": "2002:MCS:MINOR:COMPFIN.MAJ"
    }, {
        "requirements": ["Physics I", "Physics II", "Physics Lab**", "Physics III", "Physics Electives"],
        "department": "PHY",
        "name": "MINOR in PHY",
        "type": "MINOR",
        "year": ["2012", "2000"]
    }, {
        "requirements": ["Sci Req", "Comp Science", "Comp Methods", "Additional Course"],
        "department": "SCICOM",
        "name": "MINOR in SCICOM",
        "year": ["2001"],
        "type": "MINOR",
        "MajorFile": "2001:MCS:MINOR:SCICOM.MAJ"
    }],
    "TSB": [{
        "requirements": ["Calculus", "Multivariate Analysis", "Prob Stats for Bus", "Optimization", "Regression Analysis", "C@CM", "Programming", "Princ of Economics", "Int Microeconomics", "Int Macroeconomics", "Intro to Accounting", "Organizational Beh", "Bus, Society & Ethics", "Bus Communications", "Bus Presentations", "Operations Mgmt", "Marketing I", "Finance", "Management Info Sys", "Management Game", "1 Additional Course", "1 70-3XX or above"],
        "department": "BA",
        "name": "A_MAJ in BA",
        "type": "A_MAJ",
        "year": ["2012", "2010", "2005", "2003", "2002"]
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob & Stat for Busi", "Comp Skills Workshop", "Intro to World Hist", "Writing/Expression", "Sci & Tech 1 course", "Choice Cog & Behav", "Polit & Soc Instit", "Creat Prod & Reflec", "Cultural Analysis", "Elective 1", "Elective 2", "Intro to Business", "Intro to Accounting", "Org Behavior I", "Business & Society", "Business Comm", "Prod & Oper Mgmt", "Marketing", "Finance I", "Bus Leader or Game", "Manag Info Systems", "Principles of Econ", "Intermed Micro", "Intermed Macro", "Regression", "Prof & Service Prjct", "Oral Communications", "Computing Requirement", "Data Structures", "Sys Anal & Design", "Info Resources Mgmt", "Telecom & Net Mgmt", "Two Electives"],
        "department": "BACIT",
        "name": "A_MAJ in BACIT",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:SIA:A_MAJ:BACIT.MAJ"
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob & Stat for Busi", "Comp Skills Workshop", "Intro to World Hist", "Writing/Expression", "Sci & Tech 1 course", "Choice Cog & Behav", "Polit & Soc Instit", "Creat Prod & Reflec", "Cultural Analysis", "Elective 1", "Elective 2", "Intro to Business", "Intro to Accounting", "Org Behavior I", "Business & Society", "Business Comm", "Prod & Oper Mgmt", "Marketing", "Finance I", "Bus Leader or Game", "Manag Info Systems", "Principles of Econ", "Intermed Micro", "Intermed Macro", "Regression", "Prof & Service Prjct", "Oral Communications", "Computing Requirement", "Entrepreneurship I", "Entrepreneurship II", "Fin Entrepre Ventures", "Marketing Research", "Two Electives"],
        "department": "BAENT",
        "name": "A_MAJ in BAENT",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:SIA:A_MAJ:BAENT.MAJ"
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob & Stat for Busi", "Comp Skills Workshop", "Intro to World Hist", "Writing/Expression", "Sci & Tech 1 course", "Choice Cog & Behav", "Polit & Soc Instit", "Creat Prod & Reflec", "Cultural Analysis", "Elective 1", "Elective 2", "Intro to Business", "Intro to Accounting", "Org Behavior I", "Business & Society", "Business Comm", "Prod & Oper Mgmt", "Marketing", "Finance I", "Bus Leader or Game", "Manag Info Systems", "Principles of Econ", "Intermed Micro", "Intermed Macro", "Regression", "Prof & Service Prjct", "Oral Communications", "Computing Requirement", "6 Finance Electives"],
        "department": "BAFIN",
        "name": "A_MAJ in BAFIN",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:SIA:A_MAJ:BAFIN.MAJ"
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob & Stat for Busi", "Comp Skills Workshop", "Intro to World Hist", "Writing/Expression", "Sci & Tech 1 course", "Choice Cog & Behav", "Polit & Soc Instit", "Creat Prod & Reflec", "Cultural Analysis", "Elective 1", "Elective 2", "Intro to Business", "Intro to Accounting", "Org Behavior I", "Business & Society", "Business Comm", "Prod & Oper Mgmt", "Marketing", "Finance I", "Bus Leader or Game", "Manag Info Systems", "Principles of Econ", "Intermed Micro", "Intermed Macro", "Regression", "Prof & Service Prjct", "Oral Communications", "Computing Requirement", "Intro Graph Comm I", "Intro Graph Comm II", "Four Electives"],
        "department": "BAGCM",
        "name": "A_MAJ in BAGCM",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:SIA:A_MAJ:BAGCM.MAJ"
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob & Stat for Busi", "Comp Skills Workshop", "Intro to World Hist", "Writing/Expression", "Sci & Tech 1 course", "Choice Cog & Behav", "Polit & Soc Instit", "Creat Prod & Reflec", "Cultural Analysis", "Elective 1", "Elective 2", "Intro to Business", "Intro to Accounting", "Org Behavior I", "Business & Society", "Business Comm", "Prod & Oper Mgmt", "Marketing", "Finance I", "Bus Leader or Game", "Manag Info Systems", "Principles of Econ", "Intermed Micro", "Intermed Macro", "Regression", "Prof & Service Prjct", "Oral Communications", "Computing Requirement"],
        "department": "BAGENMAN",
        "name": "A_MAJ in BAGENMAN",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:SIA:A_MAJ:BAGENMAN.MAJ"
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob & Stat for Busi", "Comp Skills Workshop", "Intro to World Hist", "Writing/Expression", "Sci & Tech 1 course", "Choice Cog & Behav", "Polit & Soc Instit", "Creat Prod & Reflec", "Cultural Analysis", "Elective 1", "Elective 2", "Intro to Business", "Intro to Accounting", "Org Behavior I", "Business & Society", "Business Comm", "Prod & Oper Mgmt", "Marketing", "Finance I", "Bus Leader or Game", "Manag Info Systems", "Principles of Econ", "Intermed Micro", "Intermed Macro", "Regression", "Prof & Service Prjct", "Oral Communications", "Computing Requirement", "System Anal & Design", "Math Models/Consult", "Log & Sup Chain Mgmt", "Choose one Elective", "Choose two Electives"],
        "department": "BAIMN",
        "name": "A_MAJ in BAIMN",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:SIA:A_MAJ:BAIMN.MAJ"
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob & Stat for Busi", "Comp Skills Workshop", "Intro to World Hist", "Writing/Expression", "Sci & Tech 1 course", "Choice Cog & Behav", "Polit & Soc Instit", "Creat Prod & Reflec", "Cultural Analysis", "Elective 1", "Elective 2", "Intro to Business", "Intro to Accounting", "Org Behavior I", "Business & Society", "Business Comm", "Prod & Oper Mgmt", "Marketing", "Finance I", "Bus Leader or Game", "Manag Info Systems", "Principles of Econ", "Intermed Micro", "Intermed Macro", "Regression", "Prof & Service Prjct", "Oral Communications", "Computing Requirement", "Mngng Acrss Cultures", "Intl Trade & Intl Law", "Intl Management", "Intl Marketing", "Ind Sty in Intl Mgmt", "Language Proficiency", "Two Electives", "Language Courses Taken"],
        "department": "BAITM",
        "name": "A_MAJ in BAITM",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:SIA:A_MAJ:BAITM.MAJ"
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob & Stat for Busi", "Comp Skills Workshop", "Intro to World Hist", "Writing/Expression", "Sci & Tech 1 course", "Choice Cog & Behav", "Polit & Soc Instit", "Creat Prod & Reflec", "Cultural Analysis", "Elective 1", "Elective 2", "Intro to Business", "Intro to Accounting", "Org Behavior I", "Business & Society", "Business Comm", "Prod & Oper Mgmt", "Marketing", "Finance I", "Bus Leader or Game", "Manag Info Systems", "Principles of Econ", "Intermed Micro", "Intermed Macro", "Regression", "Prof & Service Prjct", "Oral Communications", "Computing Requirement", "Marketing Research", "Choose Three Elects", "Choose Two Electives"],
        "department": "BAMARK",
        "name": "A_MAJ in BAMARK",
        "year": ["2002"],
        "type": "A_MAJ",
        "MajorFile": "2002:SIA:A_MAJ:BAMARK.MAJ"
    }, {
        "requirements": [],
        "department": "BACF",
        "name": "BA in BACF",
        "type": "BA",
        "year": ["2010", "2005"]
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob/Stat for Business", "Regression Analysis", "Computing @ CM", "Programming", "Prin of Economics", "Intermed Microeconomics", "Intermed Macroeconomics", "Global Histories", "Interp & Argument", "Science/Technology", "Cognition & Behavior", "Political & Social", "Creative Production", "Cultural Analysis", "Global Business", "Intro to Accounting", "Organizational Behavior", "Business,Society & Ethics", "Business Communications", "Business Presentations", "Operations Mgmt", "Marketing", "Finance", "Mgmt Info Systems", "Prof Service Project", "Management Game"],
        "department": "BA",
        "name": "BS in BA",
        "type": "BS",
        "year": ["2012", "2010", "2005", "2003", "2002"]
    }, {
        "requirements": ["Calculus", "Integ, Dif Eq & Approx", "Operations Research", "Probability", "Statistical Inference", "Matrices", "Differential Equ", "Intro to Math Finance", "Numerical Methods", "Discrete-Time Finance", "Continuous-Time Finance", "Intro to Prob Models", "Computing", "Adv Programming", "Comp Skills Workshop", "Global Histories", "Interp & Argument", "Science/Technology", "Cognition & Behavior", "Political & Social", "Creative Production", "Cultural Analysis", "Prin of Econ", "Int Microeconomics", "Int Macroeconomics", "Intro to Business", "Intro to Accounting", "Organizational Behavior", "Bus,Society & Ethics", "Strategic Writing Skills", "Strategic Pres Skills", "Oper Mgmt", "Marketing I", "Finance", "Management Game", "Financial Engineering", "Three Courses required"],
        "department": "BACF",
        "name": "BS in BACF",
        "year": ["2012"],
        "type": "BS",
        "MajorFile": "2012:TSB:BS:BACF"
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob/Stat for Business", "Regression Analysis", "Computing @ CM", "Programming", "Prin of Economics", "Intermed Microeconomics", "Intermed Macroeconomics", "Global Histories", "Interp & Argument", "Science/Technology", "Cognition & Behavior", "Political & Social", "Creative Production", "Cultural Analysis", "Global Business", "Intro to Accounting", "Organizational Behavior", "Business,Society & Ethics", "Business Communications", "Business Presentations", "Operations Mgmt", "Marketing", "Finance", "Mgmt Info Systems", "Prof Service Project", "Management Game", "Business Tech Consulting", "Modern Data Mgmt", "Four Electives"],
        "department": "BACIT",
        "name": "BS in BACIT",
        "type": "BS",
        "year": ["2012", "2010", "2005", "2003", "2002"]
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob/Stat for Business", "Regression Analysis", "Computing @ CM", "Programming", "Prin of Economics", "Intermed Microeconomics", "Intermed Macroeconomics", "Global Histories", "Interp & Argument", "Science/Technology", "Cognition & Behavior", "Political & Social", "Creative Production", "Cultural Analysis", "Global Business", "Intro to Accounting", "Organizational Behavior", "Business,Society & Ethics", "Business Communications", "Business Presentations", "Operations Mgmt", "Marketing", "Finance", "Mgmt Info Systems", "Prof Service Project", "Management Game", "Entrepreneurship I", "Entrepreneurship II", "Fin Entrepre Ventures", "Marketing Research", "Two Electives"],
        "department": "BAENT",
        "name": "BS in BAENT",
        "type": "BS",
        "year": ["2012", "2010", "2005", "2003", "2002"]
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob/Stat for Business", "Regression Analysis", "Computing @ CM", "Programming", "Prin of Economics", "Intermed Microeconomics", "Intermed Macroeconomics", "Global Histories", "Interp & Argument", "Science/Technology", "Cognition & Behavior", "Political & Social", "Creative Production", "Cultural Analysis", "Global Business", "Intro to Accounting", "Organizational Behavior", "Business,Society & Ethics", "Business Communications", "Business Presentations", "Operations Mgmt", "Marketing", "Finance", "Mgmt Info Systems", "Prof Service Project", "Management Game", "Investment Analysis", "Corporate Finance", "4 Finance Electives"],
        "department": "BAFIN",
        "name": "BS in BAFIN",
        "type": "BS",
        "year": ["2012", "2010", "2005", "2003", "2002"]
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob/Stat for Business", "Regression Analysis", "Computing @ CM", "Programming", "Prin of Economics", "Intermed Microeconomics", "Intermed Macroeconomics", "Global Histories", "Interp & Argument", "Science/Technology", "Cognition & Behavior", "Political & Social", "Creative Production", "Cultural Analysis", "Global Business", "Intro to Accounting", "Organizational Behavior", "Business,Society & Ethics", "Business Communications", "Business Presentations", "Operations Mgmt", "Marketing", "Finance", "Mgmt Info Systems", "Prof Service Project", "Management Game", "Intro Graphic Communications", "Five Electives"],
        "department": "BAGCM",
        "name": "BS in BAGCM",
        "type": "BS",
        "year": ["2012", "2010", "2005", "2003", "2002"]
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob/Stat for Business", "Regression Analysis", "Computing @ CM", "Programming", "Prin of Economics", "Intermed Microeconomics", "Intermed Macroeconomics", "Global Histories", "Interp & Argument", "Science/Technology", "Cognition & Behavior", "Political & Social", "Creative Production", "Cultural Analysis", "Global Business", "Intro to Accounting", "Organizational Behavior", "Business,Society & Ethics", "Business Communications", "Business Presentations", "Operations Mgmt", "Marketing", "Finance", "Mgmt Info Systems", "Prof Service Project", "Management Game"],
        "department": "BAGENMAN",
        "name": "BS in BAGENMAN",
        "type": "BS",
        "year": ["2012", "2010", "2005", "2003", "2002"]
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob/Stat for Business", "Regression Analysis", "Computing @ CM", "Programming", "Prin of Economics", "Intermed Microeconomics", "Intermed Macroeconomics", "Global Histories", "Interp & Argument", "Science/Technology", "Cognition & Behavior", "Political & Social", "Creative Production", "Cultural Analysis", "Global Business", "Intro to Accounting", "Organizational Behavior", "Business,Society & Ethics", "Business Communications", "Business Presentations", "Operations Mgmt", "Marketing", "Finance", "Mgmt Info Systems", "Prof Service Project", "Management Game", "Intro Graphic Communications", "Five Electives"],
        "department": "BAGMM",
        "name": "BS in BAGMM",
        "type": "BS",
        "year": ["2014"]
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob/Stat for Business", "Regression Analysis", "Computing @ CM", "Programming", "Prin of Economics", "Intermed Microeconomics", "Intermed Macroeconomics", "Global Histories", "Interp & Argument", "Science/Technology", "Cognition & Behavior", "Political & Social", "Creative Production", "Cultural Analysis", "Global Business", "Intro to Accounting", "Organizational Behavior", "Business,Society & Ethics", "Business Communications", "Business Presentations", "Operations Mgmt", "Marketing", "Finance", "Mgmt Info Systems", "Prof Service Project", "Management Game", "Bus Tech for Consulting", "Math Models for Consulting", "Supply Chain Mgmt", "Choose one Elective", "Choose two Electives"],
        "department": "BAIMN",
        "name": "BS in BAIMN",
        "type": "BS",
        "year": ["2012", "2010", "2003", "2002"]
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob/Stat for Business", "Regression Analysis", "Computing @ CM", "Programming", "Prin of Economics", "Intermed Microeconomics", "Intermed Macroeconomics", "Global Histories", "Interp & Argument", "Science/Technology", "Cognition & Behavior", "Political & Social", "Creative Production", "Cultural Analysis", "Global Business", "Intro to Accounting", "Organizational Behavior", "Business,Society & Ethics", "Business Communications", "Business Presentations", "Operations Mgmt", "Marketing", "Finance", "Mgmt Info Systems", "Prof Service Project", "Management Game", "Mngng Acrss Cultures", "Intl Trade & Intl Law", "Intl Management", "Intl Marketing", "Ind Sty in Intl Mgmt", "Language Proficiency", "Two Electives"],
        "department": "BAITM",
        "name": "BS in BAITM",
        "type": "BS",
        "year": ["2012", "2010", "2005", "2003", "2002"]
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob/Stat for Business", "Regression Analysis", "Computing @ CM", "Programming", "Prin of Economics", "Intermed Microeconomics", "Intermed Macroeconomics", "Global Histories", "Interp & Argument", "Science/Technology", "Cognition & Behavior", "Political & Social", "Creative Production", "Cultural Analysis", "Global Business", "Intro to Accounting", "Organizational Behavior", "Business,Society & Ethics", "Business Communications", "Business Presentations", "Operations Mgmt", "Marketing", "Finance", "Mgmt Info Systems", "Prof Service Project", "Management Game", "Marketing Research", "Choose Three Elects", "Choose Two Electives"],
        "department": "BAMARK",
        "name": "BS in BAMARK",
        "type": "BS",
        "year": ["2012", "2010", "2005", "2003", "2002"]
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob/Stat for Business", "Regression Analysis", "Computing @ CM", "Programming", "Prin of Economics", "Intermed Microeconomics", "Intermed Macroeconomics", "Global Histories", "Interp & Argument", "Science/Technology", "Cognition & Behavior", "Political & Social", "Creative Production", "Cultural Analysis", "Global Business", "Intro to Accounting", "Organizational Behavior", "Business,Society & Ethics", "Business Communications", "Business Presentations", "Operations Mgmt", "Marketing", "Finance", "Mgmt Info Systems", "Prof Service Project", "Management Game", "Business Tech Consulting", "Modern Data Mgmt", "Four Electives"],
        "department": "BATECH",
        "name": "BS in BATECH",
        "type": "BS",
        "year": ["2014"]
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob & Stat for Busi", "Regression", "Comp Skills Workshop", "Intro to World Hist", "Interp/Argument", "Computing", "Sci & Tech 1 course", "Choice Cog & Behav", "Polit & Soc Instit", "Creat Prod & Reflec", "Cultural Analysis", "Choose 2", "Intro to Business", "Intro to Accounting", "Prof & Service Prjct", "Org Behavior I", "Bus,Society & Ethics", "Bus Communications", "Oral Communications", "Prod & Oper Mgmt", "Marketing I", "Finance I", "Corp Strat or Game", "Manag Info Systems", "Principles of Econ", "Economic Theory", "Macroeconomics", "System Anal & Design", "Math Models/Consult", "Log & Sup Chain Mgmt", "Choose one Elective", "Choose two Electives"],
        "department": "BSIMN",
        "name": "BS in BSIMN",
        "year": ["2005"],
        "type": "BS",
        "MajorFile": "2005:SIA:BS:BAIMN.MAJ"
    }, {
        "requirements": [],
        "department": "INTLMGT",
        "name": "BS in INTLMGT",
        "type": "BS",
        "year": ["2005", "2003"]
    }, {
        "requirements": ["Calculus", "Multivariate Analysis", "Optimization", "Prob & Stat for Busi", "Intro to World Hist", "Writing/Expression", "Computing Requirement", "Sci & Tech 1 course", "Choice Cog & Behav", "Polit & Soc Instit", "Creat Prod & Reflec", "Cultural Analysis", "Elective 1", "Elective 2", "Intro to Business", "Intro to Accounting", "Org Behavior I", "Business & Society", "Business Comm", "Prod & Oper Mgmt", "Marketing", "Finance I", "Bus Leader or Game", "Manag Info Systems", "Principles of Econ", "Intermed Micro", "Intermed Macro", "Regression", "Prof & Service Prjct", "Oral Communications", "General Mgmt Electives"],
        "department": "QBA",
        "name": "BS in QBA",
        "year": ["2005"],
        "type": "BS",
        "MajorFile": "2005:TSB:BS:QBAGENMAN.MAJ"
    }, {
        "requirements": ["Marketing", "Princ of Econ", "4 business courses"],
        "department": "BA",
        "name": "MINOR in BA",
        "type": "MINOR",
        "year": ["2012", "2010", "2005", "2003", "2002"]
    }, {
        "requirements": [],
        "department": "BA-CFA",
        "name": "MINOR in BA-CFA",
        "type": "MINOR",
        "year": ["2010", "2005", "2003"]
    }, {
        "requirements": ["Engineering Project Course", "Principles of Econ", "Oper Research I", "Prod & Oper Mgmt", "Log & Sup Chn Mgmt", "Choose One Elective"],
        "department": "BA-CIT",
        "name": "MINOR in BA-CIT",
        "type": "MINOR",
        "year": ["2012", "2010", "2005", "2003"]
    }, {
        "requirements": [],
        "department": "BAIMN",
        "name": "MINOR in BAIMN",
        "year": ["2002"],
        "type": "MINOR",
        "MajorFile": "2002:SIA:MINOR:BAIMN.MAJ"
    }, {
        "requirements": ["Portal Course", "Principles of Economics", "Entrep or Venture Creation", "Integrative Design Course", "Collaborative/Supportive"],
        "department": "ECI",
        "name": "MINOR in ECI",
        "year": ["2014"],
        "type": "MINOR",
        "MajorFile": "2014:TSB:MINOR:ECI.MAJ"
    }, {
        "requirements": [],
        "department": "INTLMGMT",
        "name": "MINOR in INTLMGMT",
        "year": ["2005"],
        "type": "MINOR",
        "MajorFile": "2005:SIA:MINOR:INTLMGMT.MAJ"
    }, {
        "requirements": ["Principles of Economics", "Introduction to Accounting", "Marketing", "Business,Society,&Ethics;", "Managing Across Cultures", "Intl Trade & Intl Law", "Intl Management", "Intl Marketing", "Ind Sty in Intl Mgmt", "Language Proficiency"],
        "department": "INTLMGT",
        "name": "MINOR in INTLMGT",
        "year": ["2003"],
        "type": "MINOR",
        "MajorFile": "2003:SIA:MINOR:INTLMGT.MAJ"
    }]
};


var courses={"03050":{"name":"Study Abroad","number":"03050","units":0,"blurb":"Missing Course Description - please contact the teaching department."},"03115":{"name":"Phage Genomics Research","number":"03115","units":6,"blurb":"This course will provide an introduction to biological investigation through a research project i..."},"03121":{"name":"Modern Biology","number":"03121","units":9,"blurb":"This is an introductory course that provides the basis for further studies in biochemistry, cell ..."},"03124":{"name":"Modern Biology Laboratory","number":"03124","units":9,"blurb":"This laboratory is designed to introduce students to modern concepts in the biological sciences. ..."},"03125":{"name":"Evolution","number":"03125","units":9,"blurb":"Evolutionary theory is the unifying principle of biology. A good comprehension of the concepts th..."},"03131":{"name":"Genes Drugs & Diseases","number":"03131","units":9,"blurb":"The central goals of this course are to explore the genetic basis of diseases and to explain the ..."},"03132":{"name":"Basic Science to Modern Medicine","number":"03132","units":9,"blurb":"This course will focus on the genetics, cell biology, and developmental biology behind human biol..."},"03151":{"name":"Honors Modern Biology","number":"03151","units":10,"blurb":"This course will cover in some depth, the basics of the structure and function of the major biomo..."},"03201":{"name":"Undergraduate Colloquium for Sophomores","number":"03201","units":0,"blurb":"The purpose of this seminar series is to update biology undergraduates about university and depar..."},"03206":{"name":"Biomedical Engineering Laboratory","number":"03206","units":9,"blurb":"This laboratory course is designed to provide students with the ability to make measurements on a..."},"03210":{"name":"Independent Study","number":"03210","units":0,"blurb":"Students will read papers from the original literature under the direction of a faculty member. S..."},"03231":{"name":"Biochemistry I","number":"03231","units":9,"blurb":"This course provides an introduction to molecules and processes found in living systems. Amino ac..."},"03232":{"name":"Biochemistry I","number":"03232","units":9,"blurb":"This course provides an introduction to the application of biochemistry to biotechnology. The fun..."},"03260":{"name":"Neurobiology of Disease","number":"03260","units":9,"blurb":"This course will explore the biological basis of several neurological and neuropsychiatric diseas..."},"03301":{"name":"Undergraduate Colloquium for Juniors","number":"03301","units":0,"blurb":"The purpose of this seminar series is to update biology undergraduates about university and depar..."},"03326":{"name":"Evolution of Regulatory Genomics","number":"03326","units":4.5,"blurb":"This course will examine the processes by which genomes evolve and how this genetic variation lea..."},"03327":{"name":"Phylogenetics","number":"03327","units":9,"blurb":"An advanced introduction to theory and practice of phylogenetic analysis (evolutionary tree recon..."},"03330":{"name":"Genetics","number":"03330","units":9,"blurb":"The mechanisms of transmission of inherited traits in viruses, bacteria, fungi, plants and animal..."},"03342":{"name":"Introduction to Biological Laboratory Practices","number":"03342","units":1,"blurb":"This course is designed for students in the BS in Computational Biology degree program. It is a r..."},"03343":{"name":"Experimental Techniques in Molecular Biology","number":"03343","units":12,"blurb":"This laboratory course is designed to teach experimental methods of modern biology. Experiments i..."},"03350":{"name":"Developmental Biology","number":"03350","units":9,"blurb":"How does a complex, multicellular organism arise from a single cell? How do cells with identical ..."},"03362":{"name":"Cellular Neuroscience","number":"03362","units":9,"blurb":"Modern neuroscience is an interdisciplinary field that seeks to understand the function of the br..."},"03363":{"name":"Systems Neuroscience","number":"03363","units":9,"blurb":"Modern neuroscience is an interdisciplinary field that seeks to understand the function of the br..."},"03364":{"name":"Developmental Neuroscience","number":"03364","units":9,"blurb":"This course examines the principles that govern the developmental assembly of a complex nervous s..."},"03401":{"name":"Undergraduate Colloquium for Seniors","number":"03401","units":0,"blurb":"The purpose of this seminar series is to update biology undergraduates about university and depar..."},"03410":{"name":"Special Topics in Biological Sciences","number":"03410","units":0,"blurb":"Special Topics in Biological Sciences. Topics will vary depending on the semester and instructor...."},"03411":{"name":"Topics in Research","number":"03411","units":0,"blurb":"During the year students attend and submit brief summaries of weekly seminars given by outside sp..."},"03439":{"name":"Introduction to Biophysics","number":"03439","units":9,"blurb":"This intermediate level course is primarily offered to Physics and Biology undergrads (junior/sen..."},"03442":{"name":"Molecular Biology","number":"03442","units":9,"blurb":"The structure and expression of eukaryotic genes are discussed, focusing on model systems from a ..."},"03445":{"name":"Undergraduate Research","number":"03445","units":0,"blurb":"Students may investigate research problems under the supervision of members of the faculty. Permi..."},"03451":{"name":"Advanced Developmental Biology and Human Health","number":"03451","units":9,"blurb":"This course will examine current research in developmental biology, focusing on areas that have i..."},"03511":{"name":"Computational Molecular Biology and Genomics","number":"03511","units":9,"blurb":"An advanced introduction to computational molecular biology, using an applied algorithms approach..."},"03512":{"name":"Computational Methods for Biological Modeling and Simulation","number":"03512","units":9,"blurb":"This course covers a variety of computational methods important for modeling and simulation of bi..."},"03534":{"name":"Biological Imaging and Fluorescence Spectroscopy","number":"03534","units":9,"blurb":"This course covers principles and applications of optical methods in the study of structure and f..."},"03601":{"name":"Computational Biology Internship","number":"03601","units":0,"blurb":"This course allows a student to gain computational biology experience in a \"real-world\" setting. ..."},"03700":{"name":"MS Thesis Research","number":"03700","units":0,"blurb":"A student enrolled in this course conducts an independent investigation on a project in a faculty..."},"03709":{"name":"Applied Cell and Molecular Biology","number":"03709","units":12,"blurb":"The purpose of this course is to review key cellular and molecular phenomenon in biological pathw..."},"03711":{"name":"Computational Molecular Biology and Genomics","number":"03711","units":12,"blurb":"An advanced introduction to computational molecular biology, using an applied algorithms approach..."},"03712":{"name":"Computational Methods for Biological Modeling and Simulation","number":"03712","units":12,"blurb":"This course covers a variety of computational methods important for modeling and simulation of bi..."},"03726":{"name":"Evolution of Regulatory Genomics","number":"03726","units":6,"blurb":"This course in will examine the processes by which genomes evolve and how this genetic variation ..."},"03727":{"name":"Phylogenetics","number":"03727","units":12,"blurb":"An advanced introduction to theory and practice of phylogenetic analysis (evolutionary tree recon..."},"03742":{"name":"Molecular Biology","number":"03742","units":12,"blurb":"The structure and expression of eukaryotic genes are discussed, focusing on model systems from a ..."},"03745":{"name":"Core Course in Biochemistry","number":"03745","units":6,"blurb":"This course is designed to provide first year doctoral students in the Department of Biological S..."},"03746":{"name":"Core Course in Cell Biology","number":"03746","units":6,"blurb":"This course is designed to provide first year doctoral students in the Department of Biological S..."},"03747":{"name":"Proposal Preparation and Peer Review","number":"03747","units":4,"blurb":"The concise and clear presentation of an experimental research plan is an essential skill for res..."},"03750":{"name":"Graduate Seminar","number":"03750","units":1,"blurb":"Each semester, all Department of Biological Sciences graduate students are required to register f..."},"03751":{"name":"Advanced Developmental Biology and Human Health","number":"03751","units":12,"blurb":"This course will examine current research in developmental biology, focusing on areas that have i..."},"03755":{"name":"Graduate Research Seminar","number":"03755","units":3,"blurb":"Each semester, all Departmental of Biological Sciences graduate students are required to register..."},"03762":{"name":"Advanced Cellular Neuroscience","number":"03762","units":12,"blurb":"This course is an introductory graduate course in cellular neuroscience. As such it will assume l..."},"03871":{"name":"Structural Biophysics","number":"03871","units":12,"blurb":"The physical properties of biological macromolecules and the methods used to analyze their struct..."},"03900":{"name":"Doctoral Thesis Research","number":"03900","units":0,"blurb":"Doctoral Thesis Research consists of an independent investigation on a project selected from a ma..."},"06100":{"name":"Introduction to Chemical Engineering","number":"06100","units":12,"blurb":"We equip students with creative engineering problem-solving techniques and fundamental chemical e..."},"06200":{"name":"Sophomore Research Project","number":"06200","units":0,"blurb":"Research projects under the direction of the Chemical Engineering faculty. The nature of the proj..."},"06221":{"name":"Thermodynamics","number":"06221","units":9,"blurb":"This course introduces students to the process thermodynamics of single component systems. Topics..."},"06222":{"name":"Sophomore Chemical Engineering Seminar","number":"06222","units":1,"blurb":"This course provides an overview of the chemical engineering profession. It discusses the rationa..."},"06300":{"name":"Junior Research Project","number":"06300","units":0,"blurb":"Research projects under the direction of the Chemical Engineering faculty. The nature of the proj..."},"06321":{"name":"Chemical Engineering Thermodynamics","number":"06321","units":9,"blurb":"The objective of this course is to cover principles and solution techniques for phase and chemica..."},"06322":{"name":"Junior Chemical Engineering Seminar","number":"06322","units":2,"blurb":"This course discusses career choices for chemical engineers, professional practice, including alt..."},"06323":{"name":"Heat and Mass Transfer","number":"06323","units":9,"blurb":"This course presents the fundamentals of heat and mass transfer, including steady-state and trans..."},"06400":{"name":"Senior Research Project","number":"06400","units":0,"blurb":"Research projects under the direction of the Chemical Engineering faculty. The nature of the proj..."},"06421":{"name":"Chemical Process Systems Design","number":"06421","units":12,"blurb":"Screening of processing alternatives. Computational strategies for preliminary material and energ..."},"06423":{"name":"Unit Operations Laboratory","number":"06423","units":9,"blurb":"Open-ended laboratory projects illustrate the principles of unit operations in Chemical Engineeri..."},"06426":{"name":"Experimental Colloid Surface Science","number":"06426","units":9,"blurb":"Laboratory exercises will deal with preparation and stabilization of colloids, flocculation, mice..."},"06606":{"name":"Computational Methods for Large Scale Process Design & Analysis","number":"06606","units":9,"blurb":"This course deals with the underlying computer-aided design techniques for steady-state and dynam..."},"06608":{"name":"Safety Issues in Science and Engineering Practice","number":"06608","units":3,"blurb":"Exposes the students to personal safety issues encountered in normal science and engineering prac..."},"06609":{"name":"Physical Chemistry of Macromolecules","number":"06609","units":9,"blurb":"This course develops fundamental principles of polymer science. Emphasis is placed on physio-chem..."},"06610":{"name":"Rheology and Structure of Complex Fluids","number":"06610","units":9,"blurb":"This course will cover the basic concepts of rheology and mechanical behavior of fluid systems. B..."},"09103":{"name":"Atoms, Molecules and Chemical Change","number":"09103","units":9,"blurb":"This is a one-semester introductory college level course designed for non-science and engineering..."},"09105":{"name":"Introduction to Modern Chemistry I","number":"09105","units":10,"blurb":"This course begins with a very brief survey of some fundamental principles of chemistry and a pre..."},"09106":{"name":"Modern Chemistry II","number":"09106","units":10,"blurb":"This course provides an overview of thermodynamics, kinetics and chemical equilibrium. Topics inc..."},"09107":{"name":"Honors Chemistry: Fundamentals, Concepts and Applications","number":"09107","units":10,"blurb":"Honors Chemistry is an introductory course that teaches the foundations of Modern Chemistry and a..."},"09122":{"name":"Molecular Tools for Biological and Chemical Studies","number":"09122","units":6,"blurb":"The increased fluorescence of certain molecules, also known as dyes, can signal their binding to ..."},"09201":{"name":"Undergraduate Seminar I","number":"09201","units":1,"blurb":"Issues and topics of importance to beginning chemistry majors are discussed in this course. It pr..."},"09217":{"name":"Organic Chemistry I","number":"09217","units":9,"blurb":"This course presents an overview of structure and bonding as it pertains to organic molecules. Se..."},"09219":{"name":"Modern Organic Chemistry","number":"09219","units":10,"blurb":"Traditional introductory organic chemistry courses present structure, reactivity, mechanisms and ..."},"09221":{"name":"Laboratory I:  Introduction to Chemical Analysis","number":"09221","units":12,"blurb":"This course is the first in a sequence of four laboratory courses on experimental aspects of chem..."},"09222":{"name":"Laboratory II: Organic Synthesis and Analysis","number":"09222","units":12,"blurb":"In this second course in the laboratory sequence, students acquire laboratory skills relevant to ..."},"09231":{"name":"Mathematical Methods for Chemists","number":"09231","units":9,"blurb":"This course covers mathematical techniques that are important in the chemical sciences. The techn..."},"09301":{"name":"Undergraduate Seminar III","number":"09301","units":1,"blurb":"Students attend seminars on current topics in chemistry. Students are sent a menu of choices for ..."},"09321":{"name":"Laboratory III: Molecular Design and Synthesis","number":"09321","units":12,"blurb":"In this third course in the laboratory sequence, students will learn a variety of more advanced t..."},"09323":{"name":"Bioorganic Chemistry Laboratory","number":"09323","units":12,"blurb":"Bioorganic chemistry is concerned with the action of synthesized compounds on biological systems...."},"09344":{"name":"Physical Chemistry (Quantum): Microscopic Principles of Physical Chemistry","number":"09344","units":9,"blurb":"The measurement and theoretical description of the properties of atoms and molecules are presente..."},"09347":{"name":"Advanced Physical Chemistry","number":"09347","units":12,"blurb":"09-347 Advanced Physical Chemistry Fall: 12 units A course of study designed to provide the micro..."},"09401":{"name":"Undergraduate Seminar V","number":"09401","units":1,"blurb":"Students attend seminars on current topics in chemistry. Students are sent a menu of choices for ..."},"09402":{"name":"Undergraduate Seminar VI","number":"09402","units":3,"blurb":"Students enrolled in this course present a 20 - 30 minute oral report on a current topic in chemi..."},"09435":{"name":"Independent Study Chemistry","number":"09435","units":0,"blurb":"The course allows students to earn academic credit for concentrated study in a topic area develop..."},"09445":{"name":"Undergraduate Research","number":"09445","units":0,"blurb":"Properly qualified students may undertake research projects under the direction of members of the..."},"09455":{"name":"Honors Thesis","number":"09455","units":0,"blurb":"Students enrolled in the departmental honors program (B.S. with Departmental Honors or combined 4..."},"09507":{"name":"Nanoparticles","number":"09507","units":9,"blurb":"This course discusses the chemistry, physics, and biology aspects of several major types of nanop..."},"09509":{"name":"Physical Chemistry of Macromolecules","number":"09509","units":9,"blurb":"This course develops fundamental principles of polymer science. Emphasis is placed on physio-chem..."},"09519":{"name":"Bioorganic Chemistry: Peptides, Proteins and Combinatorial Chemistry","number":"09519","units":9,"blurb":"This course will introduce students to new developments in chemistry and biology, with emphasis o..."},"09522":{"name":"Oxidation and Inorganic Chemistry","number":"09522","units":9,"blurb":"The roles of metal complexes in chemical and biochemical oxidations will be presented. Special at..."},"09701":{"name":"Quantum Chemistry I","number":"09701","units":12,"blurb":"The main topics to be covered will include exploration of the Schroedinger equation, operators, p..."},"09711":{"name":"Physical Organic Chemistry","number":"09711","units":12,"blurb":"This course introduces students to the study of structure and reactivity of organic compounds fro..."},"09720":{"name":"Physical Inorganic Chemistry","number":"09720","units":12,"blurb":"This course develops the principles of magnetochemistry and inorganic spectroscopy. Electronic ab..."},"12100":{"name":"Introduction to Civil and Environmental Engineering","number":"12100","units":12,"blurb":"Introduction to selected subfields in the discipline, such as structural engineering, constructio..."},"12201":{"name":"Geology","number":"12201","units":9,"blurb":"Introduction to physical geology; common rocks and rock-forming minerals and their chemical compo..."},"12212":{"name":"Statics","number":"12212","units":9,"blurb":"Introduction to vector mechanics; equivalent systems of forces; equilibrium of rigid bodies; free..."},"12215":{"name":"Introduction to Professional Writing in CEE","number":"12215","units":3,"blurb":"The objective of the course is to prepare students for writing technical reports and essays assig..."},"12231":{"name":"Solid Mechanics","number":"12231","units":9,"blurb":"Analysis of deformable bodies incorporating concepts of stress, strain, mechanical properties of ..."},"12232":{"name":"Solid Mechanics Lab","number":"12232","units":3,"blurb":"Analysis of stress-strain relationships, torsion of solid shafts, deformation due to bending, def..."},"12271":{"name":"Introduction to Computer Application in Civil & Environmental Engineering","number":"12271","units":9,"blurb":"Introduction to the use of computer-based applications in civil engineering, using generic tools ..."},"12301":{"name":"Civil Environmental Engineering Projects","number":"12301","units":9,"blurb":"Basic elements of civil and environmental engineering projects, from project conception through d..."},"12335":{"name":"Soil Mechanics","number":"12335","units":9,"blurb":"Sampling, testing and identification of soils. Physical, chemical and hydraulic characteristics. ..."},"12336":{"name":"Soil Mechanics Laboratory","number":"12336","units":3,"blurb":"Examination of material properties and behavior of soils. Experiments include soil classification..."},"12351":{"name":"Environmental Engineering","number":"12351","units":9,"blurb":"Provides a scientific and engineering basis for understanding environmental issues and problems. ..."},"12352":{"name":"Environmental Engineering Lab","number":"12352","units":3,"blurb":"(Required for CEE students, not for others) Laboratory and field experiments that illustrate the ..."},"12355":{"name":"Fluid Mechanics","number":"12355","units":9,"blurb":"Fluid characteristics; continuity, momentum and energy equations; dynamic similitude; laminar and..."},"12356":{"name":"Fluid Mechanics Lab","number":"12356","units":3,"blurb":"Fluid properties: density, specific gravity, viscosity; fluid characteristics; continuity, conser..."},"12358":{"name":"Materials Lab","number":"12358","units":3,"blurb":"Examination of materials properties and behavior of concrete, masonry, and timber."},"12401":{"name":"Civil & Environmental Engineering Design","number":"12401","units":15,"blurb":"Methodology for formulating and solving design problems, characterized by incomplete specificatio..."},"12411":{"name":"Project Management for Construction","number":"12411","units":9,"blurb":"Introduction to construction project management from owner's perspective in organizing planning, ..."},"12421":{"name":"Engineering Economics","number":"12421","units":6,"blurb":"Basic concepts of economic analysis and evaluation of alternative engineering projects for capita..."},"12600":{"name":"AutoCAD","number":"12600","units":3,"blurb":"Fall 2015 AutoCAD will be a mostly online course. The course provides an introduction to the fund..."},"12604":{"name":"Transportation Engineering","number":"12604","units":9,"blurb":"Introduction to traffic engineering and highway design providing practical experience that can be..."},"12629":{"name":"Environmental Microbiology for Engineers","number":"12629","units":9,"blurb":"This class provides a general introduction to microorganisms in natural and engineered environmen..."},"12631":{"name":"Structural Design","number":"12631","units":12,"blurb":"Design of structural members for bending moment, shear force, axial force, and combined axial for..."},"12635":{"name":"Structural Analysis","number":"12635","units":9,"blurb":"Classical and matrix-based methods of structural analysis; energy principles in structural mechan..."},"12636":{"name":"Geotechnical Engineering","number":"12636","units":9,"blurb":"Behavior of geotechnical structures; engineering design of geotechnical structures considering fa..."},"12648":{"name":"CEE Senior Research Project","number":"12648","units":0,"blurb":"This course is designed to give students the opportunity to work on an open-ended project under t..."},"12651":{"name":"Air Quality Engineering","number":"12651","units":9,"blurb":"The course provides a quantitative introduction to the processes that control atmospheric polluta..."},"12657":{"name":"Water Resource Systems Engineering","number":"12657","units":9,"blurb":"Principles and applications of open channel flow. Hydrology of surface and ground water sources a..."},"12659":{"name":"Special Topics: Matlab","number":"12659","units":6,"blurb":"This mini course is designed to be a practical introduction to engineering scientific computation..."},"12686":{"name":"Special Topics: Computational Materials Modeling for Structures","number":"12686","units":12,"blurb":"The course examines current mathematical models for the macroscopic response of metals, rocks, so..."},"12690":{"name":"Independent Study","number":"12690","units":0,"blurb":"In-depth investigation of a special topic in Civil and Environmental Engineering under the direct..."},"12702":{"name":"Fundamentals of Water Quality Engineering","number":"12702","units":12,"blurb":"This course is a systematic overview of water quality engineering designed for students with no p..."},"12704":{"name":"Probability and Estimation Methods for Engineering Systems","number":"12704","units":12,"blurb":"Overview of rules of probability, random variables, probability distribution functions, and rando..."},"12712":{"name":"Introduction to Sustainable Engineering","number":"12712","units":12,"blurb":"This course begins with an overview of the concept of sustainability, including changing attitude..."},"12714":{"name":"Environmental Life Cycle Assessment","number":"12714","units":12,"blurb":"Cradle-to-grave analysis of new products, processes and policies is important to avoid undue envi..."},"12718":{"name":"Environmental Engineering, Sustainability, and Science Project","number":"12718","units":12,"blurb":"This course integrates and exercises students in a significant sustainable engineering and/or env..."},"12720":{"name":"Water Resources Chemistry","number":"12720","units":12,"blurb":"This course provides a rigorous yet practical basis for applying the principles of physical chemi..."},"12725":{"name":"Fate, Transport & Physicochemical Processes of Orgnc Contaminants in Aqua Systms","number":"12725","units":12,"blurb":"Examination of the major physical and chemical processes affecting the fate and treatment of orga..."},"12740":{"name":"Data Acquisition","number":"12740","units":6,"blurb":"The intent of this course is to introduce students to the concepts, approaches and implementation..."},"12741":{"name":"Data Management","number":"12741","units":6,"blurb":"The intent of this course is to introduce students to database management systems and to knowledg..."},"12746":{"name":"Special Topics: Fundamental Python Prototyping for Infrastructure Systems","number":"12746","units":6,"blurb":"This course uses the Python programming language to introduce fundamental programming approaches ..."},"12747":{"name":"Special Topics: Sustainable Buildings","number":"12747","units":6,"blurb":"This course will cover the basics of the design, retrofit and monitoring of buildings to achieve ..."},"12748":{"name":"Special Topics: Mechanical and Electrical System Design for Buildings","number":"12748","units":6,"blurb":"Class will cover HVAC, Electrical, and Plumbing systems for buildings. We will calculate heat los..."},"12752":{"name":"Special Topics: Data-Driven Building Energy Management","number":"12752","units":6,"blurb":"This course will introduce students to a variety of data acquisition and analysis techniques requ..."},"12755":{"name":"Finite Elements in Mechanics I","number":"12755","units":12,"blurb":"The basic theory and applications of the finite element method in mechanics are presented. Develo..."},"12798":{"name":"Special Topics: Professional Communication for CEE Grad Students","number":"12798","units":3,"blurb":"The course reviews skills and techniques for preparing technical documents, professional letters,..."},"15050":{"name":"Study Abroad","number":"15050","units":0,"blurb":"Students who are interested in studying abroad should first contact the Office of International E..."},"15075":{"name":"Computer Science Co-Op","number":"15075","units":0,"blurb":"This course is meant for CS undergraduate students with a full-time internship that encompasses a..."},"15090":{"name":"Computer Science Practicum","number":"15090","units":3,"blurb":"This course is for international students who are interested in working for Curricular Practical ..."},"15104":{"name":"Introduction to Computing for Creative Practice","number":"15104","units":10,"blurb":"[IDeATe portal course] An introduction to fundamental computing principles and programming techni..."},"15110":{"name":"Principles of Computing","number":"15110","units":10,"blurb":"A course in fundamental computing principles for students with minimal or no computing background..."},"15112":{"name":"Fundamentals of Programming and Computer Science","number":"15112","units":12,"blurb":"A technical introduction to the fundamentals of programming with an emphasis on producing clear, ..."},"15121":{"name":"Introduction to Data Structures","number":"15121","units":10,"blurb":"A continuation of the process of program design and analysis for students with some prior program..."},"15122":{"name":"Principles of Imperative Computation","number":"15122","units":10,"blurb":"For students with a basic understanding of programming (variables, expressions, loops, arrays, fu..."},"15128":{"name":"Freshman Immigration Course","number":"15128","units":1,"blurb":"The Freshman Immigration Course is taken by first-semester Computer Science majors on the Pittsbu..."},"15129":{"name":"Freshman Immigration Course II","number":"15129","units":3,"blurb":"This course is ONLY offered at Carnegie Mellon in Qatar. Students and instructors will solve diff..."},"15131":{"name":"Great Practical Ideas for Computer Scientists","number":"15131","units":2,"blurb":"THIS COURSE IS OPEN TO CS FRESHMAN ONLY. Throughout your education as a Computer Scientist at Car..."},"15150":{"name":"Principles of Functional Programming","number":"15150","units":10,"blurb":"An introduction to programming based on a \"functional\" model of computation. The functional model..."},"15199":{"name":"Special Topics: Discovering Logic","number":"15199","units":3,"blurb":"This course is ONLY offered at Carnegie Mellon in Qatar. This course has the purpose of introduci..."},"15210":{"name":"Parallel and Sequential Data Structures and Algorithms","number":"15210","units":12,"blurb":"Teaches students about how to design, analyze, and program algorithms and data structures. The co..."},"15213":{"name":"Introduction to Computer Systems","number":"15213","units":12,"blurb":"15213/18213 This course provides a programmer's view of how computer systems execute programs, st..."},"15214":{"name":"Principles of Software Construction: Objects, Design, and Concurrency","number":"15214","units":12,"blurb":"Software engineers today are less likely to design data structures and algorithms from scratch an..."},"15221":{"name":"Technical Communication for Computer Scientists","number":"15221","units":9,"blurb":"The course is designed for sophomore computer science majors to improve their abilities in practi..."},"15251":{"name":"Great Theoretical Ideas in Computer Science","number":"15251","units":12,"blurb":"This course is about how to use theoretical ideas to formulate and solve problems in computer sci..."},"15294":{"name":"Special Topic: Rapid Prototyping Technologies","number":"15294","units":5,"blurb":"This mini-course introduces students to rapid prototyping technologies with a focus on laser cutt..."},"15295":{"name":"Competition Programming and Problem Solving","number":"15295","units":5,"blurb":"Each year, Carnegie Mellon fields two teams for participation in the ACM-ICPC Regional Programmin..."},"15300":{"name":"Research and Innovation in Computer Science","number":"15300","units":9,"blurb":"This Fall course is the first part of a two-course sequence that is designed to help prepare stud..."},"15312":{"name":"Foundations of Programming Languages","number":"15312","units":12,"blurb":"This course discusses in depth many of the concepts underlying the design, definition, implementa..."},"15313":{"name":"Foundations of Software Engineering","number":"15313","units":12,"blurb":"Students gain exposure to the fundamentals of modern software engineering. This includes both cor..."},"15317":{"name":"Constructive Logic","number":"15317","units":9,"blurb":"This multidisciplinary junior-level course is designed to provide a thorough introduction to mode..."},"15319":{"name":"Cloud Computing","number":"15319","units":9,"blurb":"This course gives students an overview of Cloud Computing, which is the delivery of computing as ..."},"15322":{"name":"Introduction to Computer Music","number":"15322","units":9,"blurb":"Computers are used to synthesize sound, process signals, and compose music. Personal computers ha..."},"15348":{"name":"Embedded Systems","number":"15348","units":9,"blurb":"This course is ONLY offered at Carnegie Mellon in Qatar. This course covers the broad range of fo..."},"15351":{"name":"Algorithms and Advanced Data Structures","number":"15351","units":12,"blurb":"The objective of this course is to study algorithms for general computational problems, with a fo..."},"15354":{"name":"Computational Discrete Mathematics","number":"15354","units":12,"blurb":"This course is about the computational aspects of some of the standard concepts of discrete mathe..."},"15355":{"name":"Modern Computer Algebra","number":"15355","units":9,"blurb":"The goal of this course is to investigate the relationship between algebra and computation. The c..."},"15359":{"name":"Probability and Computing","number":"15359","units":12,"blurb":"Probability theory has become indispensable in computer science. In areas such as artificial inte..."},"15365":{"name":"Experimental Animation","number":"15365","units":12,"blurb":"[IDeATe course] This class will explore animation from the student's perspective with a sense of ..."},"15381":{"name":"Artificial Intelligence: Representation and Problem Solving","number":"15381","units":9,"blurb":"This course is about the theory and practice of Artificial Intelligence. We will study modern tec..."},"15386":{"name":"Neural Computation","number":"15386","units":9,"blurb":"Computational neuroscience is an interdisciplinary science that seeks to understand how the brain..."},"15387":{"name":"Computational Perception","number":"15387","units":9,"blurb":"In this course, we will first cover the biological and psychological foundational knowledge of bi..."},"15390":{"name":"Entrepreneurship for Computer Science","number":"15390","units":9,"blurb":"This course is designed to develop skills related to entrepreneurship and innovation for non-busi..."},"15410":{"name":"Operating System Design and Implementation","number":"15410","units":15,"blurb":"Operating System Design and Implementation is a rigorous hands-on introduction to the principles ..."},"15411":{"name":"Compiler Design","number":"15411","units":15,"blurb":"This course covers the design and implementation of compiler and run-time systems for high-level ..."},"15412":{"name":"Operating System Practicum","number":"15412","units":0,"blurb":"The goal of this class is for students to acquire hands-on experience with operating-system code ..."},"15413":{"name":"Software Engineering Practicum","number":"15413","units":12,"blurb":"In this course, students will carry out a semester-long software development project for a real c..."},"15415":{"name":"Database Applications","number":"15415","units":12,"blurb":"This course covers the fundamental topics for Database Management Systems: Database System Archit..."},"15417":{"name":"HOT Compilation","number":"15417","units":12,"blurb":"The course covers the implementation of compilers for higher-order, typed languages such as ML an..."},"15418":{"name":"Parallel Computer Architecture and Programming","number":"15418","units":12,"blurb":"The fundamental principles and engineering tradeoffs involved in designing modern parallel comput..."},"15421":{"name":"Information Security and Privacy","number":"15421","units":12,"blurb":"The objective of this course is to introduce students to the technologies of Web Commerce, Securi..."},"15437":{"name":"Web Application Development","number":"15437","units":12,"blurb":"This course will introduce concepts in programming web application servers. We will study the fun..."},"15440":{"name":"Distributed Systems","number":"15440","units":12,"blurb":"The goals of this course are twofold: First, for students to gain an understanding of the princip..."},"15441":{"name":"Computer Networks","number":"15441","units":12,"blurb":"The emphasis in this course will be on the basic performance and engineering trade-offs in the de..."},"15451":{"name":"Algorithm Design and Analysis","number":"15451","units":12,"blurb":"This course is about the design and analysis of algorithms. We study specific algorithms for a va..."},"15453":{"name":"Formal Languages, Automata, and Computability","number":"15453","units":9,"blurb":"An introduction to the fundamental ideas and models underlying computing: finite automata, regula..."},"15455":{"name":"Undergraduate Complexity Theory","number":"15455","units":9,"blurb":"Complexity theory is the study of how much of a resource (such as time, space, parallelism, or ra..."},"15456":{"name":"Computational Geometry","number":"15456","units":9,"blurb":"How do you sort points in space? What does it even mean? This course takes the ideas of a traditi..."},"15462":{"name":"Computer Graphics","number":"15462","units":12,"blurb":"This course provides a comprehensive introduction to computer graphics modeling, animation, and r..."},"15463":{"name":"Computational Photography","number":"15463","units":12,"blurb":"Computational Photography is an emerging new field created by the convergence of computer graphic..."},"15464":{"name":"Technical Animation","number":"15464","units":12,"blurb":"This course introduces techniques for computer animation such as keyframing, procedural methods, ..."},"15466":{"name":"Computer Game Programming","number":"15466","units":12,"blurb":"The goal of the course is two-fold. The first goal is to teach students some of the higher-level ..."},"15494":{"name":"Special Topic: Cognitive Robotics","number":"15494","units":12,"blurb":"Cognitive robotics is a new approach to robot programming based on high level primitives for perc..."},"15591":{"name":"Independent Study in Computer Science","number":"15591","units":0,"blurb":"To be determined"},"15592":{"name":"Independent Study in Computer Science","number":"15592","units":0,"blurb":"to be determined"},"15593":{"name":"Independent Study in Computer Science","number":"15593","units":0,"blurb":"To be determined"},"15594":{"name":"Independent Study in Computer Science","number":"15594","units":0,"blurb":"to be determined"},"15599":{"name":"SCS Honors Undergraduate Research Thesis","number":"15599","units":0,"blurb":"Available only to students registered in the CS Senior Research Thesis Program."},"15611":{"name":"Compiler Design","number":"15611","units":15,"blurb":"This course covers the design and implementation of compiler and run-time systems for high-level ..."},"15883":{"name":"Computational Models of Neural Systems","number":"15883","units":12,"blurb":"This course is an in-depth study of information processing in real neural systems from a computer..."},"18090":{"name":"Digital Media Interactions: Signal Processing for the Arts","number":"18090","units":10,"blurb":"[IDeATe portal course] - This course presents an overview on manipulating and synthesizing sound,..."},"18099":{"name":"Special Topics: Mobile App Design & Development","number":"18099","units":12,"blurb":"[IDeATe collaborative course] IDeATe is partnering with YinzCam to develop and offer a studio cou..."},"18100":{"name":"Introduction to Electrical and Computer Engineering","number":"18100","units":12,"blurb":"The goals of this freshman engineering course are: * To introduce basic concepts in electrical an..."},"18200":{"name":"Emerging Trends in Electrical and Computer Engineering","number":"18200","units":1,"blurb":"This class consists of a series of individual lectures given by different faculty members and dis..."},"18202":{"name":"Mathematical Foundations of Electrical Engineering","number":"18202","units":12,"blurb":"This course covers topics from engineering mathematics that serve as foundations for descriptions..."},"18213":{"name":"Introduction to Computer Systems","number":"18213","units":12,"blurb":"This course provides a programmer's view of how computer systems execute programs, store informat..."},"18220":{"name":"Electronic Devices and Analog Circuits","number":"18220","units":12,"blurb":"This course covers fundamental topics that are common to a wide variety of electrical engineering..."},"18231":{"name":"Sophomore Projects","number":"18231","units":0,"blurb":"The Department of Electrical and Computer Engineering at Carnegie Mellon considers experiential l..."},"18232":{"name":"Sophomore Projects","number":"18232","units":0,"blurb":"The Department of Electrical and Computer Engineering at Carnegie Mellon considers experiential l..."},"18240":{"name":"Structure and Design of Digital Systems","number":"18240","units":12,"blurb":"This course introduces basic issues in design and verification of modern digital systems. Topics ..."},"18290":{"name":"Signals and Systems","number":"18290","units":12,"blurb":"This course develops the mathematical foundation and computational tools for processing continuou..."},"18300":{"name":"Fundamentals of Electromagnetics","number":"18300","units":12,"blurb":"This course introduces electromagnetic principles and describes ways in which those principles ar..."},"18310":{"name":"Fundamentals of Semiconductor Devices","number":"18310","units":12,"blurb":"This course replaced 18311 in Spring 2005. In this course you will receive an introduction to the..."},"18320":{"name":"Microelectronic Circuits","number":"18320","units":12,"blurb":"18-320 introduces students to the fundamentals of microelectronic circuits. The course will empha..."},"18331":{"name":"Junior Projects","number":"18331","units":0,"blurb":"The Department of Electrical and Computer Engineering at Carnegie Mellon considers experiential l..."},"18332":{"name":"Junior Projects","number":"18332","units":0,"blurb":"The Department of Electrical and Computer Engineering at Carnegie Mellon considers experiential l..."},"18340":{"name":"Digital Computation","number":"18340","units":12,"blurb":"In this course we will explore the techniques for designing high-performance digital circuits for..."},"18341":{"name":"Logic Design and Verification","number":"18341","units":12,"blurb":"This course is a second level logic design course, studying the techniques of designing at the re..."},"18342":{"name":"Fundamentals of Embedded Systems","number":"18342","units":12,"blurb":"This practical, hands-on course introduces students to the basic building-blocks and the underlyi..."},"18345":{"name":"Introduction to Telecommunication Networks","number":"18345","units":12,"blurb":"This course introduces the fundamental concepts of telecommunication networks. Underlying enginee..."},"18348":{"name":"Embedded Systems Engineering","number":"18348","units":12,"blurb":"Embedded computing applications far outnumber desktop computers, with billions of microcontroller..."},"18349":{"name":"Embedded Real-Time Systems","number":"18349","units":12,"blurb":"This practical, hands-on course introduces the various building blocks and underlying scientific ..."},"18370":{"name":"Fundamentals of Control","number":"18370","units":12,"blurb":"An introduction to the fundamental principles and methodologies of classical feedback control and..."},"18390":{"name":"ECE CO-OP","number":"18390","units":0,"blurb":"The Department of Electrical and Computer Engineering at Carnegie Mellon considers experiential l..."},"18402":{"name":"Applied Electrodynamics","number":"18402","units":12,"blurb":"This course builds upon the electric and magnetic field foundations established in 18300 to descr..."},"18403":{"name":"Microfabrication Methods and Technology","number":"18403","units":12,"blurb":"This course is a laboratory-based introduction to the theory and practice of microfabrication. Le..."},"18418":{"name":"Electric Energy Processing: Fundamentals and Applications","number":"18418","units":12,"blurb":"This course provides an introduction to the fundamentals of electrical energy conversion and its ..."},"18431":{"name":"Undergraduate Projects - Senior","number":"18431","units":0,"blurb":"The Department of Electrical and Computer Engineering at Carnegie Mellon considers experiential l..."},"18432":{"name":"Senior Projects","number":"18432","units":0,"blurb":"The Department of Electrical and Computer Engineering at Carnegie Mellon considers experiential l..."},"18447":{"name":"Introduction to Computer Architecture","number":"18447","units":12,"blurb":"Computer architecture is the science and art of selecting and interconnecting hardware components..."},"18474":{"name":"Embedded Control Systems","number":"18474","units":12,"blurb":"This course introduces principles for design of embedded controllers. In applications ranging fro..."},"18482":{"name":"Telecommunications, Technology Policy & Management","number":"18482","units":12,"blurb":"This course provides a comprehensive introduction to basic principles of telecommunications techn..."},"18487":{"name":"Introduction to Computer & Network Security & Applied Cryptography","number":"18487","units":12,"blurb":"This course will introduce students to the fundamentals of computer security and applied cryptogr..."},"18491":{"name":"Fundamentals of Signal Processing","number":"18491","units":12,"blurb":"This course addresses the mathematics, implementation, design and application of the digital sign..."},"18496":{"name":"Introduction to Biomedical Imaging and Image Analysis","number":"18496","units":12,"blurb":"Bioimage Informatics (formerly Bioimaging) This course gives an overview of tools and tasks in va..."},"18499":{"name":"Internship","number":"18499","units":0,"blurb":"The Department of Electrical and Computer Engineering at Carnegie Mellon considers experiential l..."},"18510":{"name":"Sensor Systems Design","number":"18510","units":12,"blurb":"Please refer to the ECE webpage for a full description of this course. Course Website: http://www..."},"18540":{"name":"Rapid Prototyping of Computer Systems","number":"18540","units":12,"blurb":"This is a project-oriented course which will deal with all four aspects of project development; t..."},"18545":{"name":"Advanced Digital Design Project","number":"18545","units":12,"blurb":"In this capstone design project course, students will design and implement a large digital system..."},"18549":{"name":"Embedded Systems Design","number":"18549","units":12,"blurb":"18549 Embedded Systems Design This course comprises a semester-long project experience geared tow..."},"18551":{"name":"Digital Communication and Signal Processing Systems Design","number":"18551","units":12,"blurb":"This course provides the student with a rich, in-depth design and application hardware project ex..."},"18578":{"name":"Mechatronic Design","number":"18578","units":12,"blurb":"Mechatronics is the synergistic integration of mechanism, electronics, and computer control to ac..."},"18615":{"name":"Micro and Nano Systems Fabrication","number":"18615","units":12,"blurb":"This is a new course intended to introduce students to the process flow and design methodology fo..."},"18623":{"name":"Analog Integrated Circuit Design","number":"18623","units":12,"blurb":"Some form of analog circuit design is a critical step in the creation of every modern IC. First a..."},"18643":{"name":"Reconfigurable Logic: Technology, Architecture and Applications","number":"18643","units":12,"blurb":"Three decades since their original inception as a lower-cost compromise to ASIC, modern Field Pro..."},"18649":{"name":"Distributed Embedded Systems","number":"18649","units":12,"blurb":"Embedded computers seem to be everywhere, and are increasingly used in applications as diverse as..."},"18664":{"name":"ULSI Technology Status and Roadmap for System on Chips and System in Package","number":"18664","units":12,"blurb":"This course provides the necessary background for the state-of-the art technologies utilized by t..."},"18755":{"name":"Networks in Real World","number":"18755","units":12,"blurb":"18755 is a graduate-level course that focuses on networks and their applications to various natur..."},"18765":{"name":"Digital System Testing and Testable Design","number":"18765","units":12,"blurb":"For this course, time- and topic-indexed videos of lecture, homework, projects, etc. will be avai..."},"18771":{"name":"Linear Systems","number":"18771","units":12,"blurb":"A modern approach to the analysis and engineering applications of linear systems. Modeling and li..."},"18792":{"name":"Advanced Digital Signal Processing","number":"18792","units":12,"blurb":"This course will examine a number of advanced topics and applications in one-dimensional digital ..."},"19101":{"name":"Introduction to Engineering and Public Policy","number":"19101","units":12,"blurb":"This course examines the processes of public and private decision making and of policy formation,..."},"19201":{"name":"EPP Sophomore Seminar","number":"19201","units":1,"blurb":"The Sophomore Seminar has the objective of introducing the student to the interdisciplinary natur..."},"19211":{"name":"Ethics and Policy Issues in Computing","number":"19211","units":9,"blurb":"Should autonomous robots make life and death decisions on their own? Should we allow them to sele..."},"19301":{"name":"Decision Making Methods for EPP","number":"19301","units":9,"blurb":"This course covers various economic, statistical, and decision analysis techniques used for exami..."},"19325":{"name":"Technology and Policy Writing for Lay Audiences","number":"19325","units":9,"blurb":"This course is designed to teach the fundamentals of persuasive, accurate writing about technical..."},"19351":{"name":"Applied Methods for Technology-Policy Analysis","number":"19351","units":9,"blurb":"This course synthesizes concepts from economics, statistics, decision analysis, and other humanit..."},"19365":{"name":"Water Technology Innovation and Policy","number":"19365","units":9,"blurb":"Innovation in water technologies is necessary to confront profound water resource challenges faci..."},"19402":{"name":"Telecommunications Technology, Policy & Management","number":"19402","units":12,"blurb":"This course provides a comprehensive introduction to basic principles of telecommunications techn..."},"19403":{"name":"Policies of Wireless Systems and the Internet","number":"19403","units":12,"blurb":"This course will address public policy issues related to wireless systems, and to the Internet. I..."},"19424":{"name":"Energy and the Environment","number":"19424","units":9,"blurb":"This course will explore the relationships between environmental impacts and the utilization of e..."},"19425":{"name":"Sustainable Energy for the Developing World","number":"19425","units":9,"blurb":"This course examines the current state of the energy system in developing countries and the chall..."},"19440":{"name":"Combustion and Air Pollution Control","number":"19440","units":9,"blurb":"Formation and control of gaseous and particulate air pollutants in combustion systems. Basic prin..."},"19443":{"name":"Special Topics in EPP: Climate Change Science and Adaptation","number":"19443","units":9,"blurb":"This course will provide a background in climate change science and its application to adaptation..."},"19451":{"name":"EPP Projects","number":"19451","units":12,"blurb":"Interdisciplinary problem-solving projects in which students work as leaders or members of projec..."},"19452":{"name":"EPP Projects","number":"19452","units":12,"blurb":"Interdisciplinary problem-solving projects in which students work as leaders or members of projec..."},"19461":{"name":"Invention & Innovation for Materials Intensive Technologies Part 1","number":"19461","units":4.5,"blurb":"Two 4.5 unit classes that can be taken in sequence or as stand-alone mini's. Courses will be cros..."},"19500":{"name":"Directed Study in EPP: Undergraduate","number":"19500","units":0,"blurb":"Students may do undergraduate research as one course for EPP technical elective credit, with an E..."},"19680":{"name":"E&TIM Seminar on Innovation Management in Practice","number":"19680","units":6,"blurb":"Innovation has been described as \"the intersection of invention and insight, leading to the creat..."},"19681":{"name":"Managerial and Engineering Economics","number":"19681","units":12,"blurb":"The course emphasizes the application of economic principles (e.g., marginal analysis, supply and..."},"19682":{"name":"The Strategy and Management of Technological Innovation","number":"19682","units":12,"blurb":"The course on Strategy and Management of Technological Innovation prepares professionals with tec..."},"19687":{"name":"Principles and Practices of R&D Management","number":"19687","units":6,"blurb":"This course considers key issues and trade-off in R&D strategy and organization, paying attention..."},"19692":{"name":"Special Topics: Strategic Marketing and Product Planning for Tech Innovations","number":"19692","units":6,"blurb":"The purpose of this master's level course is to develop the knowledge and skills needed to formul..."},"19693":{"name":"Managing and Leading Research and Development","number":"19693","units":12,"blurb":"Please refer to the description for ECE course 18-703. The EPP number is a cross listing of this ..."},"19694":{"name":"Special Topics: Leadership and Innovation Management","number":"19694","units":6,"blurb":"The attributes and skills of the contributors to innovation are important elements in the effecti..."},"19697":{"name":"Modern Prototyping Techniques","number":"19697","units":6,"blurb":"Students in Modern Prototyping Techniques will explore a wide variety of tools and techniques for..."},"19701":{"name":"Introduction to the Theory and Practice of Policy Analysis","number":"19701","units":12,"blurb":"This course reviews and critically examines a set of problems, assumptions and analytical techniq..."},"19702":{"name":"Quantitative Methods for Policy Analysis","number":"19702","units":12,"blurb":"Economic framework for identifying and analyzing investment and operation options facing agencies..."},"19704":{"name":"Applied Data Analysis","number":"19704","units":6,"blurb":"Instructor Revised Description as of 1-3-14: \"This course will cover several statistical procedur..."},"19705":{"name":"Workshop Applied Policy Analysis","number":"19705","units":6,"blurb":"The course is designed to provide experience in setting up, analyzing, and writing about policy p..."},"19714":{"name":"Environmental Life Cycle Assessment","number":"19714","units":12,"blurb":"Cradle-to-grave analysis of new products, processes and policies is important to avoid undue envi..."},"19717":{"name":"Introduction to Sustainable Engineering","number":"19717","units":12,"blurb":"This course begins with an overview of the concept of sustainability, including changing attitude..."},"21101":{"name":"Freshman Mathematics Seminar","number":"21101","units":3,"blurb":"This course is offered in the Fall semester for first semester Freshmen interested in majoring in..."},"21111":{"name":"Calculus I","number":"21111","units":10,"blurb":"Review of basic algebra, functions, limits, derivatives of algebraic, exponential and logarithmic..."},"21112":{"name":"Calculus II","number":"21112","units":10,"blurb":"Indefinite integral, definite integral and applications, techniques of integration, trigonometric..."},"21120":{"name":"Differential and Integral Calculus","number":"21120","units":10,"blurb":"Functions, limits, derivatives, logarithmic, exponential, and trigonometric functions, inverse fu..."},"21122":{"name":"Integration and Approximation","number":"21122","units":10,"blurb":"Integration by trigonometric substitution and partial fractions; arclength; improper integrals; S..."},"21124":{"name":"Calculus II for Biologists and Chemists","number":"21124","units":10,"blurb":"This is intended as a second calculus course for biology and chemistry majors. It uses a variety ..."},"21126":{"name":"Introduction to Mathematical Software","number":"21126","units":3,"blurb":"This course provides an introduction to the use of several software packages, which are useful to..."},"21127":{"name":"Concepts of Mathematics","number":"21127","units":10,"blurb":"This course introduces the basic concepts, ideas and tools involved in doing mathematics. As such..."},"21128":{"name":"Mathematical Concepts and Proofs","number":"21128","units":12,"blurb":"This course is intended for MCS first-semester students who are interested in pursuing a major in..."},"21201":{"name":"Undergraduate Colloquium","number":"21201","units":1,"blurb":"All mathematics majors meet for one hour each week to hear discussions on current research by fac..."},"21228":{"name":"Discrete Mathematics","number":"21228","units":9,"blurb":"The techniques of discrete mathematics arise in every application of mathematics, which is not pu..."},"21235":{"name":"Mathematical Studies Analysis I","number":"21235","units":10,"blurb":"An honors version of 21-355 for students of greater aptitude and motivation. Topics to be covered..."},"21236":{"name":"Mathematical Studies Analysis II","number":"21236","units":10,"blurb":"An honors version of 21356 for students of greater aptitude and motivation. Topics to be covered ..."},"21237":{"name":"Mathematical Studies Algebra I","number":"21237","units":10,"blurb":"An honors version of 21-373 Algebraic structures for students of greater aptitude and motivation...."},"21238":{"name":"Mathematical Studies Algebra II","number":"21238","units":10,"blurb":"An honors version of 21341 Linear Algebra for students of greater aptitude and motivation. Linear..."},"21240":{"name":"Matrix Algebra with Applications","number":"21240","units":10,"blurb":"Vectors and matrices, the solution of linear systems of equations, vector spaces and subspaces, o..."},"21241":{"name":"Matrices and Linear Transformations","number":"21241","units":10,"blurb":"A first course in linear algebra intended for scientists, engineers, mathematicians and computer ..."},"21242":{"name":"Matrix Theory","number":"21242","units":10,"blurb":"An honors version of 21241 (Matrix Algebra and Linear Transformations) for students of greater ap..."},"21256":{"name":"Multivariate Analysis","number":"21256","units":9,"blurb":"This course is designed for students in Economics or Business Administration. Matrix algebra: vec..."},"21257":{"name":"Models and Methods for Optimization","number":"21257","units":9,"blurb":"Introduces basic methods of operations research and is intended primarily for Business Administra..."},"21259":{"name":"Calculus in Three Dimensions","number":"21259","units":9,"blurb":"Vectors, lines, planes, quadratic surfaces, polar, cylindrical and spherical coordinates, partial..."},"21260":{"name":"Differential Equations","number":"21260","units":9,"blurb":"Ordinary differential equations: first and second order equations, applications, Laplace transfor..."},"21261":{"name":"Introduction to Ordinary Differential Equations","number":"21261","units":10,"blurb":"A first course in ordinary differential equations intended primarily for math majors and for thos..."},"21268":{"name":"Multidimensional Calculus","number":"21268","units":10,"blurb":"A serious introduction to multidimensional calculus that makes use of matrices and linear transfo..."},"21269":{"name":"Vector Analysis","number":"21269","units":10,"blurb":"An honors version of 21268 for students of greater aptitude and motivation. More emphasis will be..."},"21270":{"name":"Introduction to Mathematical Finance","number":"21270","units":9,"blurb":"This is a first course for those considering majoring or minoring in Computational Finance. The t..."},"21272":{"name":"Introduction to Partial Differential Equations","number":"21272","units":9,"blurb":"A Partial Differential Equation (PDE for short) is a differential equation involving derivatives ..."},"21292":{"name":"Operations Research I","number":"21292","units":9,"blurb":"Operations research offers a scientific approach to decision making, most commonly involving the ..."},"21295":{"name":"Putnam Seminar","number":"21295","units":3,"blurb":"A problem solving seminar designed to prepare students to participate in the annual William Lowel..."},"21300":{"name":"Basic Logic","number":"21300","units":9,"blurb":"Propositional and predicate logic: Syntax, proof theory and semantics up to completeness theorem,..."},"21301":{"name":"Combinatorics","number":"21301","units":9,"blurb":"A major part of the course concentrates on algebraic methods, which are relevant in the study of ..."},"21320":{"name":"Symbolic Programming Methods","number":"21320","units":9,"blurb":"The objective of this course is to learn to program in Maple, a powerful symbolic mathematics pac..."},"21325":{"name":"Probability","number":"21325","units":9,"blurb":"This course focuses on the understanding of basic concepts in probability theory and illustrates ..."},"21329":{"name":"Set Theory","number":"21329","units":9,"blurb":"Set theory was invented about 110 years ago by George Cantor as an instrument to understand infin..."},"21341":{"name":"Linear Algebra","number":"21341","units":9,"blurb":"21341 Linear Algebra. A mathematically rigorous treatment of Linear Algebra over an arbitrary fie..."},"21355":{"name":"Principles of Real Analysis I","number":"21355","units":9,"blurb":"This course provides a rigorous and proof-based treatment of functions of one real variable. The ..."},"21356":{"name":"Principles of Real Analysis II","number":"21356","units":9,"blurb":"This course provides a rigorous and proof-based treatment of functions of several real variables...."},"21365":{"name":"Projects in Applied Mathematics","number":"21365","units":9,"blurb":"This course provides students with an opportunity to solve problems posed by area companies. It i..."},"21366":{"name":"Topics in Applied Mathematics","number":"21366","units":9,"blurb":"Typical of courses that might be offered from time to time are game theory, non-linear optimizati..."},"21369":{"name":"Numerical Methods","number":"21369","units":9,"blurb":"This course provides an introduction to the use of computers to solve scientific problems. Method..."},"21370":{"name":"Discrete Time Finance","number":"21370","units":9,"blurb":"This course introduces the Black-Scholes option pricing formula, shows how the binomial model pro..."},"21371":{"name":"Functions of a Complex Variable","number":"21371","units":9,"blurb":"This course provides an introduction to one of the basic topics of both pure and applied mathemat..."},"21373":{"name":"Algebraic Structures","number":"21373","units":9,"blurb":"Groups: Homomorphisms. Subgroups, cosets, Lagrange's theorem. Conjugation. Normal subgroups, quot..."},"21374":{"name":"Field Theory","number":"21374","units":9,"blurb":"The purpose of this course is to provide a successor to Algebraic Structures, with an emphasis on..."},"21378":{"name":"Mathematics of Fixed Income Markets","number":"21378","units":9,"blurb":"A first course in fixed income. Students will be introduced to the most common securities traded ..."},"21393":{"name":"Operations Research II","number":"21393","units":9,"blurb":"Building on an understanding of Linear Programming developed in 21-292 Operations Research I, thi..."},"21420":{"name":"Continuous-Time Finance","number":"21420","units":9,"blurb":"This course begins with Brownian motion, stochastic integration,and Ito's formula from stochastic..."},"21441":{"name":"Number Theory","number":"21441","units":9,"blurb":"Number theory deals with the integers, the most basic structures of mathematics. It is one of the..."},"21470":{"name":"Selected Topics in Analysis","number":"21470","units":9,"blurb":"Typical of courses, which are offered from time to time are finite difference equations, calculus..."},"21484":{"name":"Graph Theory","number":"21484","units":9,"blurb":"Graph theory uses basic concepts to approach a diversity of problems and nontrivial applications ..."},"21499":{"name":"Undergraduate Research  Topic","number":"21499","units":9,"blurb":"This course affords undergraduates to pursue elementary research topics in the area of expertise ..."},"21590":{"name":"Practicum","number":"21590","units":0,"blurb":"Students in this course gain experience with the application of mathematical models to business a..."},"21599":{"name":"Undergraduate Reading and Research","number":"21599","units":0,"blurb":"Individual reading courses or projects in mathematics and its applications. Prerequisites and uni..."},"21602":{"name":"Introduction to Set Theory I","number":"21602","units":12,"blurb":"First order definability and the Zermelo-Fraenkel axioms; cardinal arithmetic, ordered sets, well..."},"21603":{"name":"Model Theory I","number":"21603","units":12,"blurb":"Similarity types, structures; downward Lowenheim Skolem theorem; construction of models from cons..."},"21610":{"name":"Algebra I","number":"21610","units":12,"blurb":"The structure of finitely generated abelian groups, the Sylow theorems, nilpotent and solvable gr..."},"21620":{"name":"Real Analysis","number":"21620","units":6,"blurb":"A review of one-dimensional, undergraduate analysis, including a rigorous treatment of the follow..."},"21621":{"name":"Introduction to Lebesgue Integration","number":"21621","units":6,"blurb":"Construction of Lebesgue measure and the Lebesgue integral on the real line. Fatou's Lemma, the m..."},"21630":{"name":"Ordinary Differential Equations","number":"21630","units":12,"blurb":"Basic concepts covered are existence and uniqueness of solutions, continuation of solutions, cont..."},"21640":{"name":"Introduction to Functional Analysis","number":"21640","units":12,"blurb":"Linear spaces: Hilbert spaces, Banach spaces, topological vector spaces. Hilbert spaces: geometry..."},"21651":{"name":"General Topology","number":"21651","units":12,"blurb":"Metric spaces: continuity, compactness, Arzela-Ascoli Theorem, completeness and completion, Baire..."},"21660":{"name":"Introduction to Numerical Analysis I","number":"21660","units":12,"blurb":"Finite precision arithmetic, interpolation, spline approximation, numerical integration, numerica..."},"21690":{"name":"Methods of Optimization","number":"21690","units":12,"blurb":"An introduction to the theory and algorithms of linear and nonlinear programming with an emphasis..."},"21701":{"name":"Discrete Mathematics","number":"21701","units":12,"blurb":"Combinatorial analysis, graph theory with applications to problems in computational complexity, n..."},"21720":{"name":"Measure and Integration","number":"21720","units":12,"blurb":"The Lebesgue integral, absolute continuity, signed measures and the Radon-Nikodym Theorem, Lp spa..."},"21721":{"name":"Probability","number":"21721","units":12,"blurb":"Probability spaces, random variables, expectation, independence, Borel-Cantelli lemmas. Kernels a..."},"21732":{"name":"Partial Differential Equations I","number":"21732","units":12,"blurb":"An introduction to the modern theory of partial differential equations. Including functional anal..."},"21737":{"name":"Probabilistic Combinatorics","number":"21737","units":12,"blurb":"This course covers the probabilistic method for combinatorics in detail and introduces randomized..."},"21901":{"name":"Masters Degree Research","number":"21901","units":0,"blurb":"Missing Course Description - please contact the teaching department."},"24101":{"name":"Fundamentals of Mechanical Engineering","number":"24101","units":12,"blurb":"The purpose of this course is to introduce the student to the field of mechanical engineering thr..."},"24200":{"name":"Machine Shop Practice","number":"24200","units":1,"blurb":"24200 Machine Shop Practices Fall and Spring Semesters, 1 units, 6 week mini course This course f..."},"24201":{"name":"Engineering Graphics","number":"24201","units":9,"blurb":"Introduction to the use and preparation of manually and computer generated engineering drawings, ..."},"24202":{"name":"Introduction to Computer Aided Design","number":"24202","units":1,"blurb":"Introduction to computer aided mechanical design using SolidWorks 3D CAD software. Includes the c..."},"24210":{"name":"Special Topics: Additive Manufacturing for Engineers","number":"24210","units":3,"blurb":"Introduction to additive manufacturing (AM) fundamentals and applications using Solidworks 3-D CA..."},"24221":{"name":"Thermodynamics I","number":"24221","units":10,"blurb":"Temperature and thermometry; equations of state for fluids and solids; work, heat, and the first ..."},"24231":{"name":"Fluid Mechanics","number":"24231","units":10,"blurb":"Hydrostatics. Control volume concepts of mass, momentum, and energy conservation. Euler's and Ber..."},"24261":{"name":"Statics","number":"24261","units":10,"blurb":"This course is the first in a two-semester sequence on the solid mechanics of engineering structu..."},"24262":{"name":"Stress Analysis","number":"24262","units":12,"blurb":"This course is the second in a two-semester sequence on the solid mechanics of engineering struct..."},"24292":{"name":"Special Topics in Renewable Energy Engineering","number":"24292","units":9,"blurb":"Introduction to engineering principles of various renewable energy systems, including the followi..."},"24302":{"name":"Mechanical Engineering Seminar I","number":"24302","units":2,"blurb":"The purpose of this course is to help students develop good presentation skills and to provide a ..."},"24321":{"name":"Thermal-Fluids Experimentation","number":"24321","units":12,"blurb":"24321 Thermal-Fluids Experimentation Spring: 12 units This is a capstone course for the thermal-f..."},"24322":{"name":"Heat Transfer","number":"24322","units":10,"blurb":"Introduction to basic concepts of engineering heat transfer. Steady and transient heat conduction..."},"24334":{"name":"Introduction to Biomechanics","number":"24334","units":9,"blurb":"This course covers the application of solid and fluid mechanics to living tissues. This includes ..."},"24341":{"name":"Manufacturing Sciences","number":"24341","units":9,"blurb":"This course has two broad concerns: an introductory review of manufacturing systems organization ..."},"24351":{"name":"Dynamics","number":"24351","units":10,"blurb":"This first course on the modeling and analysis of dynamic systems concentrates on the motion of p..."},"24352":{"name":"Dynamic Systems and Controls","number":"24352","units":12,"blurb":"This second course on the modeling and analysis of dynamic systems emphasizes the common features..."},"24358":{"name":"Special Topics in Culinary Mechanics","number":"24358","units":9,"blurb":"This course discusses how mechanical quantities and processes such as force, motion, and deformat..."},"24370":{"name":"Engineering Design I: Methods and Skills","number":"24370","units":12,"blurb":"24370 Engineering Design I: Methods and Skills Spring: 12 Units In this course, students will lea..."},"24391":{"name":"Mechanical Engineering Project","number":"24391","units":0,"blurb":"Practice in the organization, planning, and execution of appropriate engineering projects. These ..."},"24392":{"name":"Mechancial Engineering Project","number":"24392","units":0,"blurb":"Practice in the organization, planning, and execution of appropriate engineering projects. These ..."},"24421":{"name":"Internal Combustion Engines","number":"24421","units":12,"blurb":"This course discusses working principles of internal combustion engines found in many practical a..."},"24424":{"name":"Energy and the Environment","number":"24424","units":9,"blurb":"Fuel cycles for conventional and non-conventional energy resources; relationships between environ..."},"24425":{"name":"Combustion and Air Pollution Control","number":"24425","units":9,"blurb":"Formation and control of gaseous and particulate air pollutants in combustion systems. Basic prin..."},"24441":{"name":"Engineering Design II: Conceptualization and Realization","number":"24441","units":12,"blurb":"24441 - Engineering Design II: Conceptualization and Realization Fall and Spring 12 units. This c..."},"24451":{"name":"Feedback Control Systems","number":"24451","units":12,"blurb":"Fundamentals of feedback control with emphasis on classical techniques and an introduction to dis..."},"24452":{"name":"Mechanical Systems Experimentation","number":"24452","units":9,"blurb":"24-452 Mechanical Systems Experimentation Fall : 9 Units Experimentation in dynamic systems and c..."},"24491":{"name":"Department Research Honors","number":"24491","units":0,"blurb":"This course is designed to give students increased exposure to \"open-ended\" problems and research..."},"24492":{"name":"Department Research Honors","number":"24492","units":0,"blurb":"This course is designed to give students increased exposure to \"open-ended\" problems and research..."},"24612":{"name":"Cardiovascular Mechanics","number":"24612","units":12,"blurb":"The primary objective of the course is to learn to model blood flow and mechanical forces in the ..."},"24614":{"name":"Microelectromechanical Systems","number":"24614","units":12,"blurb":"This course introduces fabrication and design fundamentals for Microelectromechanical Systems (ME..."},"24616":{"name":"Tribology-Friction, Lubrication and Wear","number":"24616","units":12,"blurb":"24-616 - Tribology Friction, Lubrication and Wear Intermittent: 12 units Covers the science of su..."},"24618":{"name":"Special Topics: Computational Analysis of Transport Phenomena","number":"24618","units":12,"blurb":"In this course, students will develop basic understanding and skill sets to perform simulations o..."},"24623":{"name":"Molecular Simulation of Materials","number":"24623","units":12,"blurb":"24-623: Molecular Simulation of Materials Spring: 12 units The purpose of this course is to expos..."},"24626":{"name":"Air Quality Engineering","number":"24626","units":12,"blurb":"The course provides a quantitative introduction to the processes that control atmospheric polluta..."},"24628":{"name":"Energy Transport and Conversion at the Nanoscale","number":"24628","units":12,"blurb":"Energy transport and conversion processes occur at the nanoscale due to interactions between mole..."},"24629":{"name":"Direct Solar and Thermal Energy Conversion","number":"24629","units":12,"blurb":"This course introduces graduates and senior undergraduates the principles and technologies for di..."},"24642":{"name":"Fuel Cell Systems","number":"24642","units":12,"blurb":"Fuel cells are devices that convert chemical potential energy directly into electrical energy. Ex..."},"24650":{"name":"Special Topics in Applied Finite Element Analysis","number":"24650","units":12,"blurb":"This is an introductory course for the finite element method with emphasis on application of the ..."},"24651":{"name":"Special Topics in Material Selection for Mechanical Engineers","number":"24651","units":12,"blurb":"This course provides a methodology for selecting materials for a given application. It aims to pr..."},"24655":{"name":"Cellular Biomechanics","number":"24655","units":9,"blurb":"Cellular Biomechanics Intermittent: 9 units This course discusses how mechanical quantities and p..."},"24657":{"name":"Molecular Biomechanics","number":"24657","units":9,"blurb":"This class is designed to present concepts of molecular biology, cellular biology and biophysics ..."},"24658":{"name":"Computational Bio-Modeling and Visualization","number":"24658","units":12,"blurb":"Biomedical modeling and visualization play an important role in mathematical modeling and compute..."},"24672":{"name":"Special Topics in DIY Design and Fabrication","number":"24672","units":12,"blurb":"The traditional principles of mass production are being challenged by concepts of highly customiz..."},"24673":{"name":"Soft Robots: Mechanics, Design and Modeling","number":"24673","units":12,"blurb":"Soft, elastically-deformable machines and electronics will dramatically improve the functionality..."},"24674":{"name":"Design of Biomechatronic Systems for Humans","number":"24674","units":12,"blurb":"This course explores methods for the design of electromechanical devices that physically interfac..."},"24680":{"name":"Quantitative Entrepreneurship: Analysis for New Technology Commercialization","number":"24680","units":12,"blurb":"This course provides engineers with a multidisciplinary mathematical foundation for integrated mo..."},"24681":{"name":"Computer-Aided Design","number":"24681","units":12,"blurb":"24681 Computer Aided Design Intermittent: 12 units This course is the first section of the two-se..."},"24683":{"name":"Design for Manufacture and the Environment","number":"24683","units":12,"blurb":"Design for Manufacturing and the Environment examines influences of manufacturing and other tradi..."},"24688":{"name":"Introduction to CAD and CAE Tools","number":"24688","units":12,"blurb":"This course offers the hands-on training on how to apply modern CAD and CAE software tools to eng..."},"24689":{"name":"Special Topics: Global and Regional Sustainable Design","number":"24689","units":12,"blurb":"Engineers face unique challenges in a globalized and rapidly changing world, where decisions shou..."},"27100":{"name":"Engineering the Materials of the Future","number":"27100","units":12,"blurb":"Materials form the foundation for all engineering applications. Advances in materials and their p..."},"27201":{"name":"Structure of Materials","number":"27201","units":9,"blurb":"This course covers the fundamentals of crystallography and diffraction. Topics covered include: t..."},"27202":{"name":"Defects in Materials","number":"27202","units":9,"blurb":"Defects have a fundamental influence on the properties of materials, including deformation, elect..."},"27205":{"name":"Introduction to Materials Characterization","number":"27205","units":3,"blurb":"The course introduces the modern methods of materials characterization, including characterizatio..."},"27210":{"name":"Materials Engineering Essentials","number":"27210","units":6,"blurb":"This course approaches professional skill holistically, having materials science and engineering ..."},"27211":{"name":"Structure of Materials (Minor Option)","number":"27211","units":6,"blurb":"This course is identical to 27-201, but without the 3-unit lab component."},"27215":{"name":"Thermodynamics of Materials","number":"27215","units":12,"blurb":"The first half of the course will focus on the laws of thermodynamics and the inter-relations bet..."},"27216":{"name":"Transport in Materials","number":"27216","units":9,"blurb":"This course is designed to allow the student to become familiar with the fundamental principles o..."},"27217":{"name":"Phase Relations and Diagrams","number":"27217","units":12,"blurb":"Stability of structures. Hume-Rothery rules. Free energy-composition curves with applications to ..."},"27301":{"name":"Microstructure and Properties I","number":"27301","units":9,"blurb":"The objective of this courses and its companion 27-302 is to convey some of the essential concept..."},"27323":{"name":"Powder Processing of Materials","number":"27323","units":9,"blurb":"This course addresses the methods used in, and the principles that underlie, powder processing of..."},"27324":{"name":"Introduction to Polymer Science and Engineering","number":"27324","units":9,"blurb":"This course introduces the fundamental properties of polymer materials and the principles underly..."},"27357":{"name":"Introduction to Materials Selection","number":"27357","units":6,"blurb":"The objective of this course is to teach the fundamentals of materials science as related to meta..."},"27367":{"name":"Selection and Performance of Materials","number":"27367","units":6,"blurb":"This course teaches the selection methodologies for materials and processes for satisfaction of a..."},"27399":{"name":"Professional Development II","number":"27399","units":1,"blurb":"This is a course that is designed to teach engineering business and professional skills to the MS..."},"27401":{"name":"MSE Capstone Course I","number":"27401","units":12,"blurb":"This capstone course introduces the student to the methodology used for projects and team based r..."},"27402":{"name":"MSE Capstone Course II","number":"27402","units":12,"blurb":"This is the spring extension of 27401. Teams or team members that have the industry agreement and..."},"27411":{"name":"Engineering Biomaterials","number":"27411","units":9,"blurb":"This course will cover structure-processing-property relationships in biomaterials for use in med..."},"27432":{"name":"Electronic and Thermal Properties of Metals, Semiconductors and Related Devices","number":"27432","units":9,"blurb":"Fall even years This is Part I of a two-part course (Part II is 27-433) sequence concerned with t..."},"27445":{"name":"Structure, Properties and Performance Relationships in Magnetic Materials","number":"27445","units":9,"blurb":"This course introduces the student to intrinsic properties of magnetic materials including magnet..."},"27454":{"name":"Supervised Reading","number":"27454","units":0,"blurb":"This course provides the opportunity for a detailed study of the literature on some subject under..."},"27499":{"name":"Professional Development III","number":"27499","units":1,"blurb":"This is a course that is designed to teach engineering business and professional skills to the MS..."},"27501":{"name":"Invention & Innovation for Materials Intensive Technologies Part 1","number":"27501","units":4.5,"blurb":"Two 4.5 unit classes that can be taken in sequence or as stand-alone mini's. Courses will be cros..."},"27502":{"name":"Invention and Innovation for Materials Intensive Technologies Part 2","number":"27502","units":4.5,"blurb":"Two 4.5 unit classes that can be taken in sequence or as stand-alone mini's. Courses will be cros..."},"27515":{"name":"Special Topics","number":"27515","units":9,"blurb":"This course introduces students to the theory and practice of computational materials science fro..."},"27519":{"name":"Computational Thermodynamics","number":"27519","units":9,"blurb":"Computational thermodynamics is a powerful tool of a Materials Engineer. We will examine how ther..."},"27520":{"name":"Tissue Engineering","number":"27520","units":12,"blurb":"This course will train students in advanced cellular and tissue engineering methods that apply ph..."},"27542":{"name":"Processing and Properites of Thin Films","number":"27542","units":9,"blurb":"This course is designed to provide an introduction to the science and technology of thin films, w..."},"27555":{"name":"Materials Project I","number":"27555","units":0,"blurb":"This course is designed to give experience in individualized research under the guidance of a fac..."},"27556":{"name":"Materials Project II","number":"27556","units":0,"blurb":"Second semester of Materials Project. This course is designed to give experience in individualize..."},"27565":{"name":"Nanostructured Materials","number":"27565","units":9,"blurb":"Fall even years: This course is an introduction to nanostructured materials or nanomaterials. Nan..."},"27570":{"name":"Molecular and Micro-scale Polymeric Biomaterials in Medicine","number":"27570","units":9,"blurb":"This course will cover aspects of polymeric biomaterials in medicine from molecular principles to..."},"27591":{"name":"Mechanical Behavior of Materials","number":"27591","units":9,"blurb":"Spring odd years: Fundamentals of stress and strain. Linear elastic behavior. Tensile testing and..."},"27592":{"name":"Solidification Processing","number":"27592","units":9,"blurb":"Spring odd years: The goal of this course is to enable the student to solve practical solidificat..."},"27699":{"name":"Professional Skills in Materials Science and Engineering","number":"27699","units":6,"blurb":"This course is intended for students in the masters program in Materials Science and Engineering...."},"27709":{"name":"Engineering Biomaterials","number":"27709","units":12,"blurb":"This course will cover structure-processing-property relationships in biomaterials for use in med..."},"27718":{"name":"Soft Materials","number":"27718","units":12,"blurb":"The emphasis in this course will be on the emerging unifying physical principles that explain the..."},"27719":{"name":"Computational Thermodynamics","number":"27719","units":12,"blurb":"Computational thermodynamics is a powerful tool of a Materials Engineer. We will examine how ther..."},"27725":{"name":"Materials for Nuclear Energy Systems","number":"27725","units":6,"blurb":"Students in this course will learn about Materials that are used in nuclear energy systems. The c..."},"27731":{"name":"SPECIAL TOPICS: Hard and Superhard Materials","number":"27731","units":6,"blurb":"This course will focus on the fundamental principles hard and superhard materials and coatings. W..."},"27752":{"name":"Foundations of Semiconductor Nanostructures","number":"27752","units":12,"blurb":"This course is designed to provide students with a foundation of the physics required to understa..."},"27756":{"name":"Masters Project","number":"27756","units":0,"blurb":"Individual research project, including laboratory, theroetical, library or design work followed b..."},"27761":{"name":"Special Topics: Kinetics of Metallurgical Reactions and Processes","number":"27761","units":6,"blurb":"This class uses examples from the ironmaking and steelmaking to illustrate different rate-determi..."},"27766":{"name":"Diffusion in Materials","number":"27766","units":6,"blurb":"This course is designed to allow the student to become familiar with the fundamental principles d..."},"27788":{"name":"Defects in Materials","number":"27788","units":6,"blurb":"This course addresses the fundamental properties of defects in crystalline solids, as well as the..."},"27791":{"name":"Mechanical Behavior of Materials","number":"27791","units":12,"blurb":"The intent of the course is to introduce various measures indicative of the performance of materi..."},"27792":{"name":"Solidification Processing","number":"27792","units":12,"blurb":"The goal of this course is to enable the student to solve practical solidification processing pro..."},"27796":{"name":"Structure of Materials","number":"27796","units":6,"blurb":"The skills and ideas necessary to understand the atomic structure of crystalline materials are pr..."},"27797":{"name":"Bonding of Materials","number":"27797","units":6,"blurb":"Models for cohesive forces in crystals are reviewed; both quantitative and phenomenological descr..."},"27798":{"name":"Thermodynamics I","number":"27798","units":6,"blurb":"Course Description: The laws, concepts, and definitions of classical thermodynamics as well selec..."},"27799":{"name":"Thermodynamics II","number":"27799","units":6,"blurb":"Course Description: The course will apply thermodynamic fundamentals covered in Thermodynamics I ..."},"32100":{"name":"Naval Laboratory","number":"32100","units":3,"blurb":"Military drill, physical fitness, and leadership seminars."},"32101":{"name":"Introduction to Naval Science","number":"32101","units":6,"blurb":"A general introduction to the naval profession and to concepts of Seapower. Instruction emphasize..."},"32102":{"name":"Seapower and Maritime Affairs","number":"32102","units":6,"blurb":"This course surveys US naval history from its European origins to the present with emphasis on ma..."},"32200":{"name":"Naval Laboratory","number":"32200","units":3,"blurb":"Military drill, physical fitness, and leadership seminars."},"32201":{"name":"Leadership & Management","number":"32201","units":9,"blurb":"This course is a comprehensive advanced-level study of organizational behavior and management. To..."},"32212":{"name":"Navigation","number":"32212","units":9,"blurb":"An in-depth study of piloting and an introduction to celestial navigation theory. Students learn ..."},"32300":{"name":"Naval Laboratory","number":"32300","units":3,"blurb":"Military drill, physical fitness, and leadership seminars."},"32310":{"name":"Evolution Of Warfare","number":"32310","units":9,"blurb":"This course is to provide the student with a very basic understanding of the art and concepts of ..."},"32311":{"name":"Naval Ship Systems I-Engineering","number":"32311","units":9,"blurb":"A detailed study of ship characteristics and types including ship design, hydrodynamic forces, st..."},"32312":{"name":"Naval Ship Systems II-Weapons","number":"32312","units":9,"blurb":"This course outlines the theory and employment of weapons systems. The student explores the proce..."},"32400":{"name":"Naval Laboratory","number":"32400","units":3,"blurb":"Military drill, physical fitness, and leadership seminars."},"32402":{"name":"Leadership and Ethics","number":"32402","units":9,"blurb":"The study of naval junior officer responsibilities. The course exposes the student to a study of ..."},"32411":{"name":"Naval Operations and Seamanship","number":"32411","units":9,"blurb":"Designed as an introduction to naval operations and shipboard evolutions, vessel behavior and cha..."},"33100":{"name":"Basic Experimental Physics","number":"33100","units":6,"blurb":"This course provides students with a basic introduction to experimental physics. The content of t..."},"33104":{"name":"Experimental Physics","number":"33104","units":9,"blurb":"This course provides first year students and sophomores with an introduction to the methods of ex..."},"33106":{"name":"Physics I for Engineering Students","number":"33106","units":12,"blurb":"This is a first semester, calculus-based introductory physics course. Basic principles of mechani..."},"33107":{"name":"Physics II for Engineering Students","number":"33107","units":12,"blurb":"This is the second half of a two-semester calculus-based introductory physics sequence for engine..."},"33111":{"name":"Physics I for Science Students","number":"33111","units":12,"blurb":"This calculus based course combines the basic principles of mechanics with some quantum physics a..."},"33112":{"name":"Physics II for Science Students","number":"33112","units":12,"blurb":"This is the second semester course that follows 33111. Electricity and magnetism is developed, in..."},"33114":{"name":"Physics of Musical Sound","number":"33114","units":9,"blurb":"An introduction to the physics and psychophysics of musical sound. Elementary physics of vibratin..."},"33115":{"name":"Physics for Future Presidents","number":"33115","units":9,"blurb":"Countless topics of social and political importance are intimately related to science in general ..."},"33120":{"name":"Science and Science Fiction","number":"33120","units":9,"blurb":"We will view and critique the science content in a selection of science fiction films, spanning m..."},"33124":{"name":"Introduction to Astronomy","number":"33124","units":9,"blurb":"Astronomy continues to enjoy a golden age of exploration and discovery. This course presents a br..."},"33126":{"name":"Astronomy Lab","number":"33126","units":3,"blurb":"This course is the laboratory source in science and astronomy. It overviews the scientific method..."},"33132":{"name":"Matter and Interactions II","number":"33132","units":12,"blurb":"A more challenging alternative to 33112, Physics for Science Students II. Emphasis on atomic-leve..."},"33151":{"name":"Matter and Interactions I","number":"33151","units":12,"blurb":"A more challenging alternative to 33-111, Physics for Science Students I. Students with particula..."},"33201":{"name":"Physics Sophomore Colloquium I","number":"33201","units":2,"blurb":"This course (together with 33-202) is designed to give students an overview of the field of Physi..."},"33202":{"name":"Physics Sophomore Colloquium II","number":"33202","units":2,"blurb":"Continuation of 33201."},"33211":{"name":"Physics III: Modern Essentials","number":"33211","units":10,"blurb":"Physics III is primarily for third-semester students of physics, including all physics majors, bu..."},"33213":{"name":"Mini-Course in Special Relativity","number":"33213","units":4,"blurb":"This course spans the first six weeks of 33211, Physics III: Modern Essentials. It treats the Mec..."},"33224":{"name":"Stars, Galaxies and the Universe","number":"33224","units":9,"blurb":"The study of astronomy has blossomed over the past few decades as a result of new ground-based an..."},"33225":{"name":"Quantum Physics and Structure of Matter","number":"33225","units":9,"blurb":"This course introduces the basic theory used to describe the microscopic world of electrons, atom..."},"33228":{"name":"Electronics I","number":"33228","units":10,"blurb":"An introductory laboratory and lecture course with emphasis on elementary circuit analysis, desig..."},"33231":{"name":"Physical Analysis","number":"33231","units":10,"blurb":"This course aims to develop analytical skills and mathematical modeling skills across a broad spe..."},"33232":{"name":"Mathematical Methods of Physics","number":"33232","units":10,"blurb":"This course introduces, in the context of physical systems, a variety of mathematical tools and t..."},"33234":{"name":"Quantum Physics","number":"33234","units":10,"blurb":"An introduction to the fundamental principles and applications of quantum physics. A brief review..."},"33241":{"name":"Introduction to Computational Physics","number":"33241","units":9,"blurb":"The course emphasizes the formulation of physical problems for machine computation with explorati..."},"33301":{"name":"Physics Upperclass Colloquium I","number":"33301","units":1,"blurb":"Upperclass Physics majors meet together for 1 hour a week to hear discussions on current physics ..."},"33302":{"name":"Physics Upperclass Colloquium II","number":"33302","units":1,"blurb":"Continuation of 33301."},"33331":{"name":"Physical Mechanics I","number":"33331","units":10,"blurb":"Fundamental concepts of classical mechanics. Conservation laws, momentum, energy, angular momentu..."},"33332":{"name":"Physical Mechanics II","number":"33332","units":10,"blurb":"This is the second semester of a two-semester course on classical mechanics. The course will use ..."},"33338":{"name":"Intermediate Electricity and Magnetism I","number":"33338","units":10,"blurb":"This course includes the basic concepts of electro- and magnetostatics. In electrostatics, topics..."},"33339":{"name":"Intermediate Electricity and Magnetism II","number":"33339","units":10,"blurb":"This course focuses on electro- and magnetodynamics. Topics include Faraday's Law of induction, e..."},"33340":{"name":"Modern Physics Laboratory","number":"33340","units":10,"blurb":"Emphasis is on hands-on experience observing important physical phenomena in the lab, advancing t..."},"33341":{"name":"Thermal Physics I","number":"33341","units":10,"blurb":"The three laws of classical thermodynamics, which deal with the existence of state functions for ..."},"33342":{"name":"Thermal Physics II","number":"33342","units":10,"blurb":"This course begins with a more systematic development of formal probability theory, with emphasis..."},"33350":{"name":"Undergraduate Research","number":"33350","units":0,"blurb":"The student undertakes a project of interest under the supervision of a faculty member. May inclu..."},"33355":{"name":"Nanoscience and Nanotechnology","number":"33355","units":9,"blurb":"Offered alternative years. This course will explore the underlying science behind nanotechnology,..."},"33441":{"name":"Introduction to BioPhysics","number":"33441","units":10,"blurb":"This intermediate level course is primarily offered to Physics and Biology undergrads (junior/sen..."},"33444":{"name":"Introduction to Nuclear and Particle Physics","number":"33444","units":9,"blurb":"Description of our understanding of nuclei, elementary particles, and quarks, with equal emphasis..."},"33445":{"name":"Adv Quantum Physics I","number":"33445","units":9,"blurb":"Mathematics of quantum theory, linear algebra and Hilbert spaces; review of classical mechanics; ..."},"33446":{"name":"Advanced Quantum Physics II","number":"33446","units":9,"blurb":"Classical symmetries; quantum symmetries; rotations and angular momentum; spin; addition of angul..."},"33448":{"name":"Introduction to Solid State Physics","number":"33448","units":9,"blurb":"This course gives a quantitative description of crystal lattices, common crystal structures obtai..."},"33451":{"name":"Senior Research","number":"33451","units":0,"blurb":"Open to all senior physics majors. May include research done in a research lab, extending the cap..."},"33456":{"name":"Advanced Computational Physics","number":"33456","units":9,"blurb":"This course emphasizes application of practical numerical techniques to the types of problems tha..."},"33466":{"name":"Extragalactic Astrophysics and Cosmology","number":"33466","units":9,"blurb":"Starting from the expanding universe of galaxies, this course lays out the structure of the unive..."},"33467":{"name":"Astrophysics of Stars and the Galaxy","number":"33467","units":9,"blurb":"The physics of stars is introduced from first principles, leading from star formation to nuclear ..."},"33499":{"name":"Supervised Reading","number":"33499","units":0,"blurb":"The student explores a certain area of advanced physics under the supervision of a faculty member..."},"33650":{"name":"General Relativity","number":"33650","units":9,"blurb":"General Relativity is the classical theory of gravity. It is widely recognized as a beautiful the..."},"33755":{"name":"Quantum Mechanics I","number":"33755","units":12,"blurb":"This course introduces fundamental concepts of quantum mechanics. Applications are made to quantu..."},"33756":{"name":"Quantum Mechanics II","number":"33756","units":12,"blurb":"This course focuses on qualitative and approximation methods in quantum mechanics, including time..."},"33759":{"name":"Introduction to Mathematical Physics I","number":"33759","units":12,"blurb":"This course is an introduction to methods of mathematical analysis used in solving physical probl..."},"33761":{"name":"Classical Electrodynamics I","number":"33761","units":12,"blurb":"This course deals with the static and dynamic properties of the electromagnetic field as describe..."},"33762":{"name":"Classical Electrodynamics II","number":"33762","units":12,"blurb":"The applications of electromagnetic theory to various physical systems is the main emphasis of th..."},"33765":{"name":"Statistical Mechanics","number":"33765","units":12,"blurb":"This course develops the methods of statistical mechanics and uses them to calculate observable p..."},"33767":{"name":"Biophysics: From Basic Concepts to Current Research","number":"33767","units":12,"blurb":"Biological Physics aims to apply the principles of physics and the methods of mathematical analys..."},"33769":{"name":"Quantum Mechanics III: Many Body and Relativistic Systems","number":"33769","units":12,"blurb":"The first main theme of this course is quantum mechanics applied to selected many-body problems i..."},"33770":{"name":"Field Theory I","number":"33770","units":12,"blurb":"This course gives systematic studies of the relativistic field theories. Topics included are cano..."},"33771":{"name":"Field Theory II","number":"33771","units":12,"blurb":"Missing Course Description - please contact the teaching department."},"33777":{"name":"Introductory Astrophysics","number":"33777","units":12,"blurb":"Introductory Astrophysics will explore the applications of physics to the following areas: (i) ce..."},"33783":{"name":"Solid State Physics","number":"33783","units":12,"blurb":"This course is designed to give advanced graduate students a fundamental knowledge of the microsc..."},"36149":{"name":"Freshman Seminar: Genomics in the Era of Personalized Medicine","number":"36149","units":9,"blurb":"Our knowledge of the genetic basis for disease has increased dramatically in recent years. As a r..."},"36201":{"name":"Statistical Reasoning and Practice","number":"36201","units":9,"blurb":"This course will introduce students to the basic concepts, logic, and issues involved in statisti..."},"36202":{"name":"Statistical Methods","number":"36202","units":9,"blurb":"This course builds on the principles and methods of statistical reasoning developed in 36201 (or ..."},"36207":{"name":"Probability and Statistics for Business Applications","number":"36207","units":9,"blurb":"This is the first half of a year long sequence in basic statistical methods that are used in busi..."},"36208":{"name":"Regression Analysis","number":"36208","units":9,"blurb":"This is the second half of a year long sequence in basic statistical methods that are used in bus..."},"36217":{"name":"Probability Theory and Random Processes","number":"36217","units":9,"blurb":"This course provides an introduction to probability theory. It is designed for students in electr..."},"36220":{"name":"Engineering Statistics and Quality Control","number":"36220","units":9,"blurb":"This is a course in introductory statistics for engineers with emphasis on modern product improve..."},"36225":{"name":"Introduction to Probability Theory","number":"36225","units":9,"blurb":"This course is the first half of a year long course which provides an introduction to probability..."},"36226":{"name":"Introduction to Statistical Inference","number":"36226","units":9,"blurb":"This course is the second half of a year long course in probability and mathematical statistics. ..."},"36247":{"name":"Statistics for Lab Sciences","number":"36247","units":9,"blurb":"This course is a single-semester comprehensive introduction to statistical analysis of data for s..."},"36303":{"name":"Sampling, Survey and Society","number":"36303","units":9,"blurb":"This course will revolve around the role of sampling and sample surveys in the context of U.S. so..."},"36309":{"name":"Experimental Design for Behavioral and Social Sciences","number":"36309","units":9,"blurb":"Statistical aspects of the design and analysis of planned experiments are studied in this course...."},"36315":{"name":"Statistical Graphics and Visualization","number":"36315","units":9,"blurb":"Graphical displays of quantitative information take on many forms as they help us understand both..."},"36326":{"name":"Mathematical Statistics (Honors)","number":"36326","units":9,"blurb":"This course is a rigorous introduction to the mathematical theory of statistics. A good working k..."},"36350":{"name":"Statistical Computing","number":"36350","units":9,"blurb":"Statistical Computing: An introduction to computing targeted at statistics majors with minimal pr..."},"36401":{"name":"Modern Regression","number":"36401","units":9,"blurb":"This course is an introduction to the real world of statistics and data analysis. We will explore..."},"36402":{"name":"Advanced Methods for Data Analysis","number":"36402","units":9,"blurb":"This course introduces modern methods of data analysis, building on the theory and application of..."},"36410":{"name":"Introduction to Probability Modeling","number":"36410","units":9,"blurb":"An introductory-level course in stochastic processes. Topics typically include Poisson processes,..."},"36428":{"name":"Time Series","number":"36428","units":6,"blurb":"The course is designed for graduate students and advanced undergraduate students. It will introdu..."},"36459":{"name":"Statistical Models of the Brain","number":"36459","units":12,"blurb":"This new course is intended for CNBC students, as an additional option for fulfilling the computa..."},"36461":{"name":"Special Topics: Statistical Methods in Epidemiology","number":"36461","units":9,"blurb":"TBD Course Website: http://www.stat.cmu.edu/academics/courselist"},"36462":{"name":"Special Topics: Data Mining","number":"36462","units":9,"blurb":"Data mining is the science of discovering patterns and learning structure in large data sets. Cov..."},"36490":{"name":"Undergraduate Research","number":"36490","units":9,"blurb":"This course is designed to give undergraduate students experience using statistics in real resear..."},"36494":{"name":"Astrostatistics","number":"36494","units":6,"blurb":"Since a young age, many of us have pondered the vastness and beauty of the Universe as we gazed u..."},"36700":{"name":"Probability and Mathematical Statistics I","number":"36700","units":12,"blurb":"to be determined by department"},"36705":{"name":"Intermediate Statistics","number":"36705","units":12,"blurb":"This course covers the fundamentals of theoretical statistics. Topics include: probability inequa..."},"36762":{"name":"Data Privacy","number":"36762","units":6,"blurb":"Protection of individual data is a growing problem due to the large amount of sensitive and perso..."},"38101":{"name":"EUREKA!: Discovery and Its Impact","number":"38101","units":6,"blurb":"The MCS first-year seminar \"EUREKA: Discovery and Its Impact\" will equip new students with founda..."},"38411":{"name":"The Science and Mathematics of Art","number":"38411","units":6,"blurb":"This interdisciplinary course will provide a view of the application of mathematical and scientif..."},"39200":{"name":"Business for Engineers","number":"39200","units":9,"blurb":"This course is intended to prepare CIT graduates for the fast paced world of modern industry. The..."},"39210":{"name":"Experiential Learning I","number":"39210","units":0,"blurb":"The engineer of the 21st century will need to operate effectively in many settings and often with..."},"39220":{"name":"Experiential Learning II","number":"39220","units":0,"blurb":"The engineer of the 21st century will need to operate effectively in many settings and often with..."},"39250":{"name":"CIT Undergraduate Projects","number":"39250","units":0,"blurb":"This course number is to be used for Fall CIT freshman research projects only. Student must compl..."},"39251":{"name":"CIT Undergraduate Projects","number":"39251","units":0,"blurb":"This course number is to be used for Spring CIT freshman research projects only. Student must com..."},"39310":{"name":"Experiential Learning III","number":"39310","units":0,"blurb":"The engineer of the 21st century will need to operate effectively in many settings and often with..."},"39447":{"name":"CIT Undergraduate Interdisciplinary Design Project","number":"39447","units":0,"blurb":"39-447 CIT Undergraduate Interdisciplinary Design Project 3-24 units This course is to be used fo..."},"39500":{"name":"Honors Research Project","number":"39500","units":0,"blurb":"Juniors who have an accumulated QPA of at least 3.5 receive an invitation to participate in the p..."},"39600":{"name":"Integrated Product Development","number":"39600","units":12,"blurb":"The IPD course focuses on team-based integrated product development among engineering, business, ..."},"39605":{"name":"Engineering Design Projects","number":"39605","units":12,"blurb":"In this project course, students work in multidisciplinary teams to design products or processes...."},"39606":{"name":"Engineering Design Projects","number":"39606","units":12,"blurb":"In this project course, students work in multidisciplinary teams to design products or processes...."},"39647":{"name":"Special Topics in Design","number":"39647","units":0,"blurb":"This course is to be use for Interdisciplinary Engineering Design Independent Study. It can be ad..."},"39648":{"name":"Rapid Design and Prototyping  of Computer Science","number":"39648","units":12,"blurb":"This course deals with rapid prototyping, manufacture, and applications of a new generation of we..."},"39660":{"name":"Masters EST&P Project","number":"39660","units":0,"blurb":"This project course is designed for EST&P students who are working on an independent investigatio..."},"39699":{"name":"Career & Professional Development for Engineering Masters Students","number":"39699","units":3,"blurb":"This professional development course is designed to engage, educate and empower engineering Maste..."},"42101":{"name":"Introduction to Biomedical Engineering","number":"42101","units":12,"blurb":"This course will provide exposure to basic biology and engineering problems associated with livin..."},"42200":{"name":"Sophomore BME Research Project","number":"42200","units":0,"blurb":"Research projects for sophomores under the direction of a regular or adjunct BME faculty member. ..."},"42201":{"name":"Professional Issues in Biomedical Engineering","number":"42201","units":3,"blurb":"This course exposes students to many of the issues that biomedical engineers face. It provides an..."},"42202":{"name":"Physiology","number":"42202","units":9,"blurb":"This course is an introduction to human physiology and includes units on all major organ systems...."},"42203":{"name":"Biomedical Engineering Laboratory","number":"42203","units":9,"blurb":"This laboratory course is designed to provide students with the ability to make measurements on a..."},"42300":{"name":"Junior BME Research Project","number":"42300","units":0,"blurb":"Research projects for juniors under the direction of a regular or adjunct BME faculty member. Arr..."},"42341":{"name":"Introduction to Biomechanics","number":"42341","units":9,"blurb":"This course covers the application of solid and fluid mechanics to living tissues. This includes ..."},"42400":{"name":"Senior BME Research Project","number":"42400","units":0,"blurb":"Research projects for seniors under the direction of a regular or adjunct BME faculty member. Arr..."},"42401":{"name":"Foundation of BME Design","number":"42401","units":6,"blurb":"This course introduces Biomedical Engineering students to the design of useful biomedical product..."},"42402":{"name":"BME Design Project","number":"42402","units":9,"blurb":"This course focuses on integrated product development for biomedical products. Teams will consist..."},"42411":{"name":"Engineering Biomaterials","number":"42411","units":9,"blurb":"This course will cover structure-processing-property relationships in biomaterials for use in med..."},"42431":{"name":"Introduction to Biomedical Imaging and Image Analysis","number":"42431","units":12,"blurb":"This course gives an overview of tools and tasks in various biological and biomedical imaging mod..."},"42444":{"name":"Medical Devices","number":"42444","units":9,"blurb":"This course is an introduction to the engineering, clinical, legal and regulatory aspects of medi..."},"42447":{"name":"Rehabilitation Engineering","number":"42447","units":9,"blurb":"Rehabilitation engineering is the systematic application of engineering sciences to design, devel..."},"42612":{"name":"Tissue Engineering","number":"42612","units":12,"blurb":"This course will train students in advanced cellular and tissue engineering methods that apply ph..."},"42620":{"name":"Engineering Molecular Cell Biology","number":"42620","units":12,"blurb":"Cells are not only basic units of living organisms but also fascinating engineering systems that ..."},"42624":{"name":"Biological Transport and Drug Delivery","number":"42624","units":9,"blurb":"Analysis of transport phenomena in life processes on the molecular, cellular, organ and organism ..."},"42630":{"name":"Introduction to Neuroscience for Engineers","number":"42630","units":12,"blurb":"The first half of the course will introduce engineers to the neurosciences from the cellular leve..."},"42631":{"name":"Neural Data Analysis","number":"42631","units":9,"blurb":"The vast majority of behaviorally relevant information is transmitted through the brain by neuron..."},"42632":{"name":"Neural Signal Processing","number":"42632","units":12,"blurb":"The brain is among the most complex systems ever studied. Underlying the brain's ability to proce..."},"42640":{"name":"Computational Bio-Modeling and Visualization","number":"42640","units":12,"blurb":"Biomedical modeling and visualization play an important role in mathematical modeling and compute..."},"42645":{"name":"Cellular Biomechanics","number":"42645","units":9,"blurb":"This course discusses how mechanical quantities and processes such as force, motion, and deformat..."},"42646":{"name":"Molecular Biomechanics","number":"42646","units":9,"blurb":"This class is designed to present concepts of molecular biology, cellular biology and biophysics ..."},"42647":{"name":"Introduction to Continuum Biomechanics","number":"42647","units":12,"blurb":"This course provides a general survey of the application of continuum mechanics (fluid and solid ..."},"42648":{"name":"Cardiovascular Mechanics","number":"42648","units":12,"blurb":"The primary objective of the course is to learn to model blood flow and mechanical forces in the ..."},"42698":{"name":"Special Topics","number":"42698","units":9,"blurb":"42698A Bioinstrumentation (Spring), 42698C Introduction to Biomedical Signal Processing (Fall) 42..."},"42699":{"name":"Special Topics","number":"42699","units":12,"blurb":"42699G Computational Methods in Biomedical Engineering (Spring), 42699L Inventive Problem Solving..."},"42735":{"name":"Medical Image Analysis","number":"42735","units":12,"blurb":"Students will gain theoretical and practical skills in medical image analysis, including skills r..."},"48025":{"name":"First Year Seminar: Architecture Edition I","number":"48025","units":3,"blurb":"In this course, students will learn about effective strategies for teaching architecture and the ..."},"48026":{"name":"First Year Seminar: Architecture Edition II","number":"48026","units":3,"blurb":"The first year seminar (part 2) introduces students to opportunities at Carnegie Mellon Universit..."},"48065":{"name":"Architectural Rapid Prototyping for Non-Architects","number":"48065","units":9,"blurb":"The continuing development of rapid prototyping technologies has expanded the range of applicatio..."},"48095":{"name":"Spatial Concepts for Non-Architects I","number":"48095","units":0,"blurb":"This course serves as an introduction to the spatial concepts of architecture for students from o..."},"48100":{"name":"Architecture Design Studio: Foundation I","number":"48100","units":12,"blurb":"As the first architectural design studio course, the Foundation I studio establishes a fundamenta..."},"48105":{"name":"Architecture Design Studio: Foundation II","number":"48105","units":12,"blurb":"The 48105 studio, called Foundation II, is the second studio in CMU?s professional B.Arch program..."},"48116":{"name":"Building Physics","number":"48116","units":9,"blurb":"In the first part, the course will introduce fundamental lighting principles in the context of pe..."},"48120":{"name":"Digital Media I","number":"48120","units":6,"blurb":"IDM is a required course for all first year architecture students. The course introduces students..."},"48121":{"name":"Analog Media I","number":"48121","units":6,"blurb":"Architects draw and build models for a variety of reasons: to record and reference; to analyze an..."},"48125":{"name":"Digital Media II","number":"48125","units":6,"blurb":"IDM2 is a required course for all first year architecture students. This course is the continuati..."},"48126":{"name":"Analog Media II","number":"48126","units":6,"blurb":"?Drawing and Appearance? is a traditional course in free-hand architectural drawing. Its central ..."},"48200":{"name":"Architecture Design Studio: Elaboration I","number":"48200","units":18,"blurb":"This studio is an introduction to architectural design stressing concept generation and the devel..."},"48205":{"name":"Architecture Design Studio: Elaboration II","number":"48205","units":18,"blurb":"Building on the fall studio, the spring semester is concerned with more in-depth understanding an..."},"48215":{"name":"Materials and Assembly","number":"48215","units":9,"blurb":"The fourth semester of architectural studies at Carnegie Mellon University is concerned with the ..."},"48240":{"name":"Historical Survey of World Architecture and Urbanism I","number":"48240","units":9,"blurb":"This course cuts a broad swath through time, geography and cultures, surveying critical episodes ..."},"48241":{"name":"Modern Architecture","number":"48241","units":9,"blurb":"This survey of modern architectural history lecture course picks up where the historical survey 4..."},"48300":{"name":"Architecture Design Studio: Integration I","number":"48300","units":18,"blurb":"Design Studio III: Building and Site is a required course taught in the third year. The subjects ..."},"48305":{"name":"Architecture Design Studio: Integration II","number":"48305","units":18,"blurb":"The basis for the CMU studio course sequence is the expectation that the student retains and appl..."},"48315":{"name":"Environment I: Climate & Energy","number":"48315","units":9,"blurb":"This course introduces architectural design responses for energy conservation, human comfort, and..."},"48324":{"name":"Structures/Statics","number":"48324","units":9,"blurb":"To be provided by department"},"48332":{"name":"Teaching and Learning","number":"48332","units":6,"blurb":"In this course, students will learn about effective strategies for teaching architecture and the ..."},"48341":{"name":"Expression in Architecture","number":"48341","units":9,"blurb":"This architectural history seminar will explore expression in architecture in its many forms, par..."},"48350":{"name":"Postwar Modern Architecture and Theory","number":"48350","units":9,"blurb":"This architectural history lecture course surveys the modern buildings and architectural theory o..."},"48351":{"name":"Human Factors in Architecture","number":"48351","units":9,"blurb":"Required course Human Factors is an investigation of what makes buildings tick for people: the in..."},"48356":{"name":"Color Drawing","number":"48356","units":9,"blurb":"The course will use three media, pastels, colored pencils and water color to address the represen..."},"48368":{"name":"Rediscovering Antiquity: Travelers, Archeologists & Architects in Mediterranean","number":"48368","units":9,"blurb":"The course proposes a journey in the Mediterranean, with special focus on Greece and Turkey, but ..."},"48371":{"name":"American House and Housing","number":"48371","units":9,"blurb":"This architectural history course examines the development of American house and housing choices ..."},"48374":{"name":"History of Architecture in the Islamic World- A Primer","number":"48374","units":9,"blurb":"This course serves as an introduction to the architecture that developed in the Islamic lands ove..."},"48380":{"name":"Real Estate Design and Development","number":"48380","units":6,"blurb":"This course will provide an overview of the real estate development process and explore the inter..."},"48381":{"name":"Issues of Practice","number":"48381","units":6,"blurb":"Course description coming soon."},"48383":{"name":"Ethics and Decision Making in Architecture","number":"48383","units":6,"blurb":"Course description coming soon."},"48390":{"name":"Physical Computing Studio","number":"48390","units":10,"blurb":"This collaborative studio course will allow interdisciplinary teams to develop wearables with a f..."},"48400":{"name":"Advanced Synthesis Options Studio I","number":"48400","units":18,"blurb":"Having proven competency in the spectrum of skills determined necessary for tomorrow's architect ..."},"48432":{"name":"Environment II: Advanced Building Systems Integration & Mechanical Systems","number":"48432","units":9,"blurb":"To be determined by department"},"48440":{"name":"American Regions & Regionalism: An Architectural History of Place, Time, and Cul","number":"48440","units":9,"blurb":"Despite the leveling forces of mass culture and globalization, the geographic and social diversit..."},"48448":{"name":"History of Sustainable Architecture","number":"48448","units":9,"blurb":"The History of Sustainable Architecture investigates themes of nature, ecology, pollution and con..."},"48454":{"name":"Futures of the City/Cities of the Future","number":"48454","units":9,"blurb":"If all design can be read as attempts to predict and to shape the future, then no one looks furth..."},"48470":{"name":"Exploring Pattern Through Lamination","number":"48470","units":6,"blurb":"Lamination is the process of gluing wood together along the edge or face of a plank. Pattern may ..."},"48473":{"name":"Hand and Machine Joinery, New Directions","number":"48473","units":6,"blurb":"Hand and Machine Joinery, New Directions is offered in the second half of the fall semester. As t..."},"48497":{"name":"Thesis Prep","number":"48497","units":3,"blurb":"The primary goal of this course is to begin the process of formulating a robust research topic in..."},"48500":{"name":"Advanced Synthesis Options Studio III","number":"48500","units":18,"blurb":"Having proven competency in the spectrum of skills determined necessary for tomorrow's architect ..."},"48509":{"name":"Architecture Design Studio: Thesis I","number":"48509","units":18,"blurb":"Thesis is a year-long, independently defined research and design project that takes the place of ..."},"48519":{"name":"Architecture Design Studio: Thesis II","number":"48519","units":18,"blurb":"?Thesis? is a year-long, independently defined research and design project that takes the place o..."},"48530":{"name":"Human-Machine Virtuosity","number":"48530","units":12,"blurb":"Human dexterous skill embodies a wealth of physical understanding which complements computer-base..."},"48531":{"name":"Fabricating Customization","number":"48531","units":9,"blurb":"This course relocates the design process from the studio to the lab-workshop, moving design decis..."},"48558":{"name":"Reality Computing","number":"48558","units":0,"blurb":"The Adaptive House is the focus of an advanced design studio based around the collaborative devel..."},"48564":{"name":"Furniture Design & Construction","number":"48564","units":9,"blurb":"There is a creative core in people which is much more closely related to the hand than to the hea..."},"48568":{"name":"Advanced CAD, BIM, and 3D Visualization","number":"48568","units":9,"blurb":"This course is designed to introduce a student to advanced software applications, including AutoC..."},"48569":{"name":"GIS/CAFM","number":"48569","units":9,"blurb":"A Geographic Information System (GIS) integrates displays, edits, analyzes, and shares spatial da..."},"48576":{"name":"Mapping Urbanism","number":"48576","units":9,"blurb":"This seminar provides the critical tools necessary to examine the city as both a representation a..."},"48587":{"name":"Architecture Lighting Design","number":"48587","units":9,"blurb":"Through hands-on exploration in the light lab, lecture and discussion, students will develop a de..."},"48711":{"name":"Paradigms of Research in Architecture","number":"48711","units":6,"blurb":"This course is both an introduction to important models and methods of academic research particul..."},"48721":{"name":"Building Controls and Diagnostics","number":"48721","units":12,"blurb":"This course introduces the concepts and methods of building diagnostics. It focuses on the empiri..."},"48722":{"name":"Building Performance Modeling","number":"48722","units":12,"blurb":"This course introduces fundamentals and computational methods in building performance modeling. T..."},"48723":{"name":"Performance of Advanced Building Systems","number":"48723","units":9,"blurb":"Advanced Building Systems Integration This is a graduate level course that focuses on commercial ..."},"48724":{"name":"Scripting and Parametric Design","number":"48724","units":0,"blurb":"This is an introductory course to parametric modeling, which can be taken either as a half-semest..."},"48729":{"name":"Productivity, Health and the Quality of Buildings","number":"48729","units":0,"blurb":"Given the growing demand for green buildings by federal and private sector clients, professional ..."},"48738":{"name":"Special Topics: Ecological Footprints","number":"48738","units":6,"blurb":"The Ecological Footprint is a measure of the demand that human activity puts on the biosphere. Mo..."},"48739":{"name":"Making Things Interactive (Graduate)","number":"48739","units":10,"blurb":"In this hands-on design-build class you will learn the skills to embed sensors and actuators (lig..."},"48752":{"name":"Zero Energy Housing","number":"48752","units":9,"blurb":"Net zero energy construction has gone from concept to policy in just a few years, but built examp..."},"48753":{"name":"Urban Design Methods","number":"48753","units":9,"blurb":"This course introduces urban design history, theory and methods of analysis and representation. U..."},"48795":{"name":"LEED, Green Design and Building Rating in Global Context","number":"48795","units":6,"blurb":"LEED, Green Design and Building Rating in Global Context is a graduate level mini-course that exa..."},"48801":{"name":"Office Visits","number":"48801","units":6,"blurb":"Each candidate will arrange with their home office a virtual 'visit' for members of the degree pr..."},"48802":{"name":"Principles of Research I","number":"48802","units":6,"blurb":"Candidate's current knowledge of problems, methods and outcomes based on their professional work...."},"48803":{"name":"Areas of Practice","number":"48803","units":6,"blurb":"Candidate presentations of area(s) of expertise summarizing the methods and problems that are pre..."},"48804":{"name":"International Exchange I","number":"48804","units":12,"blurb":"Conduct workshops for collaborative research and information exchange meetings with EU cohorts vi..."},"48805":{"name":"Directed Study I","number":"48805","units":6,"blurb":"Prepare the first publishable article under the supervision of the advisor, based on the current ..."},"48809":{"name":"International Exchange II","number":"48809","units":12,"blurb":"Visit Université Toulouse III - Paul Sabatier, Doctoral Programs in Architecture and participate ..."},"48810":{"name":"Comparative Analysis of US and EU Practices","number":"48810","units":6,"blurb":"Practices in the building sector vary considerably in the US versus the EU. The instructor will p..."},"51101":{"name":"Studio: Survey of Design","number":"51101","units":9,"blurb":"Students will conduct activities that will help them notice design in the world, investigate how ..."},"51102":{"name":"Design Lab","number":"51102","units":9,"blurb":"Introduce concepts and methods to familiarize students with a range of analog and digital modes o..."},"51103":{"name":"Design Workshop I","number":"51103","units":3,"blurb":"Design Workshop is a special course created for first year design students and serves as a supple..."},"51104":{"name":"Design Workshop II","number":"51104","units":3,"blurb":"A recitation style course that is conducted in service of the primary design courses during the s..."},"51121":{"name":"Visualizing","number":"51121","units":9,"blurb":"This course introduces basic drawing and sketching techniques including figure-ground translation..."},"51122":{"name":"Collaborative Visualizing","number":"51122","units":9,"blurb":"This course introduces frameworks of notational, exploratory and explanatory sketching using coll..."},"51132":{"name":"Introduction to Photo Design","number":"51132","units":4.5,"blurb":"Using a digital camera, students learn how to extend their 'seeing' with the camera, both in the ..."},"51134":{"name":"Photo Design II","number":"51134","units":4.5,"blurb":"A continuation of Introduction to Photo Design Prerequites: Introduction to Photo Design; 51132"},"51171":{"name":"Placing","number":"51171","units":9,"blurb":"This course will explore the context in which students study design. Using primarily photography,..."},"51172":{"name":"Systems","number":"51172","units":9,"blurb":"Explore how to understand complex phenomena by creating models of the interrelations between comp..."},"51173":{"name":"Human Experience in Design","number":"51173","units":9,"blurb":"This course introduces the central themes of design and the design professions, and the human cen..."},"51202":{"name":"CD Studio II: Organizing Information","number":"51202","units":9,"blurb":"In this course students participate in a range of exercises, projects, discussions, and readings ..."},"51212":{"name":"ID Studio II: Meaning of Form","number":"51212","units":9,"blurb":"This studio course introduces students to the functional and expressive meaning of product form t..."},"51222":{"name":"Decoding Place","number":"51222","units":9,"blurb":"This course will explore ways to decode, see, think and interpret the visual language of 'place'...."},"51224":{"name":"CD: Web Design","number":"51224","units":9,"blurb":"This class will introduce the basics of designing and building websites, the fundamentals of HTML..."},"51225":{"name":"Communications Studio I: Understanding Form & Context","number":"51225","units":4.5,"blurb":"Giving form to messages and information using type, color, and images will be the focus of this i..."},"51227":{"name":"Prototyping Lab I: Communications","number":"51227","units":4.5,"blurb":"Learn the basics of the CS suite, particularly InDesign (style sheets), Illustrator, and Photosho..."},"51229":{"name":"Digital Photographic Imaging","number":"51229","units":9,"blurb":"The objective of this course is to provide students with a practical, technical and theoretical f..."},"51231":{"name":"Calligraphy I","number":"51231","units":9,"blurb":"Working with pure unadorned Roman letterforms, this course introduces students to the theory and ..."},"51232":{"name":"Calligraphy II","number":"51232","units":9,"blurb":"This course serves as a continuation and deeper investigation of topics explored in Calligraphy I..."},"51236":{"name":"Information Design","number":"51236","units":9,"blurb":"This undergraduate IDEATE design course focuses on teaching a basic visual design process from st..."},"51242":{"name":"How Things Work: Mechanics and Electronics","number":"51242","units":9,"blurb":"This course investigates the basic principles of mechanics and electronics. Through the combinati..."},"51245":{"name":"Products Studio I: Understanding Form & Context","number":"51245","units":4.5,"blurb":"Learn basic design processes for understanding the scope of the project, brainstorming, defining ..."},"51246":{"name":"Visual Communication Fundamentals","number":"51246","units":4.5,"blurb":"Design elements are powerful tools for reaching your audience. The objective of this course is to..."},"51247":{"name":"Prototyping Lab I: Products","number":"51247","units":4.5,"blurb":"Work in various 2D and 3D mediums to represent ideas and solutions; introduce students to digital..."},"51261":{"name":"Communication Design Fundamentals: Design for Interactions for Communications","number":"51261","units":9,"blurb":"A one-semester course that introduces non-majors to the field of communication design. Through st..."},"51262":{"name":"Communication Design Fundamentals: Design for Interactions for Communications","number":"51262","units":9,"blurb":"A one-semester course that introduces non-majors to the field of communication design. Through st..."},"51264":{"name":"Industrial Design Fundamentals: Design for Interactions for Products","number":"51264","units":9,"blurb":"A one-semester course that introduces non-majors to product development from the industrial desig..."},"51265":{"name":"Environments Studio I: Understanding Form & Context","number":"51265","units":4.5,"blurb":"Learn the basic design processes for experience-driven multi-modal environments, making meaningfu..."},"51267":{"name":"Prototyping Lab I: Environments","number":"51267","units":4.5,"blurb":"Learn CAD, Dreamweaver/HTML, and AfterEffects to build virtual models to express multi-modal aspe..."},"51271":{"name":"How People Work","number":"51271","units":9,"blurb":"Exposure to holistic/emotional, cognitive, and physical factors of people, as approached by desig..."},"51301":{"name":"CD III: Type, Form, Meaning and Context","number":"51301","units":9,"blurb":"This course develops advanced skills in typography and communication design, including the study ..."},"51302":{"name":"CD Studio IV: Designing with Systems","number":"51302","units":9,"blurb":"As the final course in a sequence of typography courses for Communication Design majors, this one..."},"51311":{"name":"Product Design ID III","number":"51311","units":9,"blurb":"Students participate in a range of exercises, projects, discussions, and readings that are geared..."},"51312":{"name":"Products in Systems: ID IV","number":"51312","units":9,"blurb":"This course introduces the themes of product planning and the development of products within syst..."},"51321":{"name":"Photographic Narrative","number":"51321","units":9,"blurb":"Most photographs tell stories. We see photographs in newspapers, magazines, snapshot albums, on t..."},"51322":{"name":"Advanced Digital Imaging","number":"51322","units":4.5,"blurb":"Building on the technical skills and methods of communicating narrative learned in Digital Imagin..."},"51324":{"name":"Basic 3D Prototyping","number":"51324","units":4.5,"blurb":"A half-semester laboratory mini-course introducing a range of materials, methods, and workshop te..."},"51327":{"name":"Introduction to Web Design","number":"51327","units":9,"blurb":"This class will introduce the basics of designing and building websites, the fundamentals of HTML..."},"51328":{"name":"Advanced Web Design","number":"51328","units":9,"blurb":"Advanced Web Design builds off of the fundamentals of Introduction to Web Design to make students..."},"51331":{"name":"Advanced Calligraphy I","number":"51331","units":9,"blurb":"This course serves a continuation of study in the discipline of calligraphy. (It meets at the sam..."},"51332":{"name":"Advanced Calligraphy II","number":"51332","units":9,"blurb":"This course serves a continuation of study in the discipline of calligraphy. (It meets at the sam..."},"51335":{"name":"Mapping and Diagraming","number":"51335","units":9,"blurb":"This course explores the different ways in which we communicate complex information, through maps..."},"51341":{"name":"How Things are Made","number":"51341","units":9,"blurb":"This course will provide a breadth of knowledge for current manufacturing, materials, and process..."},"51344":{"name":"Advanced Digital Prototyping","number":"51344","units":6,"blurb":"This course is an advanced course using SolidWorks computer modeling. It is a prerequisite for Pr..."},"51346":{"name":"Production Prototyping","number":"51346","units":6,"blurb":"This course is the 2nd half of Advanced Digital Prototyping, using your work in SolidWorks to pro..."},"51347":{"name":"Drawing from Nature","number":"51347","units":9,"blurb":"Drawing From Nature This course is about observing and making images of things growing, crawling,..."},"51349":{"name":"Visual Notation/Journaling","number":"51349","units":9,"blurb":"Visual notation is the graphic equivalent of taking written notes. While the camera is a valuable..."},"51352":{"name":"Cardboard Modeling II: Exploring expressive product behavior","number":"51352","units":6,"blurb":"State-of-the-art interactive products express themselves through their screens. This behavior is ..."},"51359":{"name":"Prototyping Tools for Embodying UX Design","number":"51359","units":9,"blurb":"The course intent is to develop appropriate user experience of tools and technology for a project..."},"51375":{"name":"Meaning in Images","number":"51375","units":9,"blurb":"Images abound in our culture. This course takes a critical look at many different kinds of photog..."},"51376":{"name":"Semantics & Aesthetics","number":"51376","units":9,"blurb":"The course will explore the principles of visual composition, proportioning systems and the rules..."},"51377":{"name":"Sensing Environments","number":"51377","units":9,"blurb":"Whereas UX Design is typically described as shaping the immediate environment between a user and ..."},"51380":{"name":"Experiential Media Design","number":"51380","units":9,"blurb":"Experiential Media Design focuses on the theory, methodology and history behind the design, devel..."},"51385":{"name":"Design for Service","number":"51385","units":9,"blurb":"Technology has drastically changed society, and how we design needs to respond, too. Consider the..."},"51396":{"name":"Design Ethos & Action","number":"51396","units":9,"blurb":"Increasingly, designers have the potential to operate as agents of change in a broad range of are..."},"51399":{"name":"Junior Independent Study","number":"51399","units":0,"blurb":"Guidelines for independent study in the Design office. Proposals must be approved by faculty befo..."},"51401":{"name":"Senior Design Lab","number":"51401","units":12,"blurb":"The Fall semester senior year focuses on design agility and helping students develop new ways of ..."},"51404":{"name":"Senior Project","number":"51404","units":12,"blurb":"The senior year offers Design majors the opportunity to explore a variety of advanced topics thro..."},"51425":{"name":"Beginning Book Arts Lab","number":"51425","units":6,"blurb":"Beginning Book Arts Lab Class. 6units. (This class is a prerequisite for the Advanced Book Arts W..."},"51426":{"name":"Beginning Book Arts Lab","number":"51426","units":6,"blurb":"Beginning Book Arts Lab Class. 6units. (This class is a prerequisite for the Advanced Book Arts W..."},"51427":{"name":"Advanced Book Arts Workshop","number":"51427","units":9,"blurb":"Students will be required to plan and design projects that relate to binding, or digital printing..."},"51428":{"name":"Time, Motion and Communication","number":"51428","units":9,"blurb":"This course focuses on designing and presenting time-based messages on screen. The differences be..."},"51441":{"name":"Foundation of BME Design","number":"51441","units":6,"blurb":"This course focuses on the Product Development scope and framing of a new medical device. Student..."},"51442":{"name":"BME Design Project","number":"51442","units":9,"blurb":"This course is the second in sequence of prototyping and testing a proposed medical device produc..."},"51451":{"name":"Fundamentals of Joinery & Furniture Design","number":"51451","units":9,"blurb":"Intensive introduction to traditional joinery techniques and the properties of wood through the u..."},"51452":{"name":"Furniture Design II","number":"51452","units":9,"blurb":"A continuation of 51451, this course explores a much broader range of issues related to furniture..."},"51478":{"name":"Design Fiction & Imaginary Futures","number":"51478","units":9,"blurb":"This praxis-based course will actively engage futures research through the integration of finding..."},"51479":{"name":"Design for Improved Understanding of Health Information","number":"51479","units":9,"blurb":"During the course students will use a design framework and proven methodologies to create health ..."},"51499":{"name":"Senior Independent Study","number":"51499","units":0,"blurb":"Guidelines for independent study in the Design Office. Proposals must be approved by faculty befo..."},"51880":{"name":"Experiential Media Design","number":"51880","units":12,"blurb":"Experiential Media Design focuses on the theory, methodology and history behind the design, devel..."},"52190":{"name":"BXA Seminar I: Building the Wunderkammer","number":"52190","units":9,"blurb":"BXA Seminar I introduces first-year students to the field of interdisciplinary work through the c..."},"52290":{"name":"Literacy Across Disciplines","number":"52290","units":9,"blurb":"This course is intended for CFA students who want to improve their writing and communication skil..."},"52390":{"name":"BXA Undergraduate Research Project","number":"52390","units":0,"blurb":"The BXA Undergraduate Research Project is for students who want to work on a self-designed projec..."},"52391":{"name":"BXA Junior Portfolio","number":"52391","units":0,"blurb":"To better assess the goals and needs of BXA students as they enter their final year and prepare f..."},"52400":{"name":"BXA Seminar: Capstone","number":"52400","units":9,"blurb":"The BXA Capstone gives BXA students the opportunity to demonstrate the extent of their interdisci..."},"52401":{"name":"BXA Seminar IV: Capstone Fall","number":"52401","units":9,"blurb":"The BXA Capstone gives BXA students the opportunity to demonstrate the extent of their interdisci..."},"52402":{"name":"BXA Seminar V: Capstone Spring","number":"52402","units":9,"blurb":"The BXA Capstone gives BXA students the opportunity to demonstrate the extent of their interdisci..."},"52430":{"name":"Music of Iran","number":"52430","units":9,"blurb":"The Iranian civilization is one of the oldest continuing civilizations in the world. Music has pl..."},"52590":{"name":"BXA Internship","number":"52590","units":0,"blurb":"An internship is a supervised professional work experience with clear links to a student's academ..."},"54011":{"name":"Warmup","number":"54011","units":1,"blurb":"Drama majors only."},"54012":{"name":"Warmup","number":"54012","units":1,"blurb":"Drama majors only"},"54101":{"name":"Acting I","number":"54101","units":10,"blurb":"A knowledge and beginning understanding of the components of acting. Basic exercises, improvisati..."},"54102":{"name":"Acting I","number":"54102","units":10,"blurb":"A knowledge and beginning understanding of the components of acting. Basic exercises, improvisati..."},"54103":{"name":"Speech I","number":"54103","units":6,"blurb":"(Speech & Phonetics) The course introduces students to the pronunciation of the sounds of the Sta..."},"54104":{"name":"Speech I","number":"54104","units":6,"blurb":"(Speech and Phonetics) The second semester is a continued investigation and drill of the thirty-n..."},"54105":{"name":"Voice/Alexander I","number":"54105","units":5,"blurb":"Introduction to basic speaking voice and Alexander Technique work. Actors explore building a voca..."},"54106":{"name":"Voice/Alexander I","number":"54106","units":5,"blurb":"Introduction to basic speaking voice and Alexander Technique work. Actors explore building a voca..."},"54107":{"name":"Movement I","number":"54107","units":4,"blurb":"This course serves as a foundation for all future movement studies. Kinesthetic awareness and res..."},"54108":{"name":"Movement I","number":"54108","units":4,"blurb":"This course focuses on the ability to make physically specific choices in order to convey charact..."},"54109":{"name":"Dramaturgy 1: Approaches to Text","number":"54109","units":9,"blurb":"This class focuses on building the skills and knowledge necessary for a dramaturgical analysis of..."},"54110":{"name":"Text for Actors","number":"54110","units":2,"blurb":"This class is in conjunction with Acting I in the School of Drama. The actor/director learns how ..."},"54121":{"name":"Directing I: Sources","number":"54121","units":9,"blurb":"An interdisciplinary exploration of the directors art through the study of modern art movements. ..."},"54122":{"name":"Directing I: Sources","number":"54122","units":9,"blurb":"A continuation of the previous semester focusing on Music and Dance of the twentieth century and ..."},"54123":{"name":"Ballet I","number":"54123","units":5,"blurb":"This course uses Classical technique (Ballet) to build body placement, alignment and muscular str..."},"54124":{"name":"Ballet I","number":"54124","units":5,"blurb":"This course continues Classical technique (Ballet) to build body placement, alignment and muscula..."},"54125":{"name":"Music Skills I","number":"54125","units":4,"blurb":"The students explore the basics of music theory, which includes intervals, rhythm, notation and m..."},"54126":{"name":"Music Skills II","number":"54126","units":4,"blurb":"The students explore the basics of music theory, which includes intervals, rhythm, notation and m..."},"54151":{"name":"Stagecraft","number":"54151","units":15,"blurb":"The stagecraft class is designed to provide an introductory level of technical training in all th..."},"54152":{"name":"Stagecraft","number":"54152","units":11,"blurb":"The stagecraft class is designed to provide an introductory level of technical training in all th..."},"54157":{"name":"Basic PTM","number":"54157","units":6,"blurb":"Students in the Basic PTM course are exposed to the very fundamentals, the primitives, of enterta..."},"54158":{"name":"Basic PTM 2","number":"54158","units":6,"blurb":"Students in the Basic PTM course are exposed to the very fundamentals, the primitives, of enterta..."},"54159":{"name":"Production Symposium I","number":"54159","units":6,"blurb":"Hands on experience in most aspects of building and running a production."},"54160":{"name":"Production Symposium I","number":"54160","units":6,"blurb":"Hands on experience in most aspects of building and running a production."},"54162":{"name":"Introduction to Costume Design","number":"54162","units":6,"blurb":"A rigorous introductory studio course for newly declared School of Drama Costume Design Sophomore..."},"54163":{"name":"Production for Non Majors","number":"54163","units":6,"blurb":"Basic introduction for non-majors to backstage operations through practical experience handling s..."},"54164":{"name":"Production for Non Majors","number":"54164","units":6,"blurb":"Basic introduction for non-majors to backstage operations through practical experience handling s..."},"54166":{"name":"Introduction to Sound Design for Theatre","number":"54166","units":6,"blurb":"Students explore the basic principles and theories of sound design from technical, psychological ..."},"54169":{"name":"Studiocraft","number":"54169","units":13,"blurb":"The studiocraft course provides beginning level instruction in Drawing, Hand Drafting, and CAD Dr..."},"54170":{"name":"Studiocraft","number":"54170","units":8,"blurb":"The studiocraft course provides beginning level instruction in Drawing, Hand Drafting, and CAD Dr..."},"54171":{"name":"Basic Design","number":"54171","units":6,"blurb":"A year-long studio course that explores the principles and elements of design utilizing discreet ..."},"54172":{"name":"Basic Design","number":"54172","units":6,"blurb":"A year-long studio course that explores the principles and elements of design utilizing discreet ..."},"54175":{"name":"Conservatory Hour","number":"54175","units":1,"blurb":"A year-long discussion class for first-year Drama students. Open to non-majors interested in decl..."},"54176":{"name":"Conservatory Hour","number":"54176","units":1,"blurb":"A year-long discussion class for first-year Drama majors. Open to non-majors interested in declar..."},"54177":{"name":"Foundations of Drama I","number":"54177","units":6,"blurb":"In this course, students receive training in the basic analysis of scripts to determine key eleme..."},"54178":{"name":"Foundations of Drama I","number":"54178","units":6,"blurb":"In this course, students receive training in the basic analysis of scripts to determine key eleme..."},"54184":{"name":"Dramaturgy 2: Introduction to Production Dramaturgy","number":"54184","units":9,"blurb":"This class continues the basic skill training of the dramaturg, emphasizing the history of world ..."},"54187":{"name":"Introduction to Playwriting","number":"54187","units":9,"blurb":"Students will be introduced to the major components of writing for the stage, including dramatic ..."},"54190":{"name":"Advanced Playwriting","number":"54190","units":9,"blurb":"This course is intended to continue the process of familiarizing students with the basic componen..."},"54191":{"name":"Acting for Non-Majors","number":"54191","units":9,"blurb":"This class is designed for non-acting majors and introduces the student to the basic principles o..."},"54192":{"name":"Acting for Non-Majors","number":"54192","units":9,"blurb":"This class is designed for non-acting majors and introduces the student to the basic principles o..."},"54193":{"name":"Comedic Writing for Film and Television","number":"54193","units":9,"blurb":"This course is designed to introduce basic screenplay structure and formatting through the explor..."},"54196":{"name":"Advanced Screenwriting","number":"54196","units":9,"blurb":"This course is designed to give writers a variety of tools they can use in writing or rewriting a..."},"54200":{"name":"Dramaturgy Forum","number":"54200","units":1,"blurb":"Programmed and taught by senior students in the Dramaturgy program, this course is required for a..."},"54201":{"name":"Acting II","number":"54201","units":12,"blurb":"Scene study: the fundamental techniques needed to participate in the developing conflict within t..."},"54202":{"name":"Acting II","number":"54202","units":12,"blurb":"Scene study: the fundamental techniques needed to participate in the developing conflict within t..."},"54203":{"name":"Voice and Speech II","number":"54203","units":5,"blurb":"The actors take a more concentrated approach to elevated text. The course focuses on the effectiv..."},"54204":{"name":"Voice and Speech II","number":"54204","units":6,"blurb":"The actors take a more concentrated approach to elevated text. The course focuses on the effectiv..."},"54205":{"name":"Ballet II","number":"54205","units":3,"blurb":"This course is designed to build on the technical foundation, work habits and professional behavi..."},"54206":{"name":"Ballet II","number":"54206","units":3,"blurb":"This course continues to build on the technical foundation, work habits and professional behavior..."},"54207":{"name":"Movement II","number":"54207","units":0,"blurb":"This entire term focuses on the Neutral Mask, a completely non-verbal masked movement form, throu..."},"54208":{"name":"Movement II","number":"54208","units":3,"blurb":"This term is divided between two classic physical forms: Commedia dell'Arte and Clowns. In the fi..."},"54211":{"name":"Actor Dance II","number":"54211","units":3,"blurb":"This course introduces the basic, fundamental vocabulary of Classical technique (Ballet) to train..."},"54212":{"name":"Actor Dance II","number":"54212","units":3,"blurb":"A continuation of Classical technique (Ballet) and a unit of social dance styles, waltz, polka, f..."},"54213":{"name":"Singing for Actors II","number":"54213","units":3,"blurb":"The students have a class voice experience which includes a physical and vocal warm-up and discus..."},"54214":{"name":"Singing for Actors II","number":"54214","units":3,"blurb":"The students have a class voice experience which includes a physical and vocal warm-up and discus..."},"54217":{"name":"Jazz II","number":"54217","units":2,"blurb":"This course is designed to incorporate the strength of classical dance technique to a jazz dance ..."},"54218":{"name":"Jazz II","number":"54218","units":2,"blurb":"This course continues to incorporate the strength of classical dance technique to a jazz dance Tr..."},"54219":{"name":"Music Theatre Literature and Repertoire","number":"54219","units":4,"blurb":"The students are exposed to many music scores of the basic choral and musical theatre literature...."},"54221":{"name":"Directing II: Fundamentals","number":"54221","units":9,"blurb":"Directing II This is a fall-semester course for 2nd-year Directing students and others with speci..."},"54222":{"name":"Directing II: Fundamentals","number":"54222","units":9,"blurb":"A continuation of the work done in the first semester of Directing II. This course is for Directi..."},"54223":{"name":"Tap II","number":"54223","units":2,"blurb":"This course trains the student to develop a comfort level to execute percussive sounds, in a vari..."},"54224":{"name":"Tap II","number":"54224","units":2,"blurb":"This course continues to technically train the student in a variety of percussive rhythmic patter..."},"54229":{"name":"Amy Needs a Name","number":"54229","units":9,"blurb":"Drama majors only. Required for all Sophomore Design and Production majors. Bring tools."},"54230":{"name":"Make-Up for Designers","number":"54230","units":6,"blurb":"This is a lecture/demonstration and lab course exploring the principles of stage makeup. The cour..."},"54231":{"name":"Design for the Stage","number":"54231","units":9,"blurb":"This course is divided into four minis to introduce the student to the design process for costume..."},"54237":{"name":"Scenic Painting I","number":"54237","units":6,"blurb":"This is a one semester studio course in the foundations of scenic painting for theater and relate..."},"54238":{"name":"Scenic Painting II","number":"54238","units":6,"blurb":"This is a studio course in the foundations of scenic painting for theater and related fields. Stu..."},"54239":{"name":"History of Architecture and Decor 1: Ancients to Gothic","number":"54239","units":0,"blurb":"This course is a survey of architecture, furniture and interiors from ancient times to the Gothic..."},"54242":{"name":"Improvisation","number":"54242","units":2,"blurb":"This course is for Sophomore Actors only. This course not only sharpens their skills as ensemble ..."},"54245":{"name":"History of Clothing","number":"54245","units":6,"blurb":"This year-long course surveys the development of garments in the Western World from ancient civil..."},"54246":{"name":"History of Clothing 2","number":"54246","units":6,"blurb":"This year-long course surveys the development of garments in the Western World from ancient civil..."},"54249":{"name":"Stagecraft II","number":"54249","units":14,"blurb":"Stagecraft II presents advanced shop skills and beginning department head skills for Scenery, Lig..."},"54250":{"name":"Introduction to Scenic Design","number":"54250","units":6,"blurb":"An introduction to the principles and practices of designing scenery emphasizing the interpretati..."},"54252":{"name":"Introduction to Lighting Design","number":"54252","units":6,"blurb":"Students explore the physical properties of light in various design applications and develop a pr..."},"54254":{"name":"New Play Collaboration","number":"54254","units":9,"blurb":"For Dramaturgy majors."},"54256":{"name":"Dramaturgy 4: New Play Dramaturgy","number":"54256","units":9,"blurb":"For Dramaturgy majors and others with instructor permission."},"54257":{"name":"Directing: Production II","number":"54257","units":6,"blurb":"Assignments as stage manager or assistant director for the Studio and Kresge Theatres."},"54258":{"name":"Directing: Production II","number":"54258","units":6,"blurb":"Assignments as stage manager or assistant director for the Rauh Studio and Chosky Theatres."},"54260":{"name":"Production Preparation II","number":"54260","units":0,"blurb":"Hands on experience in most aspects of building and running a production. Participation in School..."},"54261":{"name":"Production Symposium II","number":"54261","units":6,"blurb":"Participation in School of Drama productions, usually on shop fabrication or theatre installation..."},"54262":{"name":"Production Symposium II","number":"54262","units":6,"blurb":"Participation in School of Drama productions, usually on shop fabrication or theatre installation..."},"54264":{"name":"Welding","number":"54264","units":4,"blurb":"An introduction to the four most common metal joining processes, including Oxyfuel processes (wel..."},"54265":{"name":"Advanced Fabrication","number":"54265","units":6,"blurb":"Required for technical direction majors."},"54266":{"name":"Stage Management: Cue Lab","number":"54266","units":3,"blurb":"Required for Production Management / Stage Management majors"},"54267":{"name":"Conceptual Sound Design 1","number":"54267","units":9,"blurb":"Students explore the unique qualities of audio as a design element and the development of a desig..."},"54268":{"name":"Conceptual Sound Design 2","number":"54268","units":9,"blurb":"Students explore the unique qualities of audio as a design element. Emphasis on the creative appl..."},"54271":{"name":"Technical Management","number":"54271","units":6,"blurb":"Required for all sophomore Design and PTM students. This class establishes a set of standards for..."},"54272":{"name":"Scenic Fabrication and Installation","number":"54272","units":6,"blurb":"The Scenic Fabrication & Installation course consolidates and builds upon material presented in t..."},"54273":{"name":"Technical Direction I","number":"54273","units":6,"blurb":"6-21 units This course is an exploration of techniques and practices of the Technical Director. T..."},"54274":{"name":"Seminar in Costume Management","number":"54274","units":3,"blurb":"This mini course focuses on the fundamentals of organizational paperwork surrounding costume prod..."},"54275":{"name":"History of Sound Design","number":"54275","units":6,"blurb":"The history of the use of sound in theater from the Greeks to current day including study of the ..."},"54277":{"name":"Negotiation and Conflict Management","number":"54277","units":3,"blurb":"TBD"},"54281":{"name":"Foundations of Drama II","number":"54281","units":6,"blurb":"In this course students build on the skills of Foundations I to develop acumen in targeted resear..."},"54282":{"name":"Foundations of Drama II","number":"54282","units":6,"blurb":"In this course students build on the skills of Foundations I to develop acumen in targeted resear..."},"54284":{"name":"Fundamentals of Directing","number":"54284","units":6,"blurb":"Fundamentals of Directing is a fall-semester course for Drama Design, Dramaturgy, and PTM sophomo..."},"54285":{"name":"Alexander Technique","number":"54285","units":1.5,"blurb":"Required Alexander work for Senior Acting and Music Theatre majors."},"54299":{"name":"Dramaturgy Production: Practical Observation","number":"54299","units":0,"blurb":"For Dramaturgy majors."},"54301":{"name":"Acting III","number":"54301","units":10,"blurb":"This is a two-semester course in Acting for Third-Year Actors & MTs who will explore performance ..."},"54302":{"name":"Acting III","number":"54302","units":10,"blurb":"This is a two-semester course in Acting for Third-Year Actors & MTs who will explore performance ..."},"54304":{"name":"Dialects for the Stage","number":"54304","units":6,"blurb":"(Voice) The actors continue to strengthen their vocal techniques with voice classes, which become..."},"54305":{"name":"Voice/Alexander III","number":"54305","units":5,"blurb":"Students explore voice work and various methods in more depth and Alexander alignment/awareness w..."},"54306":{"name":"Voice/Alexander III","number":"54306","units":5,"blurb":"Students explore voice work and various methods in more depth and Alexander alignment/awareness w..."},"54307":{"name":"Movement III","number":"54307","units":5,"blurb":""},"54308":{"name":"Movement III","number":"54308","units":5,"blurb":""},"54309":{"name":"Accents for the Stage","number":"54309","units":6,"blurb":"This is a two-semester class which teaches the collaborative process of theatre — including the r..."},"54311":{"name":"Rehearsal and Performance III","number":"54311","units":16,"blurb":"Performance training through projects at different levels of difficulty and staging, directed by ..."},"54312":{"name":"Rehearsal and Performance III","number":"54312","units":16,"blurb":"Performance training through projects at different levels of difficulty and staging, directed by ..."},"54313":{"name":"Ballet III","number":"54313","units":3,"blurb":"This course is dedicated to honing technical skills, expanding the classical dance vocabulary to ..."},"54314":{"name":"Ballet III","number":"54314","units":3,"blurb":"This course continues to hone technical skills, expand the classical dance vocabulary to the next..."},"54315":{"name":"Jazz III","number":"54315","units":2,"blurb":"This course is to expand the versatility of the student dancer to master more complex exercises, ..."},"54316":{"name":"Jazz III","number":"54316","units":2,"blurb":"This course continues to expand the versatility of the student dancer to master more complex exer..."},"54317":{"name":"Singing for Actors III","number":"54317","units":2,"blurb":"The students have a class voice experience which includes a physical and vocal warm-up and discus..."},"54318":{"name":"Singing for Actors III","number":"54318","units":2,"blurb":"The students have a class voice experience which includes a physical and vocal warm-up and discus..."},"54319":{"name":"Cabaret","number":"54319","units":6,"blurb":"The Art of Cabaret: Explores the use of Stories and Song to communicate life experiences within a..."},"54322":{"name":"Directing III: Future Stages","number":"54322","units":6,"blurb":"FUTURE STAGES combines options from the School of Drama in a new configuration: through working c..."},"54323":{"name":"Tap III","number":"54323","units":2,"blurb":"This course expands tap vocabulary and clear precision of execution through moderately difficult ..."},"54324":{"name":"Tap III","number":"54324","units":2,"blurb":"This course continues to expand tap vocabulary and clear precision of execution through moderatel..."},"54325":{"name":"Actor Dance III","number":"54325","units":2,"blurb":"This course uses basic and fundamental contemporary Jazz styles, i.e. Latin, Blues, Lyric, Africa..."},"54326":{"name":"Actor Dance III","number":"54326","units":2,"blurb":"This course continues to use basic and fundamental contemporary Jazz styles, i.e. Latin, Blues, L..."},"54327":{"name":"Junior Auditioning","number":"54327","units":2,"blurb":"An optional course for Junior Acting and Music Theatre majors."},"54328":{"name":"Advanced Digital Sound Design Skills","number":"54328","units":6,"blurb":"Advanced sound creation and manipulation through student designed and constructed software and ha..."},"54330":{"name":"Introduction to Stage Management","number":"54330","units":6,"blurb":"This course is intended to provide students an opening to the knowledge and skills of the profess..."},"54331":{"name":"Scenic Design: Explorations","number":"54331","units":9,"blurb":"Students will spend the year in an exciting and intensive exploration of the process of Scene Des..."},"54332":{"name":"Scenic Design: Boot Camp","number":"54332","units":9,"blurb":"A rapid-fire design course for scenic design majors. This course offers the students the opportun..."},"54333":{"name":"Production Personnel Management","number":"54333","units":6,"blurb":"Study of the management of production personnel for live theatrical productions. In depth analysi..."},"54334":{"name":"Production Resource Management","number":"54334","units":6,"blurb":"This course examines the management of resources for the production of live theatrical production..."},"54339":{"name":"Stage Management Seminar","number":"54339","units":3,"blurb":"This class provides stage managers an opportunity to participate in in-depth discussion about the..."},"54340":{"name":"Stage Management Seminar","number":"54340","units":3,"blurb":"This class provides stage managers an opportunity to participate in in-depth discussion about the..."},"54341":{"name":"Fundamentals of Costume Design","number":"54341","units":9,"blurb":"Multiple studio projects comprise this one semester course that focuses on the principals and ele..."},"54342":{"name":"Costume Design for TV and Film","number":"54342","units":9,"blurb":"A full semester course in the second semester that explores the aesthetic and technical processes..."},"54346":{"name":"Introduction to Costume Construction","number":"54346","units":6,"blurb":"This sophomore level course is designed to provide an intermediate level of training in the area ..."},"54349":{"name":"Automated Lighting Technology","number":"54349","units":6,"blurb":"Students are exposed to a range of automated lighting equipment and develop skills in the impleme..."},"54351":{"name":"Theatrical Lighting Design","number":"54351","units":9,"blurb":"The student's ability to analyze and translate information in the script to descriptive stage pic..."},"54352":{"name":"Theatrical and Opera Lighting Design","number":"54352","units":4,"blurb":"tba"},"54354":{"name":"Structural Design II","number":"54354","units":9,"blurb":"Required for all senior undergraduate Technical Direction students. Upon completion of this two-s..."},"54357":{"name":"Directing: Production III","number":"54357","units":12,"blurb":"Assignments as stage manager or assistant director for the Studio and Kresge Theatres."},"54360":{"name":"Leadership Workshop: Ethics & Innovation","number":"54360","units":6,"blurb":"For Production Management and Stage Management majors."},"54361":{"name":"Production Preparation III","number":"54361","units":0,"blurb":"TBA"},"54362":{"name":"Production Preparation III","number":"54362","units":0,"blurb":"Missing Course Description - please contact the teaching department."},"54364":{"name":"Dramaturgy 6: Critical Writing","number":"54364","units":9,"blurb":"For Dramaturgy majors."},"54366":{"name":"Physics of Stage Machinery","number":"54366","units":9,"blurb":"Required for all junior undergraduate PTM students. This is a one-semester pure Physics class des..."},"54367":{"name":"Lighting Design Skills","number":"54367","units":3,"blurb":"Students will concentrate on developing the skills necessary for lighting designers to successful..."},"54368":{"name":"Production Electrics","number":"54368","units":0,"blurb":"Class content includes practical skills in lighting and electrical theory and practice as it pert..."},"54371":{"name":"Personalized Responsive Environments","number":"54371","units":9,"blurb":"[IDeATe collaborative course] Environmental factors have a significant impact on mood and product..."},"54372":{"name":"Theatre for the Ear","number":"54372","units":6,"blurb":"Survey of aural storytelling with technology focusing on forms with no visual component. Topics i..."},"54373":{"name":"Draping 1","number":"54373","units":6,"blurb":"PRE-REQUISITES: Drawing for the Theatrical Designer, Major in Design Option of School of Drama FO..."},"54375":{"name":"Robotics for Creative Practice","number":"54375","units":10,"blurb":"[IDeATe collaborative course] This project-oriented course brings art and engineering together in..."},"54376":{"name":"Entertainment Rigging","number":"54376","units":3,"blurb":"This course is a survey of the techniques and practices of theatrical rigging. The course has two..."},"54378":{"name":"Technical Direction II","number":"54378","units":6,"blurb":"This course is an exploration of techniques and practices of Technical Designers. The class has f..."},"54379":{"name":"Scenic Design Skills: Drafting","number":"54379","units":4,"blurb":"This mini explores careful and clear graphic communication in drafting. A series of weekly drafti..."},"54380":{"name":"Music Reading for Drama Technicians","number":"54380","units":3,"blurb":"This class gives the basics of music theory, musical terminology and score reading. Students focu..."},"54381":{"name":"Special Topics in Drama: History, Literature and Criticism","number":"54381","units":6,"blurb":"Every semester, members of the School of Drama's faculty offer seminars on special topics that in..."},"54383":{"name":"Scenic Design Skills: Digital Drawing","number":"54383","units":4,"blurb":"This mini offers digital drawing and rendering for theatrical designers"},"54386":{"name":"Scenic Design Skills: 3D Model Making","number":"54386","units":4,"blurb":"In this mini students explore a variety of three-dimensional media techniques as they learn to bu..."},"54387":{"name":"Dramaturgy : Production I","number":"54387","units":0,"blurb":"Working as a production dramaturg for a senior thesis or grad show, or as an assistant dramaturg ..."},"54388":{"name":"Dramaturgy: Production I","number":"54388","units":0,"blurb":"Working as a production dramaturg for a senior thesis or grad show, or as an assistant dramaturg ..."},"54389":{"name":"Composition for Theatrical Sound Design 1","number":"54389","units":6,"blurb":"Composition for Theatrical Sound Design 1 This course will concentrate on developing compositiona..."},"54390":{"name":"Composition for Theatrical Sound Design 2","number":"54390","units":6,"blurb":"This course will concentrate on further developing compositional skills for use in theatrical sou..."},"54392":{"name":"Scenic Design Skills: 2D Drawing and Rendering","number":"54392","units":4,"blurb":"This mini offers practice in two-dimensional drawing and rendering for the theatre."},"54397":{"name":"Sound Design For Interactive Environments & Non-Linear Storytelling","number":"54397","units":9,"blurb":"This course will examine the process, execution and implementation of sound design for interactiv..."},"54398":{"name":"Film Sound Design","number":"54398","units":9,"blurb":"A one semester course introducing the art of film sound design. Topics include the history of sou..."},"54399":{"name":"Decoding Media","number":"54399","units":6,"blurb":"The entire theatrical process can be considered as a series of decodings and re-encodings, first ..."},"54400":{"name":"Staging Media","number":"54400","units":6,"blurb":"Staging Media is a practical, process-oriented class, focused on building the skills to go from a..."},"54401":{"name":"Camera Lab","number":"54401","units":3,"blurb":"This is a year long course required for senior undergraduate directing and acting majors and seco..."},"54402":{"name":"Camera Lab","number":"54402","units":3,"blurb":"This is a year long course required for senior undergraduate directing and acting majors and seco..."},"54403":{"name":"Voice Over Acting","number":"54403","units":3,"blurb":"(Voice) The senior actors continue to strengthen their voice work with individualized voice class..."},"54405":{"name":"Undergraduate Future Stages","number":"54405","units":6,"blurb":"FUTURE STAGES combines options from the School of Drama in a new configuration: through working c..."},"54407":{"name":"Movement IV","number":"54407","units":4,"blurb":"Movement IV is a cross-option course, wherein Sophomore Designers build masks for the Senior Acto..."},"54409":{"name":"Theatre Lab for Undergraduates","number":"54409","units":0,"blurb":"This is a two-semester class which teaches the collaborative process of theatre — including the r..."},"54410":{"name":"Theatre Lab for Undergraduates","number":"54410","units":0,"blurb":"Theatre Lab is a place to practice collaboration. We will examine and explore the relationships b..."},"54411":{"name":"Rehearsal and Performance IV","number":"54411","units":16,"blurb":"Participation outside of class requirements in departmental productions. Putting into practice th..."},"54412":{"name":"Rehearsal and Performance IV","number":"54412","units":16,"blurb":"Participation outside of class requirements in departmental productions. Putting into practice th..."},"54413":{"name":"Showcase","number":"54413","units":4,"blurb":"Senior acting class for actors and Mt's who are in good standing and in position to graduate in t..."},"54414":{"name":"Showcase","number":"54414","units":9,"blurb":"Senior acting class for actors and Mt's who are in good standing and in position to graduate in t..."},"54415":{"name":"Broadway Dance Styles","number":"54415","units":5,"blurb":"This course is designed to provide the student with a practical and historical knowledge of the d..."},"54416":{"name":"Broadway Styles","number":"54416","units":5,"blurb":"This course continues to provide the student with a practical and historical knowledge of the dan..."},"54419":{"name":"Voice & Speech IV","number":"54419","units":3,"blurb":"For Senior Acting majors only."},"54422":{"name":"Directing IV","number":"54422","units":6,"blurb":"Encounter major 20th century theatrical and dramatic movements. Specific concentration on directo..."},"54431":{"name":"Scenography","number":"54431","units":9,"blurb":"A core design class between scenic designers, costume designers, media designers, and directors c..."},"54432":{"name":"Scenic Design: Modern Classical","number":"54432","units":9,"blurb":"This is an advanced scenic design class. Scenic design students demonstrate an understanding of v..."},"54438":{"name":"Acting IV","number":"54438","units":3,"blurb":"An integration of training and craft approaches related to the rehearsal process featuring a comp..."},"54442":{"name":"Costume Design for the Classics","number":"54442","units":5,"blurb":"This Spring Mini 3 focuses on a range of playwrights and classic theatre genres from among Molier..."},"54444":{"name":"Draping for the Costume Designer II","number":"54444","units":6,"blurb":"tba"},"54445":{"name":"Professional Preparation 1","number":"54445","units":3,"blurb":"A brief introduction for design-oriented pre-professionals to the issues, challenges and conventi..."},"54446":{"name":"Professional Preparation 2","number":"54446","units":3,"blurb":"An introduction to the issues and conventionally held practices for the development of responsibl..."},"54447":{"name":"Figure Drawing","number":"54447","units":3,"blurb":"This year-long course explores the realistic and expressive depiction of the human form primarily..."},"54448":{"name":"Figure Drawing","number":"54448","units":3,"blurb":"Costume Majors have priority, then Design Majors. This course explores the realistic and expressi..."},"54449":{"name":"Dramaturgy Professional Prep 1","number":"54449","units":3,"blurb":"Professional Prep for Dramaturgy students"},"54452":{"name":"Architectural Lighting Design","number":"54452","units":9,"blurb":"tbd"},"54453":{"name":"Production Management Workshop I","number":"54453","units":3,"blurb":"Investigates the organization, planning and interpersonal skills required to successfully manage ..."},"54454":{"name":"Advanced Topics in Stage Management I","number":"54454","units":3,"blurb":"For Production Management and Stage Management majors."},"54455":{"name":"Production Data Manipulation","number":"54455","units":6,"blurb":"Required for Production Management / Stage Management majors."},"54456":{"name":"Production Management Workshop","number":"54456","units":3,"blurb":"Investigates the organization, planning and interpersonal skills required to successfully manage ..."},"54457":{"name":"Directing: Production IV","number":"54457","units":12,"blurb":"SENIOR DIRECTING PROJECT: This is a 90-minute, public, fully-designed presentation directed by a ..."},"54458":{"name":"Directing: Production IV","number":"54458","units":10,"blurb":"SENIOR DIRECTING PROJECT: This is a 90-minute, public, fully-designed presentation directed by a ..."},"54460":{"name":"Future Stages for Undergrad Designers","number":"54460","units":0,"blurb":"FUTURE STAGES is a graduate level course (Drama undergraduates by permission only) which combines..."},"54461":{"name":"Production Preparation IV","number":"54461","units":0,"blurb":"Participation in School of Drama productions, usually in supervisory roles in design or productio..."},"54462":{"name":"Production Preparation IV","number":"54462","units":0,"blurb":"Participation in School of Drama productions, usually in supervisory roles in design or production."},"54463":{"name":"Dramaturgy Research Hours","number":"54463","units":0,"blurb":"TBD"},"54464":{"name":"PTM Professional Practice","number":"54464","units":3,"blurb":"A seminar about issues surrounding a career as a technical manager. In a series of presentations ..."},"54467":{"name":"Costume Design with Music","number":"54467","units":5,"blurb":"A rigorous second semester exploration of costume design for musicals and opera that engages stud..."},"54468":{"name":"Theater Management","number":"54468","units":6,"blurb":"to be determined"},"54469":{"name":"Dance Lighting Design","number":"54469","units":2,"blurb":"This class meets during weeks 8-15 of the fall 2011 semester."},"54470":{"name":"Costume Rendering","number":"54470","units":9,"blurb":"Mediums such as pencil, colored pencil, marker, ink, Doctor Martin?s dyes, collage, watercolor an..."},"54473":{"name":"Drawing for Theatrical Designers","number":"54473","units":9,"blurb":"This semester-long basic drawing course focuses on developing hand-eye coordination through discr..."},"54475":{"name":"Advanced Topics in Stage Management II","number":"54475","units":3,"blurb":"Special topics in Stage Management for the experienced manager"},"54477":{"name":"Technical Direction III","number":"54477","units":6,"blurb":"Required for all senior undergraduate Technical Direction students. This \"capstone\" course is the..."},"54478":{"name":"Television Lighting Design","number":"54478","units":1,"blurb":"This course meets for a few weeks in the fall semester. Contact the instructor for details."},"54479":{"name":"Television Lighting Design","number":"54479","units":2,"blurb":"tbd"},"54480":{"name":"Technical Direction IV","number":"54480","units":6,"blurb":"This class gives the basics of music theory, musical terminology and score reading. Students focu..."},"54487":{"name":"Dramaturgy: Production II","number":"54487","units":0,"blurb":"Working as a production dramaturg for a season show or a professionally-produced show at a LORT o..."},"54488":{"name":"Dramaturgy: Production II","number":"54488","units":0,"blurb":"Working as a production dramaturg for a season show or a professionally-produced show at a LORT o..."},"54489":{"name":"Dramaturgy: Internship","number":"54489","units":9,"blurb":"Professional internship with a dramaturg at a LORT or similarly-ranked theatre in the US or abroad."},"54491":{"name":"Concert Lighting Design","number":"54491","units":9,"blurb":"description tbd"},"54493":{"name":"Business of Acting","number":"54493","units":4,"blurb":"This course introduces the (advanced) actor to various aspects of the professional world. Emphasi..."},"54498":{"name":"Expanded Theater Fusion Studio","number":"54498","units":10,"blurb":"As the boundaries between theater, art, entertainment and everyday life continue to expand throug..."},"54500":{"name":"Voice Lab","number":"54500","units":5,"blurb":"FOR MUSIC THEATRE MAJORS ONLY. Singing Voice based on speech-level and classical singing techniqu..."},"54505":{"name":"Ear Training","number":"54505","units":1,"blurb":"Ear Training for sound designers and audio technologists. Introduction and development of skills ..."},"54509":{"name":"Theatrical Sound System Design","number":"54509","units":9,"blurb":"Intensive course exploring the theory, art and technology of large scale sound system design for ..."},"54511":{"name":"Millinery I","number":"54511","units":9,"blurb":"This course provides the student with a working knowledge of the basic practices of the theatrica..."},"54517":{"name":"Director's Colloquium","number":"54517","units":1,"blurb":"Directors Colloquium is a weekly meeting for undergraduate Directing majors and BXA students in d..."},"54518":{"name":"Director's Colloquium","number":"54518","units":1,"blurb":"Missing Course Description - please contact the teaching department."},"54519":{"name":"Acting for the Camera","number":"54519","units":6,"blurb":"This course presents the skills necessary to work as an actor in the film and television industry..."},"54520":{"name":"Acting for the Camera","number":"54520","units":6,"blurb":"This course presents the skills necessary to work as an actor in the film and television industry..."},"54524":{"name":"Dance Lighting Design","number":"54524","units":3,"blurb":"DANCE LIGHT!"},"54525":{"name":"Entertainment Lighting Programming","number":"54525","units":4,"blurb":"Students learn and practice programming techniques on the grandMA2 series of lighting control con..."},"54527":{"name":"Automated Lighting Workshop","number":"54527","units":0,"blurb":"Automated Lighting Workshop consists of four distinct modules. The first focuses on the operation..."},"54587":{"name":"Dramaturgy Production III","number":"54587","units":0,"blurb":"TBA"},"54588":{"name":"Dramaturgy Production III","number":"54588","units":0,"blurb":"For Dramaturgy majors."},"54592":{"name":"Costume Crafts: Theatrical Armor","number":"54592","units":4,"blurb":"This mini course introduces the student to the world of armor creation for the stage. Techniques ..."},"54599":{"name":"Woody Allen and Mel Brooks films","number":"54599","units":6,"blurb":"TBA"},"54666":{"name":"Production Audio","number":"54666","units":6,"blurb":"Introduction to the theories and technologies used in sound system design for theater and live en..."},"54729":{"name":"Graduate Automated Lighting Workshop","number":"54729","units":0,"blurb":"Automated Lighting Workshop consists of four distinct modules. The first focuses on the operation..."},"54756":{"name":"Graduate Theatre for the Ear","number":"54756","units":6,"blurb":"Survey of aural storytelling with technology focusing on forms with no visual component. Topics i..."},"54759":{"name":"Working with Dramaturgs","number":"54759","units":3,"blurb":"TBA"},"54760":{"name":"Grad Leadership Workshop: Ethics & Innovation","number":"54760","units":6,"blurb":"For Production Management and Stage Management majors"},"54766":{"name":"Graduate Introduction to Sound Design for Theatre","number":"54766","units":6,"blurb":"Students explore the basic principles and theories of sound design from technical, psychological ..."},"54773":{"name":"Graduate Couture Sewing Techniques","number":"54773","units":6,"blurb":"This course introduces the student to advanced sewing techniques used in the creation of both fas..."},"54780":{"name":"Gradute Fabric Painting","number":"54780","units":9,"blurb":"Students gain an understanding of the products and techniques involved in a broad range of fabric..."},"54795":{"name":"Graduate Costume Crafts: Casting and Moldmaking","number":"54795","units":6,"blurb":"This mini course opens the world of mask creation to the adventurous student. A broad range of te..."},"54815":{"name":"Graduate Negotiation and Conflict Management","number":"54815","units":3,"blurb":"TBD"},"54819":{"name":"Graduate Figure Drawing","number":"54819","units":3,"blurb":"This year-long course explores the realistic and expressive depiction of the human form primarily..."},"54822":{"name":"Graduate Directing: Future Stages II","number":"54822","units":0,"blurb":"Future Stages for second-year Graduate Directors"},"54880":{"name":"Graduate Special Topics in Media: Mediated Reality","number":"54880","units":0,"blurb":"This is an advanced studio course investigating mediated reality technologies and location based ..."},"54884":{"name":"Graduate Future Stages","number":"54884","units":6,"blurb":"FUTURE STAGES combines options from the School of Drama in a new configuration: through working c..."},"54898":{"name":"Graduate Composition for Theatrical Sound Design 2","number":"54898","units":6,"blurb":"This course will concentrate on further developing compositional skills for use in theatrical sou..."},"54905":{"name":"Graduate Ear Training","number":"54905","units":1,"blurb":"Ear Training for sound designers and audio technologists. Introduction and development of skills ..."},"54939":{"name":"Graduate Entertainment Lighting Programming","number":"54939","units":4,"blurb":"Students learn and practice programming techniques on the grandMA2 series of lighting control con..."},"54964":{"name":"Graduate Scenic Design: Moving the Musical","number":"54964","units":5,"blurb":"This course will explore methods of designing a musical, emphasizing the ways in which the moveme..."},"54972":{"name":"Graduate PTM Professional Practice","number":"54972","units":3,"blurb":"A seminar about issues surrounding a career as a technical manager. In a series of presentations ..."},"54973":{"name":"Costume Production Thesis","number":"54973","units":12,"blurb":"TBD"},"54997":{"name":"Graduate Sound Design For Interactive Environments & Non-Linear Storytelling","number":"54997","units":9,"blurb":"This course will examine the process, execution and implementation of sound design for interactiv..."},"54998":{"name":"Graduate Film Sound Design","number":"54998","units":9,"blurb":"A one semester course introducing the art of film sound design. Topics include the history of sou..."},"57008":{"name":"Vocal Master Class I","number":"57008","units":0,"blurb":"This is a group coaching class for freshmen voice majors."},"57009":{"name":"Vocal Master Class II","number":"57009","units":0,"blurb":"This is a group coaching class for sophomore voice majors."},"57010":{"name":"Voice Studio Performance Class","number":"57010","units":0,"blurb":"TBA"},"57015":{"name":"Violin Studio Performance Class","number":"57015","units":0,"blurb":"TBA"},"57016":{"name":"Viola Studio Performance Class","number":"57016","units":0,"blurb":"TBA"},"57018":{"name":"Double Bass Studio Performance Class","number":"57018","units":0,"blurb":"TBA"},"57020":{"name":"Flute Studio Performance Class","number":"57020","units":0,"blurb":"TBA"},"57021":{"name":"Oboe Studio Performance Class","number":"57021","units":0,"blurb":"TBA"},"57022":{"name":"Clarinet Studio Performance Class","number":"57022","units":0,"blurb":"TBA"},"57023":{"name":"Bassoon Studio Performance Class","number":"57023","units":0,"blurb":"TBA"},"57030":{"name":"Percussion Studio Performance Class","number":"57030","units":0,"blurb":"TBA"},"57100":{"name":"Convocation","number":"57100","units":1,"blurb":"A weekly meeting for all music students that features lectures, concerts, and other presentations..."},"57101":{"name":"Introduction to Music Technology","number":"57101","units":6,"blurb":"This course gives an overview of music technology through practical information and several hands..."},"57102":{"name":"Finale","number":"57102","units":6,"blurb":"This course provides hands-on and in-depth instruction of the Finale music notation program by Co..."},"57103":{"name":"Elective Studio (Beginning Piano Class)","number":"57103","units":3,"blurb":"TBA"},"57109":{"name":"Elective Studio (Guitar Class)","number":"57109","units":3,"blurb":"Using classical and jazz guitar methods, this course is designed to provide a basic set of techni..."},"57110":{"name":"Elective Studio (Voice Class)","number":"57110","units":3,"blurb":"Students enrolled in group voice will gain an understanding of basic vocal technique and a variet..."},"57111":{"name":"Movement and Dance I","number":"57111","units":3,"blurb":"The CMU School of Music movement curriculum is designed to expose students to various styles and ..."},"57112":{"name":"Movement and Dance II","number":"57112","units":3,"blurb":"The CMU School of Music movement curriculum is designed to expose students to various styles and ..."},"57149":{"name":"Basic Harmony I","number":"57149","units":9,"blurb":"This course deals with common-practice harmony. It includes triads and their inversions, tonality..."},"57150":{"name":"Basic Harmony II","number":"57150","units":9,"blurb":"This course deals with common-practice harmony. It includes triads and their inversions, tonality..."},"57151":{"name":"Counterpoint in Theory and Application","number":"57151","units":6,"blurb":"In Counterpoint in Theory and Application, students begin by learning the traditional five specie..."},"57152":{"name":"Harmony I","number":"57152","units":9,"blurb":"This course deals with common-practice harmony. It includes triads and their inversions, tonality..."},"57153":{"name":"Harmony II","number":"57153","units":9,"blurb":"This course is a continuation of the study of common practice harmony, exploring dissonant and ch..."},"57161":{"name":"Eurhythmics I","number":"57161","units":3,"blurb":"Dalcroze Eurhythmics is a unique approach to music learning based on the recognition that meaning..."},"57162":{"name":"Eurhythmics II","number":"57162","units":3,"blurb":"Eurhythmics II introduces combinations of binary and ternary metric units, mixed meters, changing..."},"57163":{"name":"Eurhythmics III","number":"57163","units":3,"blurb":"Eurhythmics is a unique approach to music learning developed by the Swiss composer and educator E..."},"57164":{"name":"Eurhythmics IV","number":"57164","units":3,"blurb":"Eurhythmics is a unique approach to music learning developed by the Swiss composer and educator E..."},"57171":{"name":"Introduction to Music Technology (self-paced)","number":"57171","units":6,"blurb":"This course gives an overview of music technology through practical information and several hands..."},"57173":{"name":"Survey of Western Music History","number":"57173","units":9,"blurb":"This course surveys the development and contexts of European art music and its global adaptation...."},"57180":{"name":"Basic Solfege I","number":"57180","units":3,"blurb":"This course improves the student's ability to analyze music aurally and to sing at sight in tradi..."},"57181":{"name":"Solfege I","number":"57181","units":3,"blurb":"This course improves the student's ability to analyze music aurally and to sing at sight in tradi..."},"57182":{"name":"Solfege II","number":"57182","units":3,"blurb":"Continues 57181 Solfege I."},"57183":{"name":"Solfege III","number":"57183","units":3,"blurb":"Continues 57-182 Solfege II. Students are given assignments of classical music written in the tre..."},"57184":{"name":"Solfege IV","number":"57184","units":3,"blurb":"Continues 57183 Solfege III. Students learn to read atonal music and practice three-part contrapu..."},"57185":{"name":"Advanced Solfege I","number":"57185","units":3,"blurb":"This course improves the student's ability to analyze music aurally and to sing at sight in tradi..."},"57186":{"name":"Advanced Solfege II","number":"57186","units":3,"blurb":"Continues 57185 Advanced Solfege I."},"57188":{"name":"Repertoire and Listening for Musicians","number":"57188","units":1,"blurb":"This course is the required co-requisite listening component for Survey of Western Music History ..."},"57189":{"name":"Introduction to Repertoire and Listening for Musicians","number":"57189","units":3,"blurb":"One of the most important ways of achieving musical excellence is to listen. In this course, stud..."},"57190":{"name":"Repertoire and Listening for Musicians I","number":"57190","units":3,"blurb":"One of the most important ways of achieving musical excellence is to listen. In this course, stud..."},"57191":{"name":"Keyboard Studies","number":"57191","units":3,"blurb":"All undergraduate music students are required to take four semesters of keyboard studies during t..."},"57193":{"name":"Collaborative Piano Skills I","number":"57193","units":3,"blurb":"A required course for first year piano majors. The skills include sightreading, basic keyboard ha..."},"57194":{"name":"Collaborative Piano Skills II","number":"57194","units":3,"blurb":"Continues 57193 Skills of Accompanying I."},"57207":{"name":"Secondary Studio","number":"57207","units":0,"blurb":"Provides the opportunity for students to pursue study in a secondary instrument or area. By speci..."},"57208":{"name":"Secondary Studio","number":"57208","units":0,"blurb":"Provides the opportunity for students to pursue study in a secondary instrument or area. By speci..."},"57209":{"name":"The Beatles","number":"57209","units":9,"blurb":"This course will focus on the phenomenon of the Beatles. Their songs will be studied, with analys..."},"57211":{"name":"Movement and Dance III","number":"57211","units":3,"blurb":"The CMU School of Music movement curriculum is designed to expose students to various styles and ..."},"57212":{"name":"Movement and Dance IV","number":"57212","units":3,"blurb":"The CMU School of Music movement curriculum is designed to expose students to various styles and ..."},"57220":{"name":"English Diction","number":"57220","units":3,"blurb":"This one semester course helps singers sing English songs from the Classical and Musical Theater ..."},"57221":{"name":"Italian Diction","number":"57221","units":3,"blurb":"A study of the fundamentals of Italian diction and development of legato vocal style through the ..."},"57222":{"name":"French Diction","number":"57222","units":3,"blurb":"This course is designed primarily for singers specializing in French Art Songs of the 19th and 20..."},"57223":{"name":"German Diction","number":"57223","units":3,"blurb":"In-depth study of German diction - development of legato vocal style in German through the analys..."},"57227":{"name":"Jazz Orchestra","number":"57227","units":3,"blurb":"These are Jazz Ensembles (Section A and Section B) which incorporate a comprehensive approach to ..."},"57228":{"name":"Chamber Music: Woodwind and Mixed","number":"57228","units":3,"blurb":"Provides an opportunity for students to play in small ensembles, advised by faculty coaches. The ..."},"57229":{"name":"Chamber Music","number":"57229","units":3,"blurb":"Provides an opportunity for students to play in small ensembles, advised by faculty coaches. The ..."},"57230":{"name":"Baroque Ensemble","number":"57230","units":3,"blurb":"Carnegie Mellon Baroque is a performing ensemble of 15-25 players consisting of winds, strings an..."},"57231":{"name":"Chamber Ensemble","number":"57231","units":3,"blurb":"Provides an opportunity for students to play in small ensembles, advised by faculty coaches. The ..."},"57232":{"name":"Chamber Music: Guitar","number":"57232","units":3,"blurb":"Provides an opportunity for students to play in small ensembles, advised by faculty coaches. The ..."},"57233":{"name":"Sonatas","number":"57233","units":3,"blurb":"This course focuses on coaching of performance groups with two members. It parallels Chamber Musi..."},"57234":{"name":"Performance for Composers","number":"57234","units":3,"blurb":"This course is for composition majors who choose to fulfill the performance elective requirement ..."},"57236":{"name":"Performance for Composers","number":"57236","units":3,"blurb":"This course is for composition majors who choose to fulfill the performance elective requirement ..."},"57240":{"name":"Acting I","number":"57240","units":6,"blurb":"The basics of acting will be established throughout the first year following the guideposts descr..."},"57241":{"name":"Acting II","number":"57241","units":6,"blurb":"Continues 57240 Acting I."},"57257":{"name":"Orchestration I","number":"57257","units":6,"blurb":"This is an introductory course for all music majors and required for sophomore composition majors..."},"57258":{"name":"20th-21st Century Techniques","number":"57258","units":6,"blurb":"This course is open to all music majors and required for sophomore composition majors. The most i..."},"57271":{"name":"Orchestration II","number":"57271","units":6,"blurb":"Students will analyze music from the Classical to Avant-Garde and use the knowledge acquired to o..."},"57273":{"name":"Piano Pedagogy I","number":"57273","units":6,"blurb":"This course offers an historical overview of piano pedagogy including its significant development..."},"57274":{"name":"Piano Pedagogy II","number":"57274","units":6,"blurb":"Beyond the beginning years: this course covers piano pedagogy of intermediate and early advanced ..."},"57275":{"name":"Piano Pedagogy III","number":"57275","units":6,"blurb":"Continuation of 57-274. Intermediate literature, analysis, teaching, and performance will be cove..."},"57276":{"name":"Piano Pedagogy IV","number":"57276","units":6,"blurb":"Continuation of 57275. Early advanced literature, analysis, teaching, and performance will be cov..."},"57283":{"name":"Music History I","number":"57283","units":9,"blurb":"This course will be a historic overview of each period of Western European art music and in-depth..."},"57284":{"name":"Music History II","number":"57284","units":9,"blurb":"This course will be a historic overview of each period of Western European art music and in-depth..."},"57285":{"name":"Music History III","number":"57285","units":9,"blurb":"Missing Course Description - please contact the teaching department."},"57289":{"name":"Repertoire and Listening for Musicians II","number":"57289","units":3,"blurb":"This is a continuation of the School of Music's four-semester listening curriculum. Students list..."},"57290":{"name":"Repertoire and Listening for Musicians III","number":"57290","units":3,"blurb":"This is the culmination of the School of Music's four-semester listening curriculum. Students lis..."},"57293":{"name":"Keyboard Studies Test (Degree)","number":"57293","units":0,"blurb":"This is the keyboard proficiency test which is a requirement for all undergraduate music majors w..."},"57294":{"name":"Beginning Piano Test","number":"57294","units":0,"blurb":"This is the keyboard proficiency test which is a requirement for all music performance, music com..."},"57300":{"name":"Advanced Bagpipe and Drum Band","number":"57300","units":3,"blurb":"The Pipe Band at Carnegie Mellon is a competitive Grade 3 band in the Eastern United States Pipe ..."},"57304":{"name":"Bagpipe Maintenance","number":"57304","units":3,"blurb":"All aspects of bagpipe maintenance are covered in this course, from basic hemping and tying in ba..."},"57313":{"name":"Topics in Movement and Dance: Techniques","number":"57313","units":3,"blurb":"This intermediate level course furthers the dance foundation practiced in the first two years of ..."},"57314":{"name":"Topics in Movement and Dance: Movement Lab","number":"57314","units":3,"blurb":"This intermediate level course will encourage an understanding of dance through the practice of c..."},"57329":{"name":"Beginning Piano for Minors","number":"57329","units":3,"blurb":"This is a small group lesson for music performance, music composition, music technology, and musi..."},"57330":{"name":"Beginning Piano for Minors","number":"57330","units":3,"blurb":"This is a small group lesson for music performance, music composition, music technology, and musi..."},"57331":{"name":"Principles of Education","number":"57331","units":9,"blurb":"This course introduces students to the art and science of being an educator. Content includes vie..."},"57332":{"name":"Introduction to Conducting","number":"57332","units":6,"blurb":"This course develops the basic skills needed to conduct instrumental ensembles or a small orchest..."},"57333":{"name":"Band and Choral Arranging","number":"57333","units":6,"blurb":"This course presents basic techniques of arranging music for elementary and secondary school chor..."},"57334":{"name":"Fundamentals of Marching Band","number":"57334","units":3,"blurb":"A marching band, due to its visibility and high degree of student involvement, is an integral par..."},"57336":{"name":"Instrumental/Choral Conducting","number":"57336","units":6,"blurb":"This course is a continuation of Introduction to Conducting. The course offers a more detailed co..."},"57337":{"name":"Sound Recording","number":"57337","units":6,"blurb":"This course centers around the recording studio in the School of Music: how the studio works, and..."},"57338":{"name":"Sound Editing and Mastering","number":"57338","units":6,"blurb":"The raw recording is just the first step in the process of creating a professional finished audio..."},"57339":{"name":"Acting III","number":"57339","units":6,"blurb":"This course will build upon the foundation laid in the first year, with a more concentrated look ..."},"57340":{"name":"Acting IV","number":"57340","units":6,"blurb":"Continues 57339 Acting III."},"57343":{"name":"Interdisciplinary Studies in Listening, Culture, and Technology","number":"57343","units":9,"blurb":"The proliferation of portable as well as computerized audio technologies has radically changed th..."},"57344":{"name":"Experimental Sound Synthesis","number":"57344","units":9,"blurb":"In this course we will explore a variety of experimental approaches to music, sound design, and s..."},"57345":{"name":"Hacking the Music World","number":"57345","units":9,"blurb":"In this course we will perform a series of real-world experiments that examine new models for mus..."},"57347":{"name":"Electronic and Computer Music","number":"57347","units":6,"blurb":"This course builds on the concepts learned in Introduction to Music Technology (57101) and gives ..."},"57349":{"name":"Supervised Theory Teaching","number":"57349","units":6,"blurb":"This course provides teaching skills in theory for students who have already completed the theory..."},"57352":{"name":"Dalcroze Piano Improvisation","number":"57352","units":0,"blurb":"These courses are required for candidates in the Dalcroze Certification program. They are designe..."},"57355":{"name":"Secondary Guided Teaching","number":"57355","units":3,"blurb":"This course enables students to apply instructional strategies in local secondary school music cl..."},"57356":{"name":"Elementary Guided Teaching","number":"57356","units":3,"blurb":"This is the second level of field experience in the public schools. This course provides for obse..."},"57360":{"name":"Brass Methods","number":"57360","units":3,"blurb":"This music education course develops basic brass playing and teaching techniques for beginning an..."},"57361":{"name":"Percussion Methods","number":"57361","units":3,"blurb":"This class gives the non-percussion major a background in the fundamentals of teaching percussion..."},"57362":{"name":"Woodwind Methods","number":"57362","units":3,"blurb":"This music education course develops basic woodwind playing and teaching techniques for beginning..."},"57363":{"name":"String Methods","number":"57363","units":3,"blurb":"String Methods prepares music educators for work in the public schools. A major portion of class ..."},"57364":{"name":"Conducting Practicum","number":"57364","units":3,"blurb":"This course provides applied conducting experience for the conducting minor."},"57370":{"name":"Stage Direction","number":"57370","units":3,"blurb":"This course provides an internship working with a middle or high school music theater production...."},"57374":{"name":"Music in the Urban School","number":"57374","units":9,"blurb":"This course will involve workshops with nationally known instructors in eurhythmics, world drummi..."},"57375":{"name":"Music in the Elementary School","number":"57375","units":6,"blurb":"This course is designed to provide a philosophical background for teaching music in the elementar..."},"57376":{"name":"Music in the Secondary School","number":"57376","units":6,"blurb":"This course covers a variety of topics related to the development and the management music progra..."},"57377":{"name":"Psychology of Music","number":"57377","units":9,"blurb":"Music cognition is an interdisciplinary approach to understanding the mental processes that suppo..."},"57381":{"name":"Collaborative Piano I","number":"57381","units":0,"blurb":"This class is the first in a series of hands-on courses which allow the student to accumulate exp..."},"57382":{"name":"Collaborative Piano II","number":"57382","units":0,"blurb":"Continues 57381 Accompanying I."},"57383":{"name":"Collaborative Piano III","number":"57383","units":0,"blurb":"Continues 57382 Accompanying II."},"57384":{"name":"Collaborative Piano IV","number":"57384","units":0,"blurb":"Continues 57383 Accompanying III."},"57385":{"name":"Collaborative Piano V","number":"57385","units":0,"blurb":"Continues 57384 Accompanying IV."},"57386":{"name":"Collaborative Piano VI","number":"57386","units":0,"blurb":"Continues 57385 Accompanying V."},"57391":{"name":"Keyboard Studies (Music Ed)","number":"57391","units":3,"blurb":"This course develops piano skills necessary for work in the elementary and secondary schools. Spe..."},"57392":{"name":"Keyboard Studies (Music Ed)","number":"57392","units":3,"blurb":"Continues 57391 Keyboard Studies V. This course is required for all music education majors."},"57393":{"name":"Keyboard Studies Test (Music Ed)","number":"57393","units":0,"blurb":"This is the keyboard proficiency test which is a requirement for all undergraduate music majors w..."},"57408":{"name":"Form and Analysis","number":"57408","units":6,"blurb":"This course provides a working understanding of all styles and genres of Western classical and co..."},"57412":{"name":"Opera Since Wagner","number":"57412","units":9,"blurb":"In the 400-year arc of opera history, the last 125 years have seen the genre's apogee, perigee, a..."},"57417":{"name":"Major Vocal Performance Ensemble","number":"57417","units":6,"blurb":"There are two choral ensembles. Concert Choir is a select ensemble of approximately 40 voices of ..."},"57418":{"name":"Major Instrumental Ensemble","number":"57418","units":6,"blurb":"There are two instrumental ensembles: Orchestra and Wind Ensemble. Rotating seating plans, within..."},"57420":{"name":"Jazz Vocal Ensemble","number":"57420","units":3,"blurb":"A highly selective group of mixed voices who perform contemporary jazz and pop vocal arrangements..."},"57423":{"name":"Repertoire Orchestra","number":"57423","units":3,"blurb":"This course thoroughly acquaints participants with the standard works one would expect to encount..."},"57424":{"name":"Percussion Ensemble","number":"57424","units":3,"blurb":"This ensemble is open to all percussion majors."},"57428":{"name":"Theatre Orchestra","number":"57428","units":0,"blurb":"Instrumental ensemble which accompanies vocal productions in the School of Music or the School of..."},"57429":{"name":"Beginning Piano for Children","number":"57429","units":6,"blurb":"This course is the first of two courses in a year-long internship in the piano teaching of young ..."},"57430":{"name":"Music of Iran","number":"57430","units":9,"blurb":"The Iranian civilization is one of the oldest continuing civilizations in the world. Music has pl..."},"57431":{"name":"Italian Literature and Repertoire","number":"57431","units":3,"blurb":"The course provides a bibliography of repertoire in the Italian language. Material will include a..."},"57432":{"name":"French Literature and Repertoire","number":"57432","units":3,"blurb":"This course examines French songs for solo voice. Representative works from 18th through 20th cen..."},"57433":{"name":"Musical Theatre Literature and Repertoire","number":"57433","units":3,"blurb":"This class covers music theatre repertoire for two semesters, beginning chronologically with the ..."},"57434":{"name":"Musical Theatre Literature and Repertoire","number":"57434","units":3,"blurb":"Continues 57433 Musical Theatre Literature and Repertoire."},"57435":{"name":"German Literature and Repertoire","number":"57435","units":3,"blurb":"The course examines German repertoire composed for solo voice. Representative works from the Baro..."},"57436":{"name":"English/Contemporary Literature and Repertoire","number":"57436","units":3,"blurb":"The course provides a bibliography of repertoire in the English language. Material will be limite..."},"57437":{"name":"Literature and Repertoire","number":"57437","units":3,"blurb":"This course deals with literature and repertoire for orchestral instruments. There are multiple s..."},"57438":{"name":"Multitrack Recording","number":"57438","units":9,"blurb":"This course builds upon the ideas learned in Sound Recording (57337), but with an emphasis on clo..."},"57442":{"name":"Analytical Techniques","number":"57442","units":9,"blurb":"Analytical Techniques is an upper level music support course for juniors and seniors who have com..."},"57444":{"name":"Principles of Counterpoint","number":"57444","units":9,"blurb":"This course explores the development of Western music composed with multiple independent parts. T..."},"57446":{"name":"Renaissance Counterpoint","number":"57446","units":6,"blurb":"In this course the student will study how to write vocal counterpoint using the classic \"species\"..."},"57447":{"name":"Harp Pedagogy","number":"57447","units":3,"blurb":"TBA"},"57448":{"name":"Brass Pedagogy","number":"57448","units":3,"blurb":"In this course we introduce the \"Art of Teaching\". In this case, to teach, develop and encourage ..."},"57449":{"name":"Beginning Piano for Children","number":"57449","units":6,"blurb":"This course is the second of two courses in a year-long internship in the piano teaching of young..."},"57450":{"name":"Audience Development","number":"57450","units":6,"blurb":"TBA"},"57451":{"name":"Teaching Artist Training","number":"57451","units":6,"blurb":"TBA"},"57452":{"name":"Audience Engagement in Action","number":"57452","units":6,"blurb":"Responding to requests from the Pittsburgh community, Audience Engagement teams spearhead innovat..."},"57455":{"name":"Shaping Time in Performance","number":"57455","units":9,"blurb":"This course will look at basic questions that performers face: Which level of pulse do I want to ..."},"57456":{"name":"Communication and Marketing","number":"57456","units":6,"blurb":"What is your message? Who is your audience? How do you reach them? These are among the topics we'..."},"57459":{"name":"Score Reading/Keyboard Harmony","number":"57459","units":6,"blurb":"This course is for pianists, organists, and other musicians with good keyboard skills. It is a pr..."},"57463":{"name":"Eurhythmics for Non-Majors","number":"57463","units":6,"blurb":"Rhythm is about time and timing. Dalcroze Eurhythmics is an exploration of the rhythm inside us. ..."},"57467":{"name":"Production: Crew","number":"57467","units":3,"blurb":"To be determined by the department"},"57468":{"name":"Production: Crew","number":"57468","units":3,"blurb":"TBA."},"57470":{"name":"Production: Scenes","number":"57470","units":6,"blurb":"Preparation of operatic and musical theatre scenes with a public performance of the scenes at the..."},"57471":{"name":"Production: Performance","number":"57471","units":6,"blurb":"Preparation of an operatic or musical theatre production with a fully staged public performance o..."},"57472":{"name":"Production: Performance","number":"57472","units":6,"blurb":"Preparation of an operatic or musical theatre production with a fully staged public performance o..."},"57478":{"name":"Survey of Historical Recording","number":"57478","units":6,"blurb":"Through an intensive listening regimen, illustrated virtual lectures, discussion, and projects, t..."},"57480":{"name":"History of Black American Music","number":"57480","units":6,"blurb":"Come and explore the rich musical heritage of Black America. This course will survey the music of..."},"57487":{"name":"Advanced Solfege III","number":"57487","units":3,"blurb":"Covers the same concepts as Solfege IV in more challenging material, from Bach chorales in open s..."},"57488":{"name":"Advanced Solfege IV","number":"57488","units":3,"blurb":"Continues 57487 Advanced Solfege III."},"57500":{"name":"Major Studio (Voice)","number":"57500","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57501":{"name":"Major Studio (Piano)","number":"57501","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57502":{"name":"Major Studio (Organ)","number":"57502","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57503":{"name":"Major Studio (Harp)","number":"57503","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57505":{"name":"Major Studio (Violin)","number":"57505","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57506":{"name":"Major Studio (Viola)","number":"57506","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57507":{"name":"Major Studio (Cello)","number":"57507","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57508":{"name":"Major Studio (Double Bass)","number":"57508","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57509":{"name":"Major Studio (Guitar)","number":"57509","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57510":{"name":"Major Studio (Flute)","number":"57510","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57511":{"name":"Major Studio (Oboe)","number":"57511","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57512":{"name":"Major Studio (Clarinet)","number":"57512","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57513":{"name":"Major Studio (Bassoon)","number":"57513","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57514":{"name":"Major Studio (Saxophone)","number":"57514","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57515":{"name":"Major Studio (Horn)","number":"57515","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57516":{"name":"Major Studio (Trumpet)","number":"57516","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57517":{"name":"Major Studio (Trombone)","number":"57517","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57518":{"name":"Major Studio (Euphonium/Baritone)","number":"57518","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57519":{"name":"Major Studio (Tuba)","number":"57519","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57520":{"name":"Major Studio (Percussion)","number":"57520","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57521":{"name":"Major Studio (Composition)","number":"57521","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57522":{"name":"Major Studio (Bagpipe)","number":"57522","units":9,"blurb":"A one hour private lesson per week for all music majors."},"57570":{"name":"Music and Technology Seminar","number":"57570","units":1,"blurb":"Missing Course Description - please contact the teaching department."},"57571":{"name":"Music and Technology Project","number":"57571","units":12,"blurb":"TBA"},"57572":{"name":"Music and Technology Project","number":"57572","units":12,"blurb":"TBA"},"57597":{"name":"Senior Project","number":"57597","units":0,"blurb":"A composition for orchestra required of all senior composition majors."},"57598":{"name":"Junior Recital","number":"57598","units":0,"blurb":"A half recital required of all junior performance majors."},"57599":{"name":"Senior Recital","number":"57599","units":0,"blurb":"A full recital required of all senior performance majors."},"57603":{"name":"Practice Teaching (Elementary)","number":"57603","units":0,"blurb":"Experience in working with elementary students in a public school setting. The teaching is superv..."},"57604":{"name":"Practice Teaching (Secondary)","number":"57604","units":0,"blurb":"Experience in working with secondary students in a public school setting. The teaching is supervi..."},"57607":{"name":"Vocal Methods","number":"57607","units":3,"blurb":"This course enables each student to develop a pleasant, healthy, and musically expressive voice a..."},"57608":{"name":"Observation","number":"57608","units":3,"blurb":"This music education offering is an independent study course designed to introduce students to a ..."},"57610":{"name":"Internship","number":"57610","units":0,"blurb":"A student can receive credit for an unpaid internship in a music related field. The amount of cre..."},"57611":{"name":"Independent Study in History","number":"57611","units":0,"blurb":"Students undertake a critical examination of some aspects of music on an independent basis under ..."},"57612":{"name":"Independent Study in Theory","number":"57612","units":0,"blurb":"Students undertake a critical examination of some aspects of music on an independent basis under ..."},"57613":{"name":"Independent Study in Research","number":"57613","units":0,"blurb":"Students undertake a critical examination of some aspects of music on an independent basis under ..."},"57614":{"name":"Independent Study in Performance","number":"57614","units":0,"blurb":"Students undertake a critical examination of some aspects of music on an independent basis under ..."},"57615":{"name":"Independent Study in Electronic and Computer Music","number":"57615","units":0,"blurb":"Students undertake a critical examination of some aspects of music on an independent basis under ..."},"57616":{"name":"Independent Study in Literature and Repertoire","number":"57616","units":0,"blurb":"Students undertake a critical examination of some aspects of music on an independent basis under ..."},"57617":{"name":"Independent Study in Sound Recording","number":"57617","units":0,"blurb":"Students undertake a critical examination of some aspects of music on an independent basis under ..."},"57618":{"name":"Independent Study in Conducting","number":"57618","units":0,"blurb":"Students undertake a critical examination of some aspects of music on an independent basis under ..."},"57619":{"name":"Independent Study in Opera","number":"57619","units":0,"blurb":"Students undertake a critical examination of some aspects of music on an independent basis under ..."},"57620":{"name":"Independent Study in Solfege","number":"57620","units":0,"blurb":"Students undertake a critical examination of some aspects of music on an independent basis under ..."},"57621":{"name":"Independent Study in Eurhythmics","number":"57621","units":0,"blurb":"Students undertake a critical examination of some aspects of music on an independent basis under ..."},"57622":{"name":"Independent Study for Competitions","number":"57622","units":3,"blurb":"Students undertake a critical examination of some aspects of music on an independent basis under ..."},"57623":{"name":"Independent Study in Diction","number":"57623","units":0,"blurb":"Students undertake a critical examination of some aspects of music on an independent basis under ..."},"57624":{"name":"Independent Study in Theater Composition","number":"57624","units":0,"blurb":"Students undertake a critical examination of some aspects of music on an independent basis under ..."},"57691":{"name":"Dalcroze Pedagogy/Practice Teaching","number":"57691","units":3,"blurb":"This course gives hands-on experience in applying Dalcroze principles in teaching situations. It ..."},"60101":{"name":"Concept Studio: The Self and the Human Being","number":"60101","units":10,"blurb":"Concept Studio: The Self and the Human Being is first of a sequence of six studio courses designe..."},"60104":{"name":"Contemporary Issues Forum","number":"60104","units":6,"blurb":"This introductory class presents to students a diverse range of contemporary issues in the visual..."},"60109":{"name":"Adventures in Arts Time","number":"60109","units":9,"blurb":"An introduction to the essential elements, structures and dynamics of ?Arts Histories? from the e..."},"60110":{"name":"Electronic Media Studio: Introduction to the Moving Image","number":"60110","units":10,"blurb":"Electronic Media Studio: Introduction to the Moving Image is an introduction to the computer as a..."},"60125":{"name":"Introduction to 3D Animation","number":"60125","units":6,"blurb":"[IDeATe course] This mini on introductory animation is designed to explore the wonderful world of..."},"60126":{"name":"Introduction to Performance Capture and Rendering","number":"60126","units":6,"blurb":"[IDeATe course] This mini is designed for those interested in the growing world of performance ca..."},"60130":{"name":"3-D Media Studio I","number":"60130","units":5,"blurb":"An introduction to three-dimensional form. Various materials and methods are explored through pro..."},"60131":{"name":"3D Media Studio II","number":"60131","units":5,"blurb":"Three unique mini classes offer an introduction to basic language and approaches of sculptural pr..."},"60141":{"name":"Black and White Photography I","number":"60141","units":10,"blurb":"This course will teach you the basic craft of photography from exposure of the negative through d..."},"60142":{"name":"Digital Photography I","number":"60142","units":10,"blurb":"This course explores digital photography and digital printing methods. By semester's end students..."},"60150":{"name":"2D Media Studio: Drawing","number":"60150","units":10,"blurb":"This course focuses on the language, materials and concepts of drawing as foundation for all the ..."},"60160":{"name":"2D Media Studio: Imaging","number":"60160","units":10,"blurb":"A continuation of Two-Dimensional Media Studio: Drawing. Includes an expansion of drawing to incl..."},"60200":{"name":"Sophomore Review","number":"60200","units":0,"blurb":"Students present their work and their ideas about their work to a faculty committee. A successful..."},"60201":{"name":"Concept Studio: Space and Time","number":"60201","units":10,"blurb":"Concept Studio: Space and Time is a continuation of Concept Studio: The Self and the Human Being ..."},"60205":{"name":"Modern Visual Culture 1789-1960","number":"60205","units":9,"blurb":"Explores the diverse roles of artists in the complexity of modern society from the Industrial Rev..."},"60206":{"name":"Contemporary Visual Culture 1960 - Present","number":"60206","units":9,"blurb":"This course traces the shifts in art from late Modernism until our After Post era. It will examin..."},"60210":{"name":"Electronic Media Studio: Introduction to Interactivity","number":"60210","units":10,"blurb":"Electronic Media Studio: Introduction to Interactivity is an introduction to software programming..."},"60215":{"name":"Visualizing Issues with Images and Sound","number":"60215","units":5,"blurb":"In this mini, students will use documentary photography to explore their lives and immediate comm..."},"60220":{"name":"Technical Character Animation","number":"60220","units":10,"blurb":"[IDeATe course] With an emphasis on character animation, this course will explore the whole produ..."},"60223":{"name":"Introduction to Physical Computing","number":"60223","units":10,"blurb":"[IDeATe portal course] Physical computing refers to the design and construction of physical syste..."},"60240":{"name":"Unfolding Environments: The Intersection of Person and Place","number":"60240","units":10,"blurb":"This course will use photography and visual narratives to look at our surroundings. Assignments w..."},"60241":{"name":"Black and White Photography II","number":"60241","units":10,"blurb":"This course extends the traditional darkroom process of silver printing from Black and White Phot..."},"60245":{"name":"Portrait Photography","number":"60245","units":10,"blurb":"Portrait Photography explores the emotional and visual process of collaboration between subject a..."},"60250":{"name":"2D Media Studio: Painting","number":"60250","units":10,"blurb":"A pragmatic introduction to the tools, materials, and techniques of painting, including instructi..."},"60251":{"name":"2D Media Studio: Print Media","number":"60251","units":10,"blurb":"An introduction to print media with emphasis on reproductive image making in the context of histo..."},"60280":{"name":"Introduction to Contextual Practice","number":"60280","units":10,"blurb":"For some time now art has moved out of gallery and museum spaces and into all facets of public li..."},"60352":{"name":"NOISE: Toward a Critical Theory of Sound and Hearing","number":"60352","units":9,"blurb":"This seminar will explore audio art in its widest sense: sound sculpture and installations, radio..."},"60353":{"name":"Media Performance: History, Theory, and Contemporary Practice","number":"60353","units":9,"blurb":"During the last decade of the twentieth century, new technologies have transformed the way we thi..."},"60356":{"name":"Curators, Artists, Audiences & International Markets","number":"60356","units":9,"blurb":"How does art and artists get selected for museum shows, collections, and biennials? This course o..."},"60358":{"name":"Art and Biology","number":"60358","units":9,"blurb":"A studio-laboratory art-making course designed to explore interactions between art and biology. I..."},"60373":{"name":"Aesthetics from a Global Viewpoint","number":"60373","units":9,"blurb":"The arts and their making is a behavior that differentiates our species. Artistic/aesthetic diffe..."},"60397":{"name":"Art, Conflict, and Technology in Northern Ireland","number":"60397","units":12,"blurb":"Art, Conflict and Technology in Northern Ireland is a 9-unit course cross-listed in the School of..."},"60398":{"name":"Social History of Animation","number":"60398","units":9,"blurb":"Social History of Animation will investigate the history of animation from early experiments with..."},"60399":{"name":"Art History/Theory Independent Study","number":"60399","units":9,"blurb":"A tutorial course in which an Art student works individually on a self-generated project under th..."},"60400":{"name":"Senior Review","number":"60400","units":0,"blurb":"Students present their work and their ideas about their work to a faculty committee. This review ..."},"60401":{"name":"Senior Studio","number":"60401","units":10,"blurb":"Students initiate a comprehensive two-semester project in the first semester to be continued and ..."},"60402":{"name":"Senior Studio","number":"60402","units":10,"blurb":"Students continue a comprehensive two-semester capstone project. Each student pursues an ambitiou..."},"60403":{"name":"Extended Studio","number":"60403","units":10,"blurb":"Extended Studio allows students to work individually or collaboratively on a self-generated body ..."},"60406":{"name":"Advanced ETB: Internet Resistance","number":"60406","units":10,"blurb":"Through booms and crashes, colonizations and disruptions, IPOs and LOLZ, Internet has been a spec..."},"60412":{"name":"Interactive Art and Computational Design","number":"60412","units":12,"blurb":"This is an advanced studio course in arts-engineering and new media practice, with a special emph..."},"60419":{"name":"Advanced ETB: Experimental Game Design","number":"60419","units":10,"blurb":"Experimental Game Design: Playing Stories is a hands-on game design course focused on innovative ..."},"60422":{"name":"Advanced ETB: Experimental Animation","number":"60422","units":12,"blurb":"[IDeATe course] This class will explore animation from the student's perspective with a sense of ..."},"60430":{"name":"Advanced SIS: Open Sculpture","number":"60430","units":10,"blurb":"Sculpture is perhaps the broadest field among the contemporary visual arts. Through its privilege..."},"60433":{"name":"Advanced SIS: Clay Sculpture","number":"60433","units":10,"blurb":"Clay is a primary building block of sculpture. This supple, responsive and versatile material is ..."},"60437":{"name":"Advanced CP/SIS: Environmental Sculpture","number":"60437","units":10,"blurb":"Studio focus on sculpting with the environment. Includes object making, installations and site wo..."},"60438":{"name":"Advanced SIS: Intimate Objects","number":"60438","units":10,"blurb":"The intimate object - exploring the issues of small scale sculpture. This class will deal with th..."},"60441":{"name":"Advanced CP/SIS: Urban Intervention","number":"60441","units":10,"blurb":"This course introduces students to theories, practices, and communities for critical investigatio..."},"60446":{"name":"Advanced SIS: Expanded Theater Fusion Studio","number":"60446","units":10,"blurb":"[IDeATe collaborative course] As the boundaries between theater, art, entertainment and everyday ..."},"60453":{"name":"Advanced DP3: Painting","number":"60453","units":10,"blurb":"In this course you will be encouraged to expand your skills and develop a personal vision, while ..."},"60464":{"name":"Advanced DP3: Expanding the Graphic Novel","number":"60464","units":10,"blurb":"In this course, students will critically and creatively engage the medium of comics to both learn..."},"60472":{"name":"Advanced DP3: Mutable Landscape","number":"60472","units":10,"blurb":"With camera in hand, students will explore, document and invent a sense of place in Pittsburgh. I..."},"60499":{"name":"Studio Independent Study","number":"60499","units":0,"blurb":"A tutorial studio in which an Art student works individually on a self-generated project under th..."},"60590":{"name":"Internship","number":"60590","units":0,"blurb":"Art Internships are open to all BFA, BHA, BSA and BCSA Art students. Internships may take place w..."},"60756":{"name":"Curators, Artists, Audiences & International Markets","number":"60756","units":9,"blurb":"How does art and artists get selected for museum shows, collections, and biennials? This course o..."},"62010":{"name":"Pittsburgh Filmakers","number":"62010","units":9,"blurb":"Any of Pittsburgh Filmmakers full semester course offerings are available for registration throug..."},"62102":{"name":"Modern Dance Workshop","number":"62102","units":6,"blurb":"A modern dance class based on the philosophy of the Martha Graham technique. The class is designe..."},"62110":{"name":"Passport to the Arts","number":"62110","units":9,"blurb":"Exploring Audience and Ideas in the Arts: \"Passport\" is an introductory level course that explore..."},"62141":{"name":"Black and White Photography I","number":"62141","units":10,"blurb":"This course will teach you the basic craft of photography from exposure of the negative through d..."},"62142":{"name":"Digital Photography I","number":"62142","units":10,"blurb":"This course explores digital photography and digital printing methods. By semester's end students..."},"62150":{"name":"Introduction to Media Synthesis and Analysis","number":"62150","units":10,"blurb":"[IDeATe portal course] New creative industries are empowering new modes of collaborative consumpt..."},"62165":{"name":"Mutable Landscape:","number":"62165","units":10,"blurb":"With camera in hand, students will explore, document and invent a sense of place in Pittsburgh. I..."},"62175":{"name":"Descriptive Geometry","number":"62175","units":6,"blurb":"This is a manual construction course for solving problems in three-dimensional geometry through w..."},"62240":{"name":"Unfolding Environments: The Intersection of Person and Place","number":"62240","units":10,"blurb":"This course will use photography and visual narratives to look at our surroundings. Assignments w..."},"62241":{"name":"Black and White Photography II","number":"62241","units":10,"blurb":"This course extends the traditional darkroom process of silver printing from Black and White Phot..."},"62245":{"name":"Portrait Photography","number":"62245","units":10,"blurb":"Portrait Photography explores the emotional and visual process of collaboration between subject a..."},"62247":{"name":"Introduction to Hot Glass I","number":"62247","units":3,"blurb":"In this introductory Hot Glass I class, you will learn to gather molten glass from the furnace, a..."},"62250":{"name":"Beginner Beadmaking","number":"62250","units":3,"blurb":"If you're fascinated by baubles, bangles and beads, this is the class for you. You will make many..."},"62252":{"name":"Marble Madness","number":"62252","units":3,"blurb":"Learn how to fashion a perfect sphere in soft Italian glass. You will begin with the basics of ga..."},"62255":{"name":"Imagery: Powder Printing and More","number":"62255","units":3,"blurb":"Explore the endless possibilities of the printed image in kilnformed glass. In this class you wil..."},"62256":{"name":"Introduction to Coldworking","number":"62256","units":3,"blurb":"Learn about all of the equipment in the cold shop including belt sanders, flat grinders, dremels,..."},"62275":{"name":"Fundamentals of Computational Design","number":"62275","units":9,"blurb":"TBA"},"62326":{"name":"Photographic Narrative","number":"62326","units":9,"blurb":"Most photographs tell stories. We see photographs in newspapers, magazines, snapshot albums, on t..."},"62347":{"name":"Hot Glass II","number":"62347","units":3,"blurb":"Now that you?re hooked on hot glass, how do you keep the momentum going? By enrolling in Hot II, ..."},"62358":{"name":"Art and Biology","number":"62358","units":9,"blurb":"A studio-laboratory art-making course designed to explore interactions between art and biology. I..."},"62360":{"name":"Photographers and Photography Since World War II","number":"62360","units":9,"blurb":"Invented in 1839, photography was a form of visual expression that immediately attracted a large ..."},"62371":{"name":"Photography, The First 100 Years, 1839-1939","number":"62371","units":9,"blurb":"Photography was announced to the world almost simultaneously in 1839, first in France and then a ..."},"62420":{"name":"Aesthetics and Critical Judgement","number":"62420","units":6,"blurb":"In this course, we will examine the question of how one judges a work of art. The course will pro..."},"62442":{"name":"All about the Pattern","number":"62442","units":3,"blurb":"In this class we will introduce multiple color techniques to help you learn how to create uniquel..."},"62443":{"name":"Intermediate Fusing","number":"62443","units":3,"blurb":"We will focus on perfecting our glass cutting skills and knowledge while revisiting ideas and tec..."},"62444":{"name":"Scratch the Surface: Color Techniques","number":"62444","units":3,"blurb":"Immerse yourself in a world of endless techniques of color applications. Students will begin buil..."},"62445":{"name":"3D Stained Glass","number":"62445","units":3,"blurb":"Add some dimension to your stained glass! Students will learn how to cut and shape sheet glass so..."},"62446":{"name":"Hot Glass III","number":"62446","units":3,"blurb":"In this class, you will be encouraged to focus on techniques that interest you as a developing gl..."},"62447":{"name":"Hot Glass III Open Projects","number":"62447","units":3,"blurb":"There will be no weekly demonstration by the instructor. Students in this class will be encourage..."},"62450":{"name":"Flame I","number":"62450","units":3,"blurb":"A great combination class to explore variety in the flameshop. You will work with both Moretti (s..."},"62452":{"name":"Flame II","number":"62452","units":3,"blurb":"Fine-tune your skills from Flame I while taking it to another level! In Flame II things begin to ..."},"62453":{"name":"Introduction to Fusing and Slumping","number":"62453","units":3,"blurb":"Fusing has many dimensions even though you are working with flat glass. Harness the heat of the k..."},"62455":{"name":"Intro to Kiln Casting","number":"62455","units":3,"blurb":"Combine sculpting and building molds of objects with the heat of the kiln to manipulate glass and..."},"62456":{"name":"Fused and Slumped Glass-Phase II","number":"62456","units":3,"blurb":"We will focus on perfecting our glass cutting skills and knowledge while revisiting ideas and tec..."},"62459":{"name":"Intro to Stained Glass","number":"62459","units":3,"blurb":"Learn the Tiffany method of stained glass while creating your very own stained glass panel from a..."},"62464":{"name":"Earring Clinic with Michael Mangiafico","number":"62464","units":3,"blurb":"Explore the world of mandrel flameworked hanging style glass earrings through melting colorful so..."},"62473":{"name":"Print/Photo Workshop","number":"62473","units":10,"blurb":"TBA"},"62475":{"name":"ACTIVATED ANAMORPHS: Performative Inhabitables and Interactive Prostheses","number":"62475","units":10,"blurb":"This interdisciplinary project and performance based studio course will concentrate on the contem..."},"62478":{"name":"digiTOOL","number":"62478","units":6,"blurb":"This IDeATe-affiliated course serves as an introduction to the fundamental concepts, processes, a..."},"62661":{"name":"Interaction and Expression using Pausch Bridge Lighting","number":"62661","units":3,"blurb":"Working in cross-disciplinary teams, students will explore light as art, interactive design and p..."},"62714":{"name":"Galleries & Auction Houses: Economics of the Art Market","number":"62714","units":6,"blurb":"This class surveys the for-profit art gallery model. Topics include exploration of the business m..."},"62775":{"name":"ACTIVATED ANAMORPHS: Performative Inhabitables and Interactive Prostheses","number":"62775","units":10,"blurb":"This interdisciplinary project and performance based studio course will concentrate on the contem..."},"65101":{"name":"Humanities Scholar I","number":"65101","units":9,"blurb":"The Social Impact of War. Tim Haggerty (director, Humanities Scholars Program) War is a continuin..."},"65201":{"name":"Humanities Scholars III","number":"65201","units":9,"blurb":"65-201, Fall 2015: Ringside: Boxing as Sport and Story Whatever one?s opinion of boxing, it endur..."},"66221":{"name":"Topics of Law: Introduction to Intellectual Property Law","number":"66221","units":9,"blurb":"Topics for this course vary, to include such foci as intellectual property, introduction to U.S. ..."},"66230":{"name":"Elective Seminar: American Political Journalism","number":"66230","units":12,"blurb":"This class will explore the relationships among politics, news media and government. It will do s..."},"66307":{"name":"Independent Study","number":"66307","units":0,"blurb":"This course is intended for students with a special interest in an interdisciplinary area in the ..."},"66312":{"name":"CMUWSPCore Seminar: The Supreme Court","number":"66312","units":12,"blurb":"NOTE: THIS COURSE IS FOR CMU WASHINGTON SEMESTER STUDENTS ONLY. Gay marriage. The death penalty. ..."},"66313":{"name":"CMUWSP Elective Seminar: Fiscal Policy-making in the U.S.","number":"66313","units":12,"blurb":"NOTE: THIS COURSE IS FOR CMU WASHINGTON SEMESTER STUDENTS ONLY. The purpose of this course is to ..."},"66317":{"name":"CMUWSP Elective Seminar: Politics and Poems: Writing Verse in DC","number":"66317","units":12,"blurb":"NOTE: THIS COURSE IS FOR CMU WASHINGTON SEMESTER STUDENTS ONLY. This course is a space for writin..."},"66320":{"name":"Internship","number":"66320","units":0,"blurb":"Internships-for-credit allow students to apply course-based knowledge in a non-classroom setting,..."},"66321":{"name":"CMUWSP Internship Seminar","number":"66321","units":15,"blurb":"NOTE: THIS COURSE IS FOR CMU WASHINGTON SEMESTER STUDENTS ONLY. The internship is the experientia..."},"66323":{"name":"Core Seminar: Congress","number":"66323","units":12,"blurb":"NOTE: THIS COURSE IS FOR CMU WASHINGTON SEMESTER STUDENTS ONLY. This thematic research seminar wi..."},"66324":{"name":"Core Seminar: Washington Media","number":"66324","units":12,"blurb":"NOTE: THIS COURSE IS FOR CMU WASHINGTON SEMESTER STUDENTS ONLY. This seminar will explore the rap..."},"66325":{"name":"Core Seminar: General Research","number":"66325","units":12,"blurb":"NOTE: THIS COURSE IS FOR CMU WASHINGTON SEMESTER STUDENTS ONLY. In this seminar each student will..."},"66327":{"name":"Core Seminar:International Policy and The Global System of the 21st Century","number":"66327","units":12,"blurb":"NOTE: THIS COURSE IS FOR CMU WASHINGTON SEMESTER STUDENTS ONLY. This course's first objective is ..."},"66328":{"name":"Elective Seminar: Lobbying, Money and Influence in Washington","number":"66328","units":12,"blurb":"NOTE: THIS COURSE IS FOR CMU WASHINGTON SEMESTER STUDENTS ONLY. This course will be an intense ex..."},"66332":{"name":"Elective Seminar: The Theater of Politics","number":"66332","units":12,"blurb":"NOTE: THIS COURSE IS FOR CMU WASHINGTON SEMESTER STUDENTS ONLY. Over the years, this course has c..."},"66334":{"name":"Elective Seminar: Campaigns and Elections","number":"66334","units":12,"blurb":"NOTE: THIS COURSE IS FOR CMU WASHINGTON SEMESTER STUDENTS ONLY. This class will teach you how to ..."},"66501":{"name":"H&SS Senior Honors Thesis I","number":"66501","units":9,"blurb":"This sequence is open only to those seniors who have been admitted to the H&SS Senior Honors Prog..."},"66502":{"name":"H&SS Senior Honors Thesis II","number":"66502","units":9,"blurb":"This sequence is open only to those seniors who have been admitted to the H&SS Senior Honors Prog..."},"67100":{"name":"Information Systems Freshman Workshop","number":"67100","units":1,"blurb":"This class provides an overview of the Information Systems Program for freshman students. The Pro..."},"67102":{"name":"Concepts of Information Systems","number":"67102","units":9,"blurb":"This course is an introduction to the world of Information Systems (IS). It introduces the core c..."},"67211":{"name":"Introduction to Business Systems Programming","number":"67211","units":6,"blurb":"This course is an introduction to the COBOL programming language. In addition to the basic syntax..."},"67250":{"name":"The Information Systems Milieux","number":"67250","units":9,"blurb":"Information systems (IS) are changing work practices, reshaping organizations, transforming cultu..."},"67262":{"name":"Database Design and Development","number":"67262","units":9,"blurb":"Data driven decision making is a core process of organizations. In this class students will study..."},"67265":{"name":"Design Fundamentals I: Shaping Interactions and Experiences","number":"67265","units":9,"blurb":"This is an introductory course in interaction design, user experience, and the process of designi..."},"67272":{"name":"Application Design and Development","number":"67272","units":9,"blurb":"This course provides students with the concepts and techniques to design and develop software app..."},"67280":{"name":"Special Topics: Information System Security","number":"67280","units":9,"blurb":"This course is an introduction to information security from an information systems perspective. T..."},"67306":{"name":"Special Topics: Management of Computer and Information Systems","number":"67306","units":6,"blurb":"The course will provide a thorough understanding of the many responsibilities for managing techno..."},"67308":{"name":"Innovation Studio: Health Care Information Systems","number":"67308","units":9,"blurb":"Healthcare information systems are intended to improve patient outcomes while reducing the cost o..."},"67316":{"name":"Human Computer Interface Design and Testing","number":"67316","units":9,"blurb":"This course emphasizes team-based activities to promote engaged learning and application of user-..."},"67317":{"name":"Mobile Web Development and Usability Testing","number":"67317","units":9,"blurb":"This course is offered only at Carnegie Mellon's campus in Qatar. Designing for mobile web applic..."},"67319":{"name":"Global Technology Consulting Groundwork","number":"67319","units":3,"blurb":"This course is by invitation only for participants in the Technology Consulting in the Global Com..."},"67323":{"name":"Enterprise Systems: Concepts and Practice","number":"67323","units":9,"blurb":"Enterprise systems are the trend of software today in the industry. By integrating various functi..."},"67328":{"name":"Mobile to Cloud: Building Distributed Applications","number":"67328","units":9,"blurb":"Web 2.0, Mashups, Mobile Apps, and Cloud Computing are just a few of the new terms people are usi..."},"67329":{"name":"Contemporary Themes in Global Systems","number":"67329","units":9,"blurb":"Globalization and outsourcing of information systems (IS) is a mainstay of the business environme..."},"67331":{"name":"Technology Consulting in the Global Community","number":"67331","units":3,"blurb":"This course is by invitation only for participants in the Technology Consulting in the Global Com..."},"67344":{"name":"Organizational Intelligence in the Information Age","number":"67344","units":9,"blurb":"Across all organizations people find that the actions they take affect, and are affected by, the ..."},"67352":{"name":"Electronic Business","number":"67352","units":9,"blurb":"The objective of this course is to give students a good understanding on how e-business is conduc..."},"67353":{"name":"IT & Environmental Sustainability","number":"67353","units":6,"blurb":"Information Technology can have both negative and positive impacts on the environment. IT product..."},"67354":{"name":"Information Systems and Sustainability","number":"67354","units":9,"blurb":"Environmental, economic, and societal challenges are affecting the sustainability of many communi..."},"67357":{"name":"Healthcare Analytics and Big Data","number":"67357","units":9,"blurb":"The objectives of this course are: (1) to provide a sound understanding of how healthcare analyti..."},"67358":{"name":"Technologies in Service Design","number":"67358","units":9,"blurb":"**This course is currently available only on the Qatar campus. **The course looks at designing se..."},"67359":{"name":"Design Fundamentals II","number":"67359","units":9,"blurb":"This is a course study in communication design, data presentation, organization, visual hierarchy..."},"67362":{"name":"Big Data and Analytics","number":"67362","units":9,"blurb":"Massive amounts of data (terabytes and beyond) are available in a range of domains: commerce, fin..."},"67372":{"name":"Principles of Database Systems","number":"67372","units":9,"blurb":"Building upon prior exposure to data modeling, students will study in depth principles of databas..."},"67373":{"name":"Software Development Project","number":"67373","units":12,"blurb":"In this course, students design and implement a usable information system for a client. The clien..."},"67381":{"name":"The Designed World","number":"67381","units":9,"blurb":"This is a seminar course based on rhetorical inquiry into the nature of the designed world, how t..."},"67390":{"name":"Independent Study in Information Systems","number":"67390","units":0,"blurb":"Independent studies are opportunities to engage in research with an IS faculty member to advance ..."},"67442":{"name":"Mobile Application Development in iOS","number":"67442","units":9,"blurb":"This course provides students with the concepts and techniques to design and develop mobile appli..."},"67474":{"name":"Tech Startup Launchpad","number":"67474","units":9,"blurb":"This course provides hands-on learning about what it is like to start and launch a technology sta..."},"67475":{"name":"Innovation in Information Systems","number":"67475","units":12,"blurb":"In this capstone team-based course, IS seniors design and implement an information systems soluti..."},"67490":{"name":"Practicum in Information Systems","number":"67490","units":0,"blurb":"The practicum in information systems allows students interested in applying skills acquired in th..."},"69005":{"name":"Rec Sports","number":"69005","units":3,"blurb":"Rec sports is a class that will incorporate sports from our intramural program. The class will fo..."},"69101":{"name":"Racquetball","number":"69101","units":3,"blurb":"This course is designed to aid in developing the fundamental skills involved in racquetball. Tech..."},"69102":{"name":"Weight Training","number":"69102","units":3,"blurb":"This course is designed to provide the opportunity for the inexperienced student to learn the eff..."},"69110":{"name":"Personal Fitness","number":"69110","units":3,"blurb":"This course will be a conditioning course prescribed partially by the individual with assistance ..."},"69112":{"name":"Fitness Fusion","number":"69112","units":3,"blurb":"A fun power-packed workout designed to introduce all aspects of fitness. This class combines simp..."},"69113":{"name":"Beginning Karate","number":"69113","units":3,"blurb":"Beginning Karate teaches traditional Tang Soo Do (Korean Karate) by Master C. S. Kim and assistan..."},"69114":{"name":"Intermediate Karate","number":"69114","units":3,"blurb":"Intermediate Karate teaches a higher level of the traditional martial arts with specific standard..."},"69129":{"name":"Rape Agression Defense Systems (RAD)","number":"69129","units":3,"blurb":"Self Defense for Women - is a course specifically designed to increase women's awareness of poten..."},"69130":{"name":"Beginning Tennis","number":"69130","units":3,"blurb":"This course is designed to familiarize the student with the rules of tennis and to develop the sk..."},"69131":{"name":"Volleyball","number":"69131","units":3,"blurb":"This course is designed to familiarize the student with the rules of volleyball and to develop th..."},"69132":{"name":"Advanced Tennis","number":"69132","units":3,"blurb":"This course will consist mainly of tennis drills and discussions related to singles, doubles, and..."},"69134":{"name":"Beginning Golf","number":"69134","units":3,"blurb":"This course is designed to give the student all the skills necessary to play a satisfactory game ..."},"69135":{"name":"Soccer Skills","number":"69135","units":3,"blurb":"This course is designed to familiarize the student with the rules of soccer and to develop the sk..."},"69136":{"name":"Basketball Skills","number":"69136","units":3,"blurb":"This course is designed to familiarize the student with the rules of basketball and to develop th..."},"69137":{"name":"Ultimate Frisbee","number":"69137","units":3,"blurb":"This class is designed to teach basic Frisbee skills. This class is a great conditioning/cardio c..."},"69139":{"name":"Indoor Soccer Skills","number":"69139","units":3,"blurb":"This course is designed to familiarize the student with the rules of soccer and to develop the sk..."},"69140":{"name":"Squash","number":"69140","units":3,"blurb":"This course is designed to aid in developing the fundamental skills involved in squash. Technique..."},"69141":{"name":"Beginning Soccer","number":"69141","units":3,"blurb":"This class is designed for beginner soccer players. This class will teach you soccer skills and t..."},"69143":{"name":"Floor Hockey/Dodgeball","number":"69143","units":3,"blurb":"This class is designed to teach two team sports that are fun and great exercise. Both classes wil..."},"69144":{"name":"Diamond Sports","number":"69144","units":3,"blurb":"This course is designed to familiarize the student with the rules of softball and wiffleball and ..."},"69146":{"name":"Team Handball","number":"69146","units":3,"blurb":"Team Handball or European Handball - This is an introductory level class that will cover the basi..."},"69150":{"name":"Beginning Swimming","number":"69150","units":3,"blurb":"This basic course is designed to equip the non-swimmer with fundamental skills and knowledge to a..."},"69151":{"name":"Introduction to Yoga","number":"69151","units":3,"blurb":"This course is designed for the beginning yoga student who wants to gain a solid foundation of yo..."},"69153":{"name":"Lifeguard Training","number":"69153","units":3,"blurb":"This class is the American Red Cross Lifeguard Training course. Students who complete certificati..."},"69155":{"name":"Cardio Fitness/Sculpt","number":"69155","units":3,"blurb":"A total body fitness class for men and women that incorporates stretching for flexibility, exerci..."},"69160":{"name":"Swim-Fit","number":"69160","units":3,"blurb":"Must be able to complete a 1000 yard swim (40 laps) prior to entering the class ; this is not a l..."},"69165":{"name":"Cycling Core","number":"69165","units":3,"blurb":"Indoor cycling classes are riding on a stationary bike while getting a great workout, experiencin..."},"69167":{"name":"Bike Outdoors","number":"69167","units":2,"blurb":"This class is designed for students looking to explore the campus surroundings while biking. Helm..."},"69175":{"name":"African-Caribbean Dance","number":"69175","units":2,"blurb":"This class incorporates African-Modern dance technique (specifically elements of Dunham and Horto..."},"69176":{"name":"Non-Majors Jazz","number":"69176","units":3,"blurb":"This class is designed for those students who would like to continue their study in jazz but are ..."},"70100":{"name":"Global Business","number":"70100","units":9,"blurb":"This course examines the fundamental issues in the development of new markets for products and se..."},"70101":{"name":"Introduction to Business Management","number":"70101","units":9,"blurb":"This course examines the fundamental issues in the development of new markets for products and se..."},"70122":{"name":"Introduction to Accounting","number":"70122","units":9,"blurb":"This course provides the knowledge and skills necessary for the student to understand financial s..."},"70160":{"name":"Graphic Media Management","number":"70160","units":9,"blurb":"This course covers fundamental topics related to graphic media. Modern graphic techniques are stu..."},"70196":{"name":"Publishing on the World Wide Web","number":"70196","units":9,"blurb":"This is an introductory course in Publishing on the World Wide Web. The class has both a classroo..."},"70201":{"name":"Professional and Service Projects","number":"70201","units":9,"blurb":"Professional service is important in career development because it creates opportunities to use s..."},"70207":{"name":"Probability and Statistics for Business Applications","number":"70207","units":9,"blurb":"Elementary ideas in probability, statistics, and data analysis are presented in the context of th..."},"70208":{"name":"Regression Analysis","number":"70208","units":9,"blurb":"This class focuses on the statistical analysis of the relationship between two or more random var..."},"70311":{"name":"Organizational Behavior","number":"70311","units":9,"blurb":"This course examines the factors which influence individual, group and firm behavior in the conte..."},"70321":{"name":"Negotiation and Conflict Resolution","number":"70321","units":9,"blurb":"This course will complement the technical and diagnostic skills you have learned in other courses..."},"70332":{"name":"Business, Society and Ethics","number":"70332","units":9,"blurb":"The course draws upon actual cases to explore fundamental questions faced by businesses operating..."},"70339":{"name":"Information Technology for Finance","number":"70339","units":9,"blurb":"The financial services industry is a leader in the use of information technology. Firms in bankin..."},"70340":{"name":"Business Communications","number":"70340","units":9,"blurb":"Business Communications develops and sharpens your written, oral, and interpersonal communication..."},"70341":{"name":"Organizational Communication","number":"70341","units":9,"blurb":"Much of the work in groups and organizations consists of communication. You communicate to get in..."},"70342":{"name":"Managing Across Cultures","number":"70342","units":9,"blurb":"This course is designed for students who expect to do business in other countries or work with pe..."},"70343":{"name":"Interpersonal Communication","number":"70343","units":9,"blurb":"This course examines various types of interpersonal communication usually found in business situa..."},"70345":{"name":"Business Presentations","number":"70345","units":9,"blurb":"In this course, students prepare, present, discuss, and critique the different oral presentations..."},"70350":{"name":"Acting for Business","number":"70350","units":9,"blurb":"Acting for Business (formerly entitled \"Business Acting\") is an opportunity to unlock your potent..."},"70364":{"name":"Business Law","number":"70364","units":9,"blurb":"The external political, social and legal environment of the firm and its managers. Legal and regu..."},"70365":{"name":"International Trade and International Law","number":"70365","units":9,"blurb":"The course discusses the international legal system and laws that affect international trade. It ..."},"70366":{"name":"Intellectual Property and E-Commerce","number":"70366","units":6,"blurb":"The course is intended to instruct students on the creation of the Internet and the World Wide We..."},"70371":{"name":"Operations Management","number":"70371","units":9,"blurb":"This course is an introduction to production and operations management that covers both manufactu..."},"70376":{"name":"Energy Systems","number":"70376","units":9,"blurb":"This course will provide students with an understanding of the systems and markets that provide e..."},"70381":{"name":"Marketing I","number":"70381","units":9,"blurb":"An introduction to the nature and fundamentals of marketing and consumer behavior. Topics include..."},"70385":{"name":"Consumer Behavior","number":"70385","units":9,"blurb":"Marketing, in particular, begins and ends with the consumer from determining consumer needs to en..."},"70391":{"name":"Finance","number":"70391","units":9,"blurb":"Firms create value by making good investment decisions. Finance is the field of management scienc..."},"70395":{"name":"Funding Entrepreneurial Ventures","number":"70395","units":9,"blurb":"So you want to do a startup and you know that you need funding. There are multiple ways to fund a..."},"70398":{"name":"International Finance","number":"70398","units":9,"blurb":"International Finance is an elective course designed to give students the opportunity to analyze ..."},"70401":{"name":"Management Game","number":"70401","units":12,"blurb":"This course is designed to integrate the managerial concepts and techniques studied earlier in th..."},"70414":{"name":"Entrepreneurship for Engineers","number":"70414","units":9,"blurb":"This introductory course in entrepreneurship primarily targets non-business students and assumes ..."},"70415":{"name":"Introduction to Entrepreneurship","number":"70415","units":9,"blurb":"This course is designed primarily to provide an overview of entrepreneurship, develop an entrepre..."},"70416":{"name":"New Venture Creation","number":"70416","units":9,"blurb":"This course exposes students to the nuances of financing new ventures, getting them started legal..."},"70420":{"name":"Entrepreneurship for Scientists","number":"70420","units":9,"blurb":"Entrepreneurship for Scientists is an introductory course in entrepreneurship. The course primari..."},"70421":{"name":"Entrepreneurship for Computer Scientists","number":"70421","units":9,"blurb":"This course is primarily for non-business school students; it includes most of Introduction to En..."},"70422":{"name":"Managerial Accounting","number":"70422","units":9,"blurb":"The purpose of this course is to provide an introduction to the measurement and allocation of cos..."},"70423":{"name":"Technology-Based Entrepreneurship","number":"70423","units":9,"blurb":"This course is offered only at Carnegie Mellon's campus in Qatar. This course is designed as an i..."},"70424":{"name":"Corporate Financial Reporting","number":"70424","units":9,"blurb":"This course is designed to strengthen your ability to correctly interpret financial statements an..."},"70425":{"name":"Entrepreneurship for the Creative Industries","number":"70425","units":9,"blurb":"This is an introductory course designed primarily for undergraduates in the College of Fine Arts ..."},"70428":{"name":"Financial Statement Analysis","number":"70428","units":9,"blurb":"This course is about fundamental analysis using financial statements. We develop and apply techno..."},"70430":{"name":"International Management","number":"70430","units":9,"blurb":"This course uses the case method to examine the strategic and operational issues in management pr..."},"70437":{"name":"Organizational Learning and Strategic Management","number":"70437","units":9,"blurb":"Managing knowledge effectively is key to the performance and competitiveness of both entrepreneur..."},"70438":{"name":"Commercialization and Innovation","number":"70438","units":9,"blurb":"This course targets innovators and entrepreneurs who are interested in introducing innovations to..."},"70440":{"name":"Corporate Strategy","number":"70440","units":9,"blurb":"This course is designed to provide the student with a general management perspective and an under..."},"70442":{"name":"Principles of Game Theory for Business","number":"70442","units":6,"blurb":"Game theory is the formal study of strategic interaction and aims to help us understand situation..."},"70443":{"name":"Digital Marketing and Social Media Strategy","number":"70443","units":9,"blurb":"This course explores issues related to digital and social media marketing. This is a hands-on cla..."},"70449":{"name":"Social, Economic and Information Networks","number":"70449","units":9,"blurb":"Interaction is a fundamental part of social science: firms market products to consumers, people s..."},"70451":{"name":"Management Information Systems","number":"70451","units":9,"blurb":"The objectives of this course are to provide students with basic knowledge of the technology used..."},"70453":{"name":"Business Technology for Consulting","number":"70453","units":9,"blurb":"This course is designed to provide students with a basic understanding of how to develop and impl..."},"70455":{"name":"Modern Data Management","number":"70455","units":9,"blurb":"The objective of this course is to learn how to manage data for making critical business decision..."},"70460":{"name":"Mathematical Models for Consulting","number":"70460","units":9,"blurb":"This course covers a wide variety of mathematical models and techniques used by consultants and w..."},"70462":{"name":"Stochastic Modeling and Simulations","number":"70462","units":9,"blurb":"This hands-on course on computer simulation of business, service, and manufacturing systems (that..."},"70465":{"name":"Technology Strategy","number":"70465","units":9,"blurb":"This course is about business strategy for technology-intensive industries. Examples of such indu..."},"70471":{"name":"Supply Chain Management","number":"70471","units":9,"blurb":"During the course we will discuss the basic issues of Supply Chain Management like inventory mana..."},"70474":{"name":"Quality Management and Productivity","number":"70474","units":9,"blurb":"We will first compare and contrast the ideas of various quality \"gurus,\" examining ways to define..."},"70480":{"name":"International Marketing","number":"70480","units":9,"blurb":"This course is designed to provide students with a basic understanding of global marketing opport..."},"70481":{"name":"Marketing Research","number":"70481","units":9,"blurb":"The purpose of this course is to teach multiple research techniques used in marketing. This cours..."},"70482":{"name":"Pricing Strategy","number":"70482","units":9,"blurb":"Pricing is a critical marketing decision which enables a firm to translate customer value into pr..."},"70485":{"name":"Product and Brand Management","number":"70485","units":9,"blurb":"In this course you will progress through a series of roles, from product assistant to group produ..."},"70488":{"name":"Interactive Marketing","number":"70488","units":6,"blurb":"In this course we analyze what happens to marketing practice when cheap and powerful computers an..."},"70492":{"name":"Investment  Analysis","number":"70492","units":9,"blurb":"Students build a strong foundation in Modern Portfolio Theory as well as equilibrium and no arbit..."},"70494":{"name":"Financial Markets: Anomalies and Efficiencies","number":"70494","units":9,"blurb":"This course is ONLY offered at Carnegie Mellon in Qatar. The purpose of this elective is to offer..."},"70495":{"name":"Corporate Finance","number":"70495","units":9,"blurb":"Students develop an advanced financial perspective on how firms make investment, financing, and m..."},"70496":{"name":"Entrepreneurial Finance: Valuation & Deal","number":"70496","units":6,"blurb":"This case-based course studies the financing and valuation of high-growth entrepreneurial firms i..."},"70497":{"name":"Derivative Securities","number":"70497","units":9,"blurb":"In this course students will learn how to price derivative securities such as futures, options, v..."},"70499":{"name":"Internship","number":"70499","units":0,"blurb":"BA students are strongly encouraged to undertake internships. Students doing an internship of an ..."},"70500":{"name":"Honors Thesis I","number":"70500","units":0,"blurb":"Business students with outstanding academic records may undertake an Honors Thesis. The topic is ..."},"70501":{"name":"Honor Thesis II","number":"70501","units":0,"blurb":"Business students with outstanding academic records may undertake an Honors Thesis. The topic is ..."},"70502":{"name":"Independent Study in Management","number":"70502","units":0,"blurb":"Students with a special interest in Management/Production not covered by a formal Business course..."},"70503":{"name":"Independent Study in Marketing","number":"70503","units":0,"blurb":"Students with a special interest in Marketing not covered by a formal Business course may develop..."},"70504":{"name":"Independent Study in Organizational Behavior","number":"70504","units":0,"blurb":"Students with a special interest in Organizational Behavior not covered by a formal Business cour..."},"70505":{"name":"Independent Study in Finance","number":"70505","units":0,"blurb":"Students with a special interest in Finance not covered by a formal Business course may develop a..."},"70506":{"name":"Independent Study Management Information Systems","number":"70506","units":0,"blurb":"Students with a special interest in Management Information Systems not covered by a formal Busine..."},"70507":{"name":"Independent Study in Business Communications","number":"70507","units":0,"blurb":"Students with a special interest in Business Communications not covered by a formal Business cour..."},"70508":{"name":"Independent Study in International Management","number":"70508","units":0,"blurb":"Missing Course Description - please contact the teaching department."},"70514":{"name":"Independent Study: Graphic Media Management","number":"70514","units":0,"blurb":"This course enables students to independently pursue special topics related to graphic media. Enr..."},"73050":{"name":"Study Abroad","number":"73050","units":0,"blurb":"This course number is a place holder and assigned to economics students studying abroad by CMU's ..."},"73051":{"name":"Study Abroad","number":"73051","units":0,"blurb":"This course number is a place holder and assigned to economics students studying abroad by CMU's ..."},"73100":{"name":"Principles of Economics","number":"73100","units":9,"blurb":"Literally, an introduction to economic principles, the goal of this course is to give students an..."},"73101":{"name":"Freshman Seminar","number":"73101","units":9,"blurb":"A topics-based course for first-year students. This course is not a supplement nor a replacement ..."},"73111":{"name":"Internship I","number":"73111","units":0,"blurb":"By permission of the Undergraduate Economics Program."},"73112":{"name":"Internship II","number":"73112","units":3,"blurb":"By permission of the Undergraduate Economics Program."},"73148":{"name":"Environmental Economics","number":"73148","units":9,"blurb":"A course for non-majors which explores the interplay between economics and environmental issues. ..."},"73155":{"name":"Legonomics: Building Blocks of Economic Analysis","number":"73155","units":9,"blurb":"The overall theme of the course is how to use data and measurement to form models for economic an..."},"73230":{"name":"Intermediate Microeconomics","number":"73230","units":9,"blurb":"This course is a calculus-based study of microeconomics. Topics in partial equilibrium analysis i..."},"73240":{"name":"Intermediate Macroeconomics","number":"73240","units":9,"blurb":"Through macroeconomic models built upon microeconomic foundations, insights are developed into ec..."},"73270":{"name":"Writing for Economists","number":"73270","units":9,"blurb":"A writing course specifically designed for third-year Economics majors and additional majors. Stu..."},"73310":{"name":"Evolution of Economic Ideas and Analysis","number":"73310","units":9,"blurb":"This course will be organized around the study of several central topics in the development of ec..."},"73315":{"name":"Market Design","number":"73315","units":9,"blurb":"The market design class is going to cover three main subjects: matching, auctions, and, time allo..."},"73328":{"name":"Health Economics","number":"73328","units":12,"blurb":"This course will teach the student to use economic analysis to understand critical issues in heal..."},"73338":{"name":"Financial Crises and Risk","number":"73338","units":9,"blurb":"This course provides an in-depth examination of the causes of financial crises as well as what go..."},"73341":{"name":"Within the Firm: Managing through Incentive","number":"73341","units":9,"blurb":"We are living in an exciting age of information and knowledge when inspiring employees with a fir..."},"73347":{"name":"Game Theory for Economists","number":"73347","units":9,"blurb":"An introduction to the theory of non-cooperative games with an emphasis on economic applications...."},"73348":{"name":"Behavioral Economics","number":"73348","units":9,"blurb":"This course introduces students to behavioral economics which is a subfield of economics that inc..."},"73352":{"name":"Public Economics","number":"73352","units":9,"blurb":"In this course, students analyze the role of governments in market economies and their impact on ..."},"73353":{"name":"Economic Foundations of Regulation with Applications to Financial Markets","number":"73353","units":9,"blurb":"The financial crisis has focused attention on the role of regulation for our financial system and..."},"73359":{"name":"Benefit-Cost Analysis","number":"73359","units":9,"blurb":"The evaluation of public private sector projects. The theory of benefit-cost analysis and related..."},"73363":{"name":"Econometrics","number":"73363","units":9,"blurb":"This course takes as its starting point ordinary-least-squares estimation and the linear regressi..."},"73365":{"name":"Firms, Market Structures, and Strategy","number":"73365","units":9,"blurb":"This course is concerned with the economic analysis of industrial markets that are not perfectly ..."},"73375":{"name":"History of Money and Monetary Policy","number":"73375","units":9,"blurb":"This course will consider the evolution of monetary institutions and policies from 550 BC to the ..."},"73395":{"name":"Independent Study in Economics","number":"73395","units":0,"blurb":"The Independent Study course in economics allows the student to pursue his or her own research in..."},"73407":{"name":"Fundamentals of Statistical Modeling","number":"73407","units":9,"blurb":"This course provides a one-semester introduction to the theory of probability and mathematical st..."},"73408":{"name":"Law and Economics","number":"73408","units":9,"blurb":"This course will provide a broad overview of the scholarly field known as \"law and economics.\" Th..."},"73421":{"name":"Emerging Markets","number":"73421","units":9,"blurb":"The aim of the course is to understand the economic, political and institutional forces that spur..."},"73433":{"name":"Environmental Policy and Economics","number":"73433","units":9,"blurb":"The primary objective of this course is to encourage students to apply the tools of microeconomic..."},"73449":{"name":"Social, Economic and Information Networks","number":"73449","units":9,"blurb":"Interaction is a fundamental part of social science: firms market products to consumers, people s..."},"73450":{"name":"Economics Colloquium","number":"73450","units":1,"blurb":"Economics majors meet for one hour each week to hear discussions on current research by faculty o..."},"73465":{"name":"Technology Strategy","number":"73465","units":9,"blurb":"This course is about business strategy for technology-intensive industries. Examples of such indu..."},"73469":{"name":"Global Electronic Markets: Economics and the Internet","number":"73469","units":9,"blurb":"The information revolution brought about by the Internet is having a dramatic impact on the organ..."},"73495":{"name":"Advanced Independent Study in Economics","number":"73495","units":0,"blurb":"The Independent Study course in economics allows the student to pursue his or her own research in..."},"73497":{"name":"Senior Project","number":"73497","units":9,"blurb":"A fourth-year project course, open only to Economics primary and additional majors with Senior st..."},"73500":{"name":"Tepper College Honors Thesis I","number":"73500","units":0,"blurb":"Economics majors with outstanding academic records and intellectual promise will be given the opp..."},"73501":{"name":"Tepper College Honors Thesis II","number":"73501","units":0,"blurb":"Economics majors with outstanding academic records and intellectual promise will be given the opp..."},"76100":{"name":"Reading and Writing in an Academic Context","number":"76100","units":9,"blurb":"76100 is an academic reading and writing course for multilingual students, especially those who a..."},"76101":{"name":"Interpretation and Argument","number":"76101","units":9,"blurb":"76101 introduces first-year students to an advanced, inductive process for writing an argument fr..."},"76143":{"name":"Freshman Seminar: Creative Writing Matters","number":"76143","units":9,"blurb":"This course will explore at least two of the meanings of the word \"matters\" as in \"is of importan..."},"76203":{"name":"Pirates and Prostitutes in the 18th Century","number":"76203","units":9,"blurb":"In this course, we discuss how sailors, pirates, and prostitutes changed the modern world. Blackb..."},"76221":{"name":"Books You Should Have Read By Now","number":"76221","units":9,"blurb":"It may seem more and more difficult to get a good classical, liberal education these days. The de..."},"76232":{"name":"Introduction to African American Literature","number":"76232","units":9,"blurb":"The purpose of this course is to introduce you to diverse examples of literary, cinematic and mus..."},"76239":{"name":"Introduction to Film Studies","number":"76239","units":9,"blurb":"This course is an introduction to the history, technology, aesthetics and ideology of film. The m..."},"76241":{"name":"Introduction to Gender Studies","number":"76241","units":9,"blurb":"What is gender? What is sex? And how do we \"perform\" these identities in everyday life? Covering ..."},"76245":{"name":"Shakespeare: Tragedies and Histories","number":"76245","units":9,"blurb":"Would coming to CMU and not studying Shakespeare seem like going to the Sistine Chapel and not lo..."},"76247":{"name":"Shakespeare: Comedies and Romances","number":"76247","units":9,"blurb":"Would coming to CMU and not studying Shakespeare seem like going to the Sistine Chapel and not lo..."},"76260":{"name":"Survey of Forms: Fiction","number":"76260","units":9,"blurb":"This is an introduction to the reading and writing of fiction designed as the first in a sequence..."},"76265":{"name":"Survey of Forms: Poetry","number":"76265","units":9,"blurb":"This course is designed to familiarize students with the elements of poetic craft through activel..."},"76269":{"name":"Survey of Forms: Screenwriting","number":"76269","units":9,"blurb":"It is not so difficult to learn the format or even to master the style of the screenplay-the chal..."},"76270":{"name":"Writing for the Professions","number":"76270","units":9,"blurb":"Writing in the Professions is a writing course specifically designed for juniors and seniors in a..."},"76271":{"name":"Introduction to Professional and Technical Writing","number":"76271","units":9,"blurb":"Introduction to Professional and Technical Writing is designed specifically for declared majors i..."},"76273":{"name":"Presenting a Public Self","number":"76273","units":9,"blurb":"Presenting your work and ambitions in public forums is a skill that you will be expected to demon..."},"76294":{"name":"Interpretive Practices","number":"76294","units":9,"blurb":"This course introduces students to theories and practices of textual interpretation. Combining th..."},"76295":{"name":"Topics in Russian Language and Culture","number":"76295","units":9,"blurb":"Baba Yaga, Koschei the Immortal, the Firebird, Ivan the Tsarevich: Russian fairy tales brim over ..."},"76300":{"name":"Professional Seminar","number":"76300","units":3,"blurb":"This weekly, 3-unit seminar is designed to give professional writing majors an overview of possib..."},"76301":{"name":"Internship","number":"76301","units":0,"blurb":"This course is designed to help you explore possible writing-related careers as you gain workplac..."},"76302":{"name":"Global Communication Center Practicum","number":"76302","units":9,"blurb":"This practicum prepares students to tutor and conduct research in a communication center serving ..."},"76306":{"name":"Editing and Publishing","number":"76306","units":0,"blurb":"Note: Registration in this course is by permission only. Students must contact Prof. Costanzo dir..."},"76313":{"name":"19th Century British: Victorian Sensations","number":"76313","units":9,"blurb":"Today if something causes a \"sensation,\" it gives us a rush of excitement, a public uproar, a sca..."},"76317":{"name":"Contemporary American Fiction","number":"76317","units":9,"blurb":"This course will overview the vast and varied field of contemporary American fiction. Starting wi..."},"76319":{"name":"Environmental Rhetoric","number":"76319","units":9,"blurb":"How people think and talk about the environment matters; it reveals what they value and shapes wh..."},"76321":{"name":"History of the British Novel","number":"76321","units":9,"blurb":"Topics vary by semester. Consult the course descriptions provided by the department for current o..."},"76324":{"name":"Topics in Rhetoric:  Rhetoric and Leadership","number":"76324","units":9,"blurb":"In this course, we will study communication strategies of effective leaders — people who seek to ..."},"76327":{"name":"Influential Women Writers","number":"76327","units":9,"blurb":"Since long before the first autobiographical text in the English language?Margery Kempe?s?women w..."},"76334":{"name":"Literature of Wall Street","number":"76334","units":9,"blurb":"It started with a financial panic that closed the New York Stock Exchange for ten days. One quart..."},"76339":{"name":"Topics in Film Studies","number":"76339","units":9,"blurb":"In 1920, perhaps for the first time, youth began to be identified as having a distinct subculture..."},"76341":{"name":"Gender and Sexuality in Performance","number":"76341","units":9,"blurb":"\"Performance\" describes a wide range of practices, from the everyday to the artistic. Gender and ..."},"76349":{"name":"20th Century American: The Lost Generation","number":"76349","units":9,"blurb":"Before the Beat Generation there was the Lost Generation. Both moments of literary history have a..."},"76350":{"name":"History of Critical Ideas: Reading and Spectatorship","number":"76350","units":9,"blurb":"Who is the reader of a text, the viewer of a painting or film, or the spectator of a performance?..."},"76351":{"name":"Rhetorical Invention","number":"76351","units":9,"blurb":"Rhetorical invention refers to the discursive process of inquiry, discovery, and problem solving,..."},"76355":{"name":"Leadership, Dialogue, and Change","number":"76355","units":9,"blurb":"Leadership is often associated with the exercise of institutional authority or individual power. ..."},"76359":{"name":"Planning and Testing Documents","number":"76359","units":9,"blurb":"In this course, you will deepen your mastery of the following research skills associated with pla..."},"76360":{"name":"Literary Journalism Workshop","number":"76360","units":9,"blurb":"Literary Journalism is non-fiction writing about the people and places in the world that might be..."},"76362":{"name":"Reading in Forms: Non-Fiction","number":"76362","units":9,"blurb":"Whatever one's opinion of boxing, it endures - as a sport, and as a story that continues to grip ..."},"76364":{"name":"Reading in Forms: Fiction","number":"76364","units":9,"blurb":"While their names are often unknown, the voice of modern television is dominated by those writers..."},"76365":{"name":"Beginning Poetry Workshop","number":"76365","units":9,"blurb":"In this course students will read and discuss the work of contemporary poets, attend outside read..."},"76366":{"name":"Beginning Fiction Workshop","number":"76366","units":9,"blurb":"Fall 2015: While science fiction, fantasy, and horror writing have often been marginalized or rej..."},"76372":{"name":"News Writing","number":"76372","units":9,"blurb":"In this introductory class, taught by a working journalist, students will learn the fundamental s..."},"76373":{"name":"Argument","number":"76373","units":9,"blurb":"This course is an introduction to the theory and practice of argument. The course begins with an ..."},"76375":{"name":"Magazine Writing","number":"76375","units":9,"blurb":"In this course, we will read substantial, ambitious articles from a variety of magazines, conside..."},"76378":{"name":"Literacy: Educational Theory and Community Practice","number":"76378","units":9,"blurb":"Literacy has been called the engine of economic development, the road to social advancement, and ..."},"76385":{"name":"Introduction to Discourse Analysis","number":"76385","units":9,"blurb":"Discourse analysis places a primary focus on how things are said; and this close attention to the..."},"76386":{"name":"Language & Culture","number":"76386","units":9,"blurb":"This course is an introduction into the scholarship surrounding the nature of language and the qu..."},"76389":{"name":"Rhetorical Grammar","number":"76389","units":9,"blurb":"The primary objective of this course is to provide professional writers with a framework for iden..."},"76390":{"name":"Style","number":"76390","units":9,"blurb":"In classical rhetoric, \"style\" is a term that refers not to what we write but how we write. Yet c..."},"76391":{"name":"Document & Information Design","number":"76391","units":12,"blurb":"Today, many professionals are responsible for the visual design of documents. This course provide..."},"76394":{"name":"Research in English","number":"76394","units":9,"blurb":"In this course we will explore methods of researching, writing, and presenting original work in E..."},"76395":{"name":"Science Writing","number":"76395","units":9,"blurb":"This course will teach students how to write clear, well-organized, compelling articles about sci..."},"76396":{"name":"Non-Profit Advocacy: Genres, Methods, and Issues","number":"76396","units":9,"blurb":"Given the changes brought on by the information age, non-profit organizations, like all organizat..."},"76414":{"name":"Politics, Media, and Romantic Literature 1789-1830","number":"76414","units":9,"blurb":"The Romantic period in Britain was a volatile era of political and literary revolutions - but als..."},"76420":{"name":"Process of Reading and Writing","number":"76420","units":9,"blurb":"This course is an introduction to the thinking, meaning-making process that underlies reading and..."},"76428":{"name":"Visual Verbal Communication","number":"76428","units":9,"blurb":"People create a wide range of communicative artifacts that integrates visual and verbal elements-..."},"76430":{"name":"Arthurian Romance and Its Modern Legacy","number":"76430","units":9,"blurb":"Arthurian tales have been told and retold in Anglo-American culture for centuries - they have bee..."},"76439":{"name":"Seminar in Film and Media Studies","number":"76439","units":9,"blurb":"In the late 1700s moral crusaders were worried about the latest media scandal: the surge in women..."},"76445":{"name":"John Milton: Poetry, Paradise, and Revolution","number":"76445","units":9,"blurb":"Although censored and reviled by many in his own day, John Milton (1608-1674), author of Paradise..."},"76450":{"name":"Literary and Cultural Theory: Law, Culture, and the Humanities","number":"76450","units":9,"blurb":"\"I'm not a lawyer, but...\" How many times have you heard this disclaimer, closely followed by a l..."},"76453":{"name":"Literature of Empire","number":"76453","units":9,"blurb":"Critic David Attwell once characterized a novel about empire as focused on \"that moment of suspen..."},"76460":{"name":"Beginning Fiction Workshop","number":"76460","units":9,"blurb":"This course builds upon survey or introduction courses to exercise the writer's craft in fiction...."},"76462":{"name":"Advanced Fiction Workshop","number":"76462","units":9,"blurb":"In this class we will work on how narratives are told. Using masterworks to help guide our writin..."},"76465":{"name":"Advanced Poetry Workshop","number":"76465","units":9,"blurb":"Fall 2015: The Poet in America. This course will combine reading and discussion of work written b..."},"76469":{"name":"Advanced Screenwriting Workshop","number":"76469","units":9,"blurb":"This team-taught course is designed for students interested in writing for one-hour dramatic tele..."},"76472":{"name":"Topics in Journalism: Multimedia Storytelling in a Digital Age","number":"76472","units":9,"blurb":"This course explores the craft of journalism in the context of the history, traditions and glory ..."},"76474":{"name":"Software Documentation","number":"76474","units":9,"blurb":"This course teaches best practices for creating software documentation (user assistance) for inte..."},"76475":{"name":"Legal Rhetoric in a Global World","number":"76475","units":9,"blurb":"Although rhetoric and law have long been closely associated, the modern professionalization of la..."},"76476":{"name":"Rhetoric of Science","number":"76476","units":9,"blurb":"Rhetoricians study how strategic use of language and argument contribute to the development of sc..."},"76481":{"name":"Writing for Multimedia","number":"76481","units":12,"blurb":"There is increasing demand for professional/technical writers who understand multimedia and it?s ..."},"76484":{"name":"Discourse Analysis","number":"76484","units":9,"blurb":"Discourse is a focus of study in most of the humanities and social sciences, and discourse analys..."},"76487":{"name":"Web Design","number":"76487","units":12,"blurb":"As the Internet has increasingly become an integral part of professional and technical communicat..."},"76491":{"name":"Rhetorical Analysis","number":"76491","units":9,"blurb":"Students in this course will learn various approaches to analyzing discourse artifacts from a rhe..."},"76492":{"name":"Rhetoric of Public Policy","number":"76492","units":9,"blurb":"The field of public policy focuses on the study of how to avoid or resolve social problems and ac..."},"76494":{"name":"Healthcare Communications","number":"76494","units":9,"blurb":"Healthcare Communications is a writing-intensive course designed for students interested in how h..."},"76511":{"name":"Senior Project","number":"76511","units":9,"blurb":"Seniors in all four majors within the English Department may, with faculty permission and sponsor..."},"76786":{"name":"Language and Culture","number":"76786","units":0,"blurb":"This course is an introduction into the scholarship surrounding the nature of language and the qu..."},"76854":{"name":"Foundations of Cultural Studies","number":"76854","units":12,"blurb":"This course is the first part of a year-long seminar where students will study some of the more c..."},"76881":{"name":"Writing for the Multimedia","number":"76881","units":0,"blurb":"There is increasing demand for professional/technical writers who understand multimedia and it?s ..."},"76891":{"name":"Rhetorical Analysis","number":"76891","units":0,"blurb":"Students in this course will learn various approaches to analyzing discourse artifacts from a rhe..."},"79104":{"name":"Global Histories","number":"79104","units":9,"blurb":"Human activity transcends political, geographical, and cultural boundaries. From wars to social m..."},"79167":{"name":"Freshman Seminar: Issues in American Environmental History","number":"79167","units":9,"blurb":"This seminar will focus on major issues in the evolution of the American environment. Much of Ame..."},"79168":{"name":"Freshman Seminar: The Juvenile Court: Past and Present","number":"79168","units":9,"blurb":"This course will track the development of an American institution, the juvenile court, from its l..."},"79178":{"name":"Freshman Seminar: Body Politics: Women and Health in America","number":"79178","units":9,"blurb":"Women's bodies have been the sites of long-standing, and sometimes deadly, political battles. Thi..."},"79198":{"name":"Research Training History","number":"79198","units":9,"blurb":"This course is part of a set of 100-level courses offered by Dietrich College departments as inde..."},"79200":{"name":"Introduction to Historical Research","number":"79200","units":9,"blurb":"Introduction to Historical Research acquaints students with how historians practice their craft i..."},"79201":{"name":"Introduction to Anthropology","number":"79201","units":9,"blurb":"Cultural anthropologists \"make the strange familiar and the familiar strange,\" attempting to unde..."},"79202":{"name":"Flesh and Spirit: Early Modern Europe, 14001750","number":"79202","units":9,"blurb":"This course examines European history from the Black Death to the French Revolution, a period kno..."},"79210":{"name":"Identity, Nationhood, and State","number":"79210","units":9,"blurb":"This course is ONLY offered at Carnegie Mellon in Qatar. This broad introductory course to genera..."},"79211":{"name":"East Asia in the World, 1600-Present","number":"79211","units":9,"blurb":"The aim of the course is to provide a broad understanding of the place of East Asia in the world,..."},"79217":{"name":"The War in Vietnam","number":"79217","units":9,"blurb":"The Vietnam War, the first war to be televised, is one of the most controversial events in the po..."},"79218":{"name":"United States and the World","number":"79218","units":9,"blurb":"Combining lecture and class discussion of primary source documents, this course will examine the ..."},"79223":{"name":"Mexico: From the Aztec Empire to the Drug War","number":"79223","units":9,"blurb":"This course provides a survey of Mexican history and culture over a variety of periods, from the ..."},"79226":{"name":"African History: Earliest Times to 1780","number":"79226","units":9,"blurb":"A beginning point for this course will be the question: how do historians reconstruct history whe..."},"79227":{"name":"African History: Height of Trans-Atlantic Slave Trade to the End of Apartheid","number":"79227","units":9,"blurb":"The course is designed to give students an understanding and appreciation of African history and ..."},"79229":{"name":"Origins of the Arab-Israeli Conflict, 1880-1948","number":"79229","units":9,"blurb":"This course considers the historical origins of the contemporary Arab-Israeli conflict, beginning..."},"79231":{"name":"American Foreign Policy: 1945-Present","number":"79231","units":9,"blurb":"This course provides an introduction to the study of U.S. foreign policy. Its main focus will be ..."},"79237":{"name":"Comparative Slavery","number":"79237","units":9,"blurb":"The past few years have seen a proliferation of major motion pictures about enslavement, particul..."},"79240":{"name":"The Development of American Culture","number":"79240","units":9,"blurb":"This is an introductory survey of American history from colonial times to the present. The course..."},"79243":{"name":"The Civil War in American Memory","number":"79243","units":6,"blurb":"The American Civil War remains among the most cherished and fought over stories in American histo..."},"79245":{"name":"Capitalism and Individualism in American Culture","number":"79245","units":9,"blurb":"This small discussion course traces ideas about individualism and capitalism in the U.S., from co..."},"79249":{"name":"20th Century U.S. History","number":"79249","units":9,"blurb":"The twentieth century marked the rise of the United States as a global power. By the end of the c..."},"79253":{"name":"American Massacres in History and Memory","number":"79253","units":6,"blurb":"In this course we will investigate 19th century massacres in the American West, examining the cau..."},"79255":{"name":"Irish History","number":"79255","units":6,"blurb":"This course surveys Irish history from the earliest human settlements until the present day, with..."},"79257":{"name":"Germany and the Second World War","number":"79257","units":9,"blurb":"This course examines the Second World War from the perspective of the country that was central to..."},"79262":{"name":"Modern China","number":"79262","units":9,"blurb":"This course is an introduction to major themes in twentieth-century Chinese history, including th..."},"79264":{"name":"Tibet in History and Imagination","number":"79264","units":9,"blurb":"This course is an introduction to the history and culture of Tibet and the Tibetan Plateau. For a..."},"79265":{"name":"Russian History: From the First to the Last Tsar","number":"79265","units":9,"blurb":"This course covers a broad sweep of Russian history beginning with the first settlements of triba..."},"79266":{"name":"Russian  History: From Communism to Capitalism","number":"79266","units":9,"blurb":"This course covers a broad sweep of Russian history from the socialist revolution in 1917 to the ..."},"79271":{"name":"Russian Studies Topics","number":"79271","units":6,"blurb":"A1- Literary Culture of 19th Century Russia The purpose of the course is to give students an intr..."},"79275":{"name":"Introduction to Global Studies","number":"79275","units":9,"blurb":"\"Globalization\" is a familiar term that is often used to invoke the idea that places around the w..."},"79276":{"name":"Beyond the Border","number":"79276","units":6,"blurb":"In this course we will consider the place of the border in the making of the Americas. Our explor..."},"79281":{"name":"Introduction to Religion","number":"79281","units":9,"blurb":"This course introduces students to methods of inquiry used in the academic study of religion and ..."},"79282":{"name":"Europe and the World since 1800","number":"79282","units":9,"blurb":"This course will introduce students to topics of historical and contemporary relevance in Europea..."},"79288":{"name":"Bananas, Baseball, and Borders: Latin America and the United States","number":"79288","units":9,"blurb":"This course examines the tumultuous and paradoxical relationship between Latin America and the Un..."},"79289":{"name":"Animal Planet: An Environmental History of People and Animals","number":"79289","units":6,"blurb":"Why do modern societies go to great lengths to protect some animals and slaughter others? How do ..."},"79293":{"name":"Inward Odyssey","number":"79293","units":9,"blurb":"This course is ONLY offered at Carnegie Mellon in Qatar. Inward Odyssey will explore world histor..."},"79294":{"name":"Islam on the Main Street in the West since the 18th Century","number":"79294","units":9,"blurb":"This course is ONLY offered at Carnegie Mellon in Qatar. This introductory course to the humaniti..."},"79299":{"name":"Trafficking Persons: Children in a Global Context","number":"79299","units":9,"blurb":"Many items circulate around the world, including persons. This course will examine the movement o..."},"79300":{"name":"History of American Public Policy","number":"79300","units":9,"blurb":"This course will describe and analyze aspects of the development of public policy in the United S..."},"79301":{"name":"History of Surveillance: From the Plantation to Edward Snowden","number":"79301","units":6,"blurb":"Edward Snowden's revelations about the extent of the U.S. National Security Agency's data collect..."},"79302":{"name":"Drone Warfare: Ethics, Law, Politics, History, and Strategy","number":"79302","units":6,"blurb":"Unmanned aerial vehicles (commonly referred to as drones) have become a central feature of the Un..."},"79303":{"name":"Pittsburgh and the Transformation of Modern Urban America","number":"79303","units":6,"blurb":"This course will focus on the transformations, both negative and positive, of the city of Pittsbu..."},"79307":{"name":"Religion and Politics in the Middle East","number":"79307","units":9,"blurb":"This course looks at the historic relationship among Islam, Judaism and Christianity and what the..."},"79310":{"name":"From Al Qaeda to ISIS: U.S. and European Anti-Terrorism Policies, 9/11-Present","number":"79310","units":9,"blurb":"The brutal regime that ISIS has established in parts of Syria and Iraq, and the recent terrorist ..."},"79312":{"name":"International Human Rights Institutions in Theory and Practice","number":"79312","units":6,"blurb":"What role do international human rights institutions play in the protection and promotion of huma..."},"79316":{"name":"Photography, the First 100 Years, 1839-1939","number":"79316","units":9,"blurb":"Photography was announced to the world almost simultaneously in 1839, first in France and then a ..."},"79318":{"name":"Sustainable Social Change: History and Practice","number":"79318","units":6,"blurb":"If you wanted to change the world, who would you ask for guidance? Mahatma Gandhi, Martin Luther ..."},"79319":{"name":"India through Film","number":"79319","units":6,"blurb":"Bollywood films attract hundreds of millions of viewers, not just in India but throughout the wor..."},"79320":{"name":"Women, Politics, and Protest","number":"79320","units":9,"blurb":"This course examines the history of women's rights agitation in the United States from the early ..."},"79323":{"name":"Family, Gender, and Sexuality in European History, 5001800","number":"79323","units":9,"blurb":"The medieval and early modern periods witnessed a transformation in the cultural and social under..."},"79324":{"name":"Adolescence in the 20th and 21st Centuries","number":"79324","units":6,"blurb":"This mini-course examines the changing pathways to adulthood over the past century, with particul..."},"79325":{"name":"U.S. Gay and Lesbian History","number":"79325","units":6,"blurb":"US Gay and Lesbian History offers an overview of the changing context and circumstances of sexual..."},"79328":{"name":"Photographers and Photography Since World War II","number":"79328","units":9,"blurb":"Invented in 1839, photography was a form of visual expression that immediately attracted a large ..."},"79331":{"name":"Body Politics: Women and Health in America","number":"79331","units":9,"blurb":"Women's bodies have been the sites of long-standing, and sometimes deadly, political battles. Thi..."},"79332":{"name":"Medical Anthropology","number":"79332","units":9,"blurb":"This course will explore the ways in which different cultures conceptualize the body and its rela..."},"79338":{"name":"History of Education in America","number":"79338","units":9,"blurb":"Americans have long understood schools both as mechanisms for inculcating communal values and as ..."},"79341":{"name":"The Cold War in Documents and Film","number":"79341","units":9,"blurb":"This course is based on use of historical documents and films to study problems that reshaped the..."},"79342":{"name":"Introduction to Science and Technology Studies","number":"79342","units":9,"blurb":"This course provides an introduction to Science and Technology Studies, a vibrant interdisciplina..."},"79345":{"name":"The Roots of Rock and Roll","number":"79345","units":9,"blurb":"This course is about open source, collaborative innovation and the impact of social and technolog..."},"79350":{"name":"Early Christianity","number":"79350","units":9,"blurb":"In this course we examine the origins of Christianity. Although we deal with biblical as well as ..."},"79353":{"name":"Religious Identities and Religious Conflicts in 19th Century Europe","number":"79353","units":9,"blurb":"This course explores the place of religious identity and conflict in the history of European soci..."},"79354":{"name":"Energy & Climate: History, Science, Technology, and Policy in the US 17762076","number":"79354","units":9,"blurb":"This course provides CMU students with a historically grounded, technically informed, and policy-..."},"79355":{"name":"Who is a Citizen? The Politics and Cultures of Citizenship in Global Perspective","number":"79355","units":9,"blurb":"What does it mean to say that someone does (or does not) have rights of citizenship? How are idea..."},"79360":{"name":"Conspiracies, Spies, and Assassins in Revolutionary Europe","number":"79360","units":6,"blurb":"This course focuses on several conspiracies that dominated European thinking in the late 18th and..."},"79370":{"name":"Disasters in American History (2):Epidemics & Fires","number":"79370","units":6,"blurb":"This course investigates the historical roles played by people in creating the conditions for dis..."},"79374":{"name":"American Environmental History: Critical Issues","number":"79374","units":9,"blurb":"This course explores critical issues in the history of the American environment during the last t..."},"79376":{"name":"Doing Transnational History","number":"79376","units":9,"blurb":"This course has two broad learning objectives: introduce students to transnational and comparativ..."},"79377":{"name":"Food, Culture, and Power: A History of Eating","number":"79377","units":9,"blurb":"This course explores the globalization of food production and consumption in the modern world. We..."},"79380":{"name":"Ethnographic Methods","number":"79380","units":9,"blurb":"In this class, students will become familiar with the history, the use, and the problems attached..."},"79384":{"name":"Garbage Gone Global: Managing Waste in an Age of Mass Consumption","number":"79384","units":9,"blurb":"In this course, we will use readings and film to explore a variety of issues related to the produ..."},"79392":{"name":"History of Modern Warfare","number":"79392","units":9,"blurb":"This course examines the role of warfare in western society and history during the period of emer..."},"79395":{"name":"The Arts in Pittsburgh","number":"79395","units":9,"blurb":"This course will examine the arts in Pittsburgh, both historically and in the present. We will fo..."},"79396":{"name":"Music and Society in 19th and 20th Century Europe and the U.S.","number":"79396","units":9,"blurb":"This course will explore the interrelations between society and classical and popular music in th..."},"79400":{"name":"Advanced Seminar in Global Studies","number":"79400","units":12,"blurb":"This research seminar is the capstone course for Global Studies majors. The course is designed to..."},"79411":{"name":"Research on Great Islamic Issues According to the Early Sources","number":"79411","units":9,"blurb":"This course is ONLY offered at Carnegie Mellon in Qatar. The term Islam suggests centuries of his..."},"79420":{"name":"Historical Research Seminar","number":"79420","units":12,"blurb":"The purpose of this research seminar is to help you conceptualize, design, organize, and execute ..."},"79449":{"name":"EHPP Project Course","number":"79449","units":12,"blurb":"The Ethics, History and Public Policy Project Course is required for the Ethics, History and Publ..."},"79491":{"name":"Independent Study","number":"79491","units":0,"blurb":"An Independent Study is meant for students with a special interest in an area not covered by a fo..."},"79503":{"name":"Senior Thesis I","number":"79503","units":9,"blurb":"Seniors may write a thesis with permission of the Undergraduate Advisor and a designated faculty ..."},"79504":{"name":"Senior Thesis II","number":"79504","units":9,"blurb":"Seniors may continue their thesis project over a second semester with the permission of the Under..."},"79506":{"name":"Global Studies Internship","number":"79506","units":0,"blurb":"This course provides Global Studies majors with a chance to explore global connections in Pittsbu..."},"80100":{"name":"Introduction to Philosophy","number":"80100","units":9,"blurb":"In this introductory course we will explore three major areas of Philosophy: Ethics, Metaphysics,..."},"80105":{"name":"Freshman Seminar: Philosophy and The 100","number":"80105","units":9,"blurb":"Bellamy: \"Who we are and who we need to be to survive are two very different things.\" Philosopher..."},"80110":{"name":"Nature of Mathematical Reasoning","number":"80110","units":9,"blurb":"This course focuses on understanding the principles and problems at the root of mathematical reas..."},"80130":{"name":"Introduction to Ethics","number":"80130","units":9,"blurb":"As human beings, we frequently grapple with difficult moral questions. How ought I treat my frien..."},"80135":{"name":"Introduction to Political Philosophy","number":"80135","units":9,"blurb":"What obligation do we have, as citizens, to our government or community? What obligation does our..."},"80136":{"name":"Social Structure, Public Policy  & Ethics","number":"80136","units":9,"blurb":"The course will consider ethical questions that arise regarding social structure and public polic..."},"80150":{"name":"Nature of Reason","number":"80150","units":9,"blurb":"This course offers an intellectual history of philosophical views regarding the nature of human r..."},"80180":{"name":"Nature of Language","number":"80180","units":9,"blurb":"Language is used to talk about the world or to describe it, but how do we go about describing lan..."},"80210":{"name":"Logic and Proofs","number":"80210","units":9,"blurb":"This web-based course introduces students to central issues in logic and develops their ability f..."},"80211":{"name":"Logic and Mathematical Inquiry","number":"80211","units":9,"blurb":"Since ancient times, mathematical arguments have served as a paradigm for rational inquiry. This ..."},"80220":{"name":"Philosophy of Science","number":"80220","units":9,"blurb":"In this course, we will examine some historical case studies (e.g., the Copernican revolution in ..."},"80221":{"name":"Philosophy of Social Science","number":"80221","units":9,"blurb":"This course will explore various philosophical issues germane to social science. The central ques..."},"80230":{"name":"Ethical Theory","number":"80230","units":9,"blurb":"Every day, even in very subtle ways, we make judgments of value that shape our lives and our cond..."},"80235":{"name":"Political Philosophy","number":"80235","units":9,"blurb":"At the heart of political philosophy lie fundamental questions such as: What constitutes a just s..."},"80242":{"name":"Conflict and Dispute Resolution","number":"80242","units":9,"blurb":"Conflict is an intractable feature of human life, whether occurring between family members, frien..."},"80243":{"name":"Ethics of Leadership","number":"80243","units":9,"blurb":"From business operations to international affairs, leadership concerns the use of power or influe..."},"80248":{"name":"Engineering Ethics","number":"80248","units":9,"blurb":"This course provides an introduction to core ethical issues in engineering research and practice...."},"80251":{"name":"Modern Philosophy","number":"80251","units":9,"blurb":"Descartes' project to doubt all received knowledge and begin from scratch marked the beginning of..."},"80252":{"name":"Kant","number":"80252","units":9,"blurb":"Immanuel Kant's 'Critical philosophy' may be seen as the result of his attempts to determine the ..."},"80256":{"name":"Modern Moral Philosophy","number":"80256","units":9,"blurb":"This course will follow moral theory through the modern era (roughly 16001900), with special emph..."},"80258":{"name":"Hume","number":"80258","units":9,"blurb":"This course will investigate the philosophy of David Hume. We will focus on his philosophical tho..."},"80271":{"name":"Philosophy and Psychology","number":"80271","units":9,"blurb":"This course has two parts. First, we will look at basic concepts used in psychology (and cognitiv..."},"80281":{"name":"Language and Thought","number":"80281","units":9,"blurb":"We use language to communicate. Communication seems to involve something like the transfer of ide..."},"80282":{"name":"Phonetics and Phonology I","number":"80282","units":9,"blurb":"This course aims to provide students with practical tools for the study of speech sounds. The aco..."},"80283":{"name":"Syntax and Discourse","number":"80283","units":9,"blurb":"In English and many other languages, it is possible to express the same content in several differ..."},"80284":{"name":"Invented Languages","number":"80284","units":9,"blurb":"Ordinary human languages are not designed or invented, but instead grow organically within human ..."},"80285":{"name":"Natural Language Syntax","number":"80285","units":9,"blurb":"This course is intended to provide an introduction to the methods of syntactic analysis, and to s..."},"80286":{"name":"Words and Word Formation: Introduction to Morphology","number":"80286","units":9,"blurb":"How many words do you know? Is 'gonna' one word or two? How many meanings does 'unlockable' have?..."},"80292":{"name":"Learning Science Principles","number":"80292","units":6,"blurb":"The ability to learn - that is, to change and adapt to one's environment - is one of the hallmark..."},"80305":{"name":"Rational Choice","number":"80305","units":9,"blurb":"This course is an introduction to formal models of choice and decision-making. We begin by examin..."},"80310":{"name":"Formal Logic","number":"80310","units":9,"blurb":"Among the most significant developments in modern logic is the formal analysis of the notions of ..."},"80311":{"name":"Undecidability and Incompleteness","number":"80311","units":9,"blurb":"U&I focuses on two logical problems: the undecidability of predicate logic (established by Church..."},"80322":{"name":"Philosophy of Physics","number":"80322","units":9,"blurb":"Philosophical problems in the development of modern physics. Topics include the philosophical sig..."},"80335":{"name":"Deliberative Democracy: Theory and Practice","number":"80335","units":9,"blurb":"This course will explore the theory and practice of deliberative democracy. Topics and concepts t..."},"80363":{"name":"19th Century Foundations of Science","number":"80363","units":9,"blurb":"Why do contemporary philosophers of science worry about the relationship between theory and evide..."},"80381":{"name":"Meaning in Language","number":"80381","units":9,"blurb":"Human language involves an association between arbitrary signs and meaning. The study of meaning ..."},"80385":{"name":"Linguistics of Germanic Languages","number":"80385","units":9,"blurb":"The Germanic languages include English, Dutch, Frisian, German, Pennsylvanisch, Afrikaans, Yiddis..."},"80391":{"name":"Morality Play: Laboratory for Interactive Media and Values Education","number":"80391","units":12,"blurb":"What do you get when you cross cutting edge interactive media technologies with inquiry into the ..."},"80405":{"name":"Game Theory","number":"80405","units":9,"blurb":"Game theory is the study of interactive decision-making. This course will develop conceptual and ..."},"80413":{"name":"Category Theory","number":"80413","units":9,"blurb":"Category theory is a formal framework devoted to studying the structural relationships between ma..."},"80414":{"name":"Seminar on Computability","number":"80414","units":9,"blurb":"This interdisciplinary seminar is divided into three parts. Part 1 reviews the emergence of the c..."},"80431":{"name":"Meta-ethics","number":"80431","units":9,"blurb":"First we will survey of proposals for necessary and sufficient conditions for \"x is a morally per..."},"80447":{"name":"Global Justice","number":"80447","units":9,"blurb":"Until recently, the dominant view of international relations has been that the governments and ci..."},"80449":{"name":"EHPP Project Course","number":"80449","units":12,"blurb":"The Ethics, History and Public Policy Project Course is required for the Ethics, History and Publ..."},"80501":{"name":"Philosophy Senior Honors Thesis I","number":"80501","units":9,"blurb":"Philosophy Department majors with outstanding academic records and intellectual promise will be g..."},"80502":{"name":"Philosophy Senior Honors Thesis II","number":"80502","units":9,"blurb":"Philosophy Department majors with outstanding academic records and intellectual promise will be g..."},"80511":{"name":"Thesis Seminar","number":"80511","units":9,"blurb":"This course provides a forum for the presentation and detailed discussion of research done by stu..."},"80513":{"name":"Seminar on Philosophy of Mathematics","number":"80513","units":9,"blurb":"The \"linguistic turn\" in twentieth century philosophy lets us think about mathematics as a collec..."},"80515":{"name":"Seminar on the Foundations of Statistics","number":"80515","units":9,"blurb":"This decision-theoretic seminar is organized in three parts. 1. In the first we examine Savage's ..."},"80516":{"name":"Seminar on Causation","number":"80516","units":0,"blurb":"In the past decades, many influential developments in the study of causation have resulted from c..."},"80530":{"name":"Seminar on Ethical Theory","number":"80530","units":0,"blurb":"This seminar will focus on classic and contemporary accounts of moral and political autonomy and ..."},"80580":{"name":"Seminar on the Philosophy of Language","number":"80580","units":9,"blurb":"The study of the semantics of natural language quantifiers (e.g., 'some', 'no', 'many', 'fewer', ..."},"80595":{"name":"Senior Thesis","number":"80595","units":0,"blurb":"Philosophy Department majors writing a senior thesis, and are not participating in the Dietrich C..."},"82101":{"name":"Elementary French I","number":"82101","units":12,"blurb":"This course is for students with no prior experience in French. Using a proficiency-oriented appr..."},"82102":{"name":"Elementary French II","number":"82102","units":12,"blurb":"This course is designed for students who have taken first-semester French at Carnegie Mellon or l..."},"82103":{"name":"Elementary French I Online","number":"82103","units":12,"blurb":"This course is designed for students with no prior experience with French and who need a more fle..."},"82104":{"name":"Elementary French II Online","number":"82104","units":12,"blurb":"This course is designed for students who need a more flexible approach to language learning than ..."},"82111":{"name":"Elementary Arabic I","number":"82111","units":12,"blurb":"This course is for students with no prior experience in Arabic. Using a proficiency-oriented appr..."},"82112":{"name":"Elementary Arabic II","number":"82112","units":12,"blurb":"This course is designed for students who have taken first-semester Arabic at Carnegie Mellon or i..."},"82114":{"name":"Arabic for Global Exchange Online","number":"82114","units":6,"blurb":"Arabic for Global Exchange is a course in Arabic language and culture that utilizes cognitive lea..."},"82115":{"name":"Beginning Arabic for Oral Communication","number":"82115","units":6,"blurb":"Beginning Arabic for Oral Communication is designed for students who have either taken Arabic for..."},"82121":{"name":"Elementary German I","number":"82121","units":12,"blurb":"This course is for students with no prior experience in German. Using a proficiency-oriented appr..."},"82122":{"name":"Elementary German II","number":"82122","units":12,"blurb":"This course is designed for students who have taken first-semester French at Carnegie Mellon or l..."},"82123":{"name":"Directed Language Study: Elementary German I or II","number":"82123","units":12,"blurb":"This course is a directed, instructor-supervised version of the courses 82121 or 82122. It is rec..."},"82131":{"name":"Elementary Chinese I","number":"82131","units":12,"blurb":"This course is for students with no prior experience in Chinese. Using a proficiency-oriented app..."},"82132":{"name":"Elementary Chinese II","number":"82132","units":12,"blurb":"This course is designed for students who have taken first-semester Chinese at Carnegie Mellon or ..."},"82133":{"name":"Elementary Chinese Online I","number":"82133","units":12,"blurb":"This course is designed for students who need a more flexible approach to language learning than ..."},"82134":{"name":"Elementary Chinese Online II","number":"82134","units":12,"blurb":"This course is the continuation of 82133, Elementary Chinese I Online. Students will continue lea..."},"82135":{"name":"Elementary Chinese for Heritage Students","number":"82135","units":9,"blurb":"This course is designed for students who have some basic knowledge of spoken Chinese, but know li..."},"82137":{"name":"Chinese Calligraphy: Culture and Skills","number":"82137","units":9,"blurb":"Chinese calligraphy is a crucial part of Chinese culture and world art. It is also a clear manife..."},"82141":{"name":"Elementary Spanish I","number":"82141","units":12,"blurb":"Elementary Spanish I is the first part of a two-semester course sequence for beginning students, ..."},"82142":{"name":"Elementary Spanish II","number":"82142","units":12,"blurb":"Elementary Spanish II is the second part of a two-semester course sequence for beginning students..."},"82143":{"name":"Elementary Spanish I Online","number":"82143","units":12,"blurb":"Elementary Spanish Online I is for beginning students, emphasizing the development of communicati..."},"82144":{"name":"Elementary Spanish II Online","number":"82144","units":12,"blurb":"Elementary Spanish Online II is the second part of a two-course sequence, emphasizing the develop..."},"82161":{"name":"Elementary Italian I","number":"82161","units":12,"blurb":"This course is for students with no prior experience in Italian. Using a proficiency-oriented app..."},"82162":{"name":"Elementary Italian II","number":"82162","units":12,"blurb":"This course is designed for students who have taken first-semester Italian at Carnegie Mellon or ..."},"82163":{"name":"Directed Language Study: Elementary Italian I or II","number":"82163","units":12,"blurb":"A self-paced version of first or second semester Elementary Italian, this course is for highly mo..."},"82171":{"name":"Elementary Japanese I","number":"82171","units":12,"blurb":"This course is the first part of a two-semester course sequence (82171, 82172) for students with ..."},"82172":{"name":"Elementary Japanese II","number":"82172","units":12,"blurb":"This course is a sequel to Elementary Japanese I (82171) and continues to further the development..."},"82173":{"name":"Introduction to Japanese I","number":"82173","units":9,"blurb":"This course is the first part of a two-semester sequence (82-173, 82-174) for students with no ba..."},"82183":{"name":"Freshman Seminar: Japanese Popular Culture in the 2000s and Beyond","number":"82183","units":9,"blurb":"This course seeks to expose students to Japanese popular culture (e.g., anime, manga, otaku subcu..."},"82186":{"name":"Freshman Seminar: Introduction to Russian Culture","number":"82186","units":9,"blurb":"This course deals with important cultural achievements of the Russian people in different areas. ..."},"82187":{"name":"Freshman Seminar: Money and Morality in Chinese Culture","number":"82187","units":9,"blurb":"This seminar will introduce students to a variety of approaches to Chinese culture through the pr..."},"82188":{"name":"Freshman Seminar: The Uses and Abuses of Haiti","number":"82188","units":9,"blurb":"This first-year seminar on Haiti is intended as an introduction to the field of cultural studies,..."},"82191":{"name":"Elementary Russian I","number":"82191","units":12,"blurb":"This course is for students who have never studied Russian. It begins the Russian language sequen..."},"82192":{"name":"Elementary Russian II","number":"82192","units":12,"blurb":"Offered in spring only, this course is designed for students who have taken first-semester Russia..."},"82198":{"name":"Research Training: Modern Languages","number":"82198","units":0,"blurb":"These courses are designed to give eligible and interested students some hands-on research experi..."},"82201":{"name":"Intermediate French I","number":"82201","units":9,"blurb":"At the intermediate level, students will continue to improve listening, speaking, reading and wri..."},"82202":{"name":"Intermediate French II","number":"82202","units":9,"blurb":"At the intermediate level, students will continue to improve listening, speaking, reading and wri..."},"82211":{"name":"Intermediate Arabic I","number":"82211","units":12,"blurb":"At the intermediate level, students will continue to improve listening, speaking, reading and wri..."},"82212":{"name":"Intermediate Arabic II","number":"82212","units":12,"blurb":"An integrated approach to the study of the Arabic language and culture by means of grammar review..."},"82214":{"name":"Topics in Modern Arabic Language, Literature, & Culture","number":"82214","units":9,"blurb":"An integrated approach to the study of the Arabic language, literature and culture by means of li..."},"82215":{"name":"Introduction to Modern Arabic Literature and Culture","number":"82215","units":0,"blurb":"This course is designed to acquaint students with the literature and culture of the Arab world. T..."},"82221":{"name":"Intermediate German I","number":"82221","units":9,"blurb":"The goal of Intermediate German I is to further develop students¿ linguistic and cultural knowled..."},"82222":{"name":"Intermediate German II","number":"82222","units":9,"blurb":"In this class, students will expand and develop their speaking, listening, reading, and writing s..."},"82231":{"name":"Intermediate Chinese I","number":"82231","units":12,"blurb":"This course is the continuation of Elementary Chinese II (82132). At the intermediate level, stud..."},"82232":{"name":"Intermediate Chinese II","number":"82232","units":12,"blurb":"This is the second semester of Intermediate Chinese. Its primary goals are to expand students' vo..."},"82234":{"name":"Topics in Chinese History","number":"82234","units":9,"blurb":"Courses offered under this repeatable title will offer focused surveys of China's history, from t..."},"82235":{"name":"Intermediate Chinese for Heritage Students","number":"82235","units":12,"blurb":"This course is the continuation of Elementary Chinese for Heritage Students (82135). It is design..."},"82238":{"name":"Topics in Chinese Culture","number":"82238","units":9,"blurb":"Courses offered under this repeatable title will focus on aspects of modern and contemporary Chin..."},"82241":{"name":"Intermediate Spanish I","number":"82241","units":9,"blurb":"Intermediate Spanish I is the first part of a two-semester course sequence (82241, 82242) designe..."},"82242":{"name":"Intermediate Spanish II","number":"82242","units":9,"blurb":"Intermediate Spanish II is the second part of a two-semester course sequence (82241, 82242) desig..."},"82253":{"name":"Korean Culture Through Film","number":"82253","units":9,"blurb":"South Korean cinema became one of the most vibrant local film industries at the end of the last c..."},"82261":{"name":"Intermediate Italian I","number":"82261","units":9,"blurb":"This course begins a two-semester course sequence (82-261, 82-262) for intermediate-level student..."},"82262":{"name":"Intermediate Italian II","number":"82262","units":9,"blurb":"At the intermediate level, students will continue to improve listening, speaking, reading and wri..."},"82271":{"name":"Intermediate Japanese I","number":"82271","units":12,"blurb":"This course is the first part of a two-semester course sequence (82271, 82272). At the intermedia..."},"82272":{"name":"Intermediate Japanese II","number":"82272","units":12,"blurb":"This course is a sequel to Intermediate Japanese I (8227182171). At the intermediate level, stude..."},"82273":{"name":"Introduction to Japanese Language and Culture","number":"82273","units":9,"blurb":"This course is an introduction to modern Japanese. Given the close link between the Japanese lang..."},"82278":{"name":"Japanese Film and Literature: The Art of Storytelling","number":"82278","units":9,"blurb":"This course explores how the art of storytelling is in tandem with the vicissitudes of the human ..."},"82281":{"name":"Tutoring for Community Outreach","number":"82281","units":0,"blurb":"This course enables students to participate in a community outreach program in the Pittsburgh Pub..."},"82291":{"name":"Intermediate Russian I","number":"82291","units":9,"blurb":"This course is designed for students who have taken two semesters of Russian at Carnegie Mellon o..."},"82292":{"name":"Intermediate Russian II","number":"82292","units":9,"blurb":"This course is designed for students who have taken three semesters of Russian at Carnegie Mellon..."},"82294":{"name":"Topics in Russian Language and Culture","number":"82294","units":9,"blurb":"This repeatable course is designed for both students who know Russian and those who do not and is..."},"82300":{"name":"Topics in Cross-Cultural Studies","number":"82300","units":9,"blurb":"This course is designed for students in different disciplines who desire to develop knowledge abo..."},"82303":{"name":"Introduction to French Culture","number":"82303","units":9,"blurb":"Through deep cultural analysis of France and the French, students attempt to discover the French ..."},"82304":{"name":"The Francophone World","number":"82304","units":9,"blurb":"This course introduces the students of French to several of the francophone regional cultures out..."},"82305":{"name":"French in its Social Contexts","number":"82305","units":9,"blurb":"This course examines the social, historical, and political contexts of the French language, with ..."},"82311":{"name":"Arabic Language and Culture I","number":"82311","units":9,"blurb":"This course aims to build students' knowledge of the Arab world and at the same time promote the ..."},"82312":{"name":"Arabic Language and Culture II","number":"82312","units":9,"blurb":"This course is a sequel to 82311 and also aims to build students' knowledge of the Arab world and..."},"82313":{"name":"Readings in Islamic History","number":"82313","units":9,"blurb":"This course focuses on Islamic history and enables students to read authentic historical texts in..."},"82314":{"name":"Business Arabic","number":"82314","units":9,"blurb":"Note: This course is available only on the Qatar campus. The aim of this course is to develop the..."},"82320":{"name":"Contemporary Society in Germany, Austria and Switzerland","number":"82320","units":9,"blurb":"This course offers an introduction to contemporary German culture since 1989. Switzerland and Aus..."},"82323":{"name":"Germany, Austria and Switzerland in the 20th Century","number":"82323","units":9,"blurb":"This course advances proficiency in communicative and grammatical skills in the German language a..."},"82327":{"name":"The Emergence of the German Speaking World","number":"82327","units":9,"blurb":"The Italian literary theorist Franco Moretti has written that \"Germany is a sort of Magic Stage, ..."},"82331":{"name":"Advanced Chinese I","number":"82331","units":9,"blurb":"This course is designed for students who have reached the intermediate level of proficiency in th..."},"82332":{"name":"Advanced Chinese II","number":"82332","units":9,"blurb":"A continuation of Advanced Chinese I, this course is designed to improve students' proficiency to..."},"82333":{"name":"Introduction to Chinese Language and Culture","number":"82333","units":0,"blurb":"This course will introduce students to important developments in China's culture and language sin..."},"82334":{"name":"Structure of Chinese","number":"82334","units":9,"blurb":"This is an upper-level Chinese course for students who have completed the requirements for interm..."},"82337":{"name":"Mandarin Chinese for Oral Communication I","number":"82337","units":9,"blurb":"This course is designed for students who have reached intermediate level in reading and writing C..."},"82339":{"name":"Business Language & Culture in China I","number":"82339","units":9,"blurb":"Designed for students who have had at least two years of Chinese language training, this course e..."},"82340":{"name":"Business Language & Culture in China II","number":"82340","units":9,"blurb":"The goal of this course is to help students improve their language proficiency in professional en..."},"82342":{"name":"Spain: Language and Culture","number":"82342","units":9,"blurb":"This course is part of the post-intermediate, 300-level program that forms the introduction to th..."},"82343":{"name":"Latin America: Language and Culture","number":"82343","units":9,"blurb":"This course is part of the post-intermediate, 300-level program that forms the introduction to th..."},"82344":{"name":"U.S. Latinos: Language and Culture","number":"82344","units":9,"blurb":"This course is part of the post-intermediate, 300-level program that forms the introduction to th..."},"82345":{"name":"Introduction to Hispanic Literary and Cultural Studies","number":"82345","units":9,"blurb":"This advanced-level course is required for the Hispanic Studies major or minor, and should be tak..."},"82361":{"name":"Italian Language and Culture I","number":"82361","units":9,"blurb":"This is a course in Italian culture and language with a streamlined review of grammar. The course..."},"82371":{"name":"Advanced Japanese I","number":"82371","units":9,"blurb":"This course emphasizes the acquisition of advanced level of communicative language proficiency by..."},"82372":{"name":"Advanced Japanese II","number":"82372","units":9,"blurb":"This course continues to further improve the acquisition of advanced level communicative language..."},"82373":{"name":"Structure of the Japanese Language","number":"82373","units":9,"blurb":"This course examines the basic Japanese grammar covered in elementary and intermediate Japanese c..."},"82374":{"name":"Technical Japanese","number":"82374","units":9,"blurb":"This course seeks to (1) introduce students to technical Japanese or Japanese language used in th..."},"82380":{"name":"Independent Study in Second Language Acquisition","number":"82380","units":0,"blurb":"An opportunity for students who wish to pursue independent supervised study in second language ac..."},"82385":{"name":"Language Across the University","number":"82385","units":0,"blurb":"Language credit may be attached to any course, independent study, or project unit for which a stu..."},"82388":{"name":"Understanding Second Language Fluency","number":"82388","units":9,"blurb":"This course examines differences and similarities in the way literacy is learned and used in dive..."},"82397":{"name":"Russia's Demons","number":"82397","units":0,"blurb":"Demons and devils, ghosts and goblins, witches and werewolves: Russian literature, art and music ..."},"82399":{"name":"Special Topics: Russian in Context","number":"82399","units":0,"blurb":"This course is designed for students who have completed four semesters of Russian at Carnegie Mel..."},"82400":{"name":"Russian Studies Topics","number":"82400","units":6,"blurb":"(A1)Literary Culture of the 19th Century Russia (6 Units) The purpose of the course is to give st..."},"82415":{"name":"Topics in French and Francophone Studies","number":"82415","units":9,"blurb":"This repeatable course explores target cultures through a thematic or conceptual focus. Students ..."},"82416":{"name":"Topics in French and Francophone Studies","number":"82416","units":9,"blurb":"This repeatable course explores target cultures through a thematic or conceptual focus. Students ..."},"82426":{"name":"Topics in German Literature and Culture","number":"82426","units":9,"blurb":"This repeatable course explores the culture of the German-speaking nations through a thematic or ..."},"82429":{"name":"German Reading and Translation Workshop: German in Today's World","number":"82429","units":9,"blurb":"This course will address issues of translation, mostly from German into English, but to a lesser ..."},"82434":{"name":"Studies in Chinese Traditions","number":"82434","units":9,"blurb":"This repeatable course explores target cultures through a thematic or conceptual focus. Students ..."},"82440":{"name":"Studies in Chinese Literature & Culture","number":"82440","units":9,"blurb":"This repeatable course explores target cultures through a thematic or conceptual focus. Students ..."},"82441":{"name":"Studies in Peninsular Literature and Culture","number":"82441","units":9,"blurb":"This repeatable course explores the cultures of Spain through a thematic or conceptual focus. Stu..."},"82450":{"name":"Advanced Research in Hispanic Language & Culture","number":"82450","units":9,"blurb":"This course permits in-depth, 400-level study in the following courses: 82342 Spain: Language and..."},"82451":{"name":"Studies in Latin American Literature and Culture","number":"82451","units":9,"blurb":"This repeatable course explores the cultures of Latin America through a thematic or conceptual fo..."},"82455":{"name":"Topics in Hispanic Studies","number":"82455","units":9,"blurb":"This repeatable course explores Spanish-speaking cultures through a thematic or conceptual focus...."},"82456":{"name":"Topics in Hispanic Studies","number":"82456","units":9,"blurb":"This repeatable course explores Spanish-speaking cultures through a thematic or conceptual focus...."},"82473":{"name":"Topics in Japanese Studies","number":"82473","units":9,"blurb":"This repeatable course explores target cultures through a thematic or conceptual focus. Students ..."},"82474":{"name":"Topics in Japanese Studies","number":"82474","units":9,"blurb":"This repeatable course explores target cultures through a thematic or conceptual focus. Students ..."},"82495":{"name":"Topics in Applied Second Language Acquisition","number":"82495","units":9,"blurb":"This course aims to expose students to current professional practices and common situations relat..."},"82501":{"name":"Special Topics: French and Francophone Studies","number":"82501","units":0,"blurb":"Restricted to language majors who wish to go beyond the regular course offerings in French and Fr..."},"82502":{"name":"Special Topics: French and Francophone Studies","number":"82502","units":0,"blurb":"Restricted to language majors who wish to go beyond the regular course offerings in French and Fr..."},"82505":{"name":"Undergraduate Internship","number":"82505","units":0,"blurb":"Approved upper-class language majors may receive credit in connection with work experience relate..."},"82521":{"name":"Special Topics: German Studies","number":"82521","units":0,"blurb":"Restricted to language majors who wish to go beyond the regular course offerings in German Studie..."},"82522":{"name":"Special Topics: German Studies","number":"82522","units":0,"blurb":"Restricted to language majors who wish to go beyond the regular course offerings in German Studie..."},"82531":{"name":"Special Topics in Chinese Studies","number":"82531","units":0,"blurb":"Restricted to language majors who wish to go beyond the regular course offerings in Chinese Studi..."},"82532":{"name":"Special Topics: Chinese Studies","number":"82532","units":0,"blurb":"Restricted to language majors who wish to go beyond the regular course offerings in Chinese Studi..."},"82541":{"name":"Special Topics: Hispanic Studies","number":"82541","units":0,"blurb":"Restricted to language majors who wish to go beyond the regular course offerings in Hispanic Stud..."},"82542":{"name":"Special Topics: Hispanic Studies","number":"82542","units":0,"blurb":"Restricted to language majors who wish to go beyond the regular course offerings in Hispanic Stud..."},"82561":{"name":"Special Topics: Italian Studies","number":"82561","units":0,"blurb":"Restricted to language majors who wish to go beyond the regular course offerings in Italian Studi..."},"82562":{"name":"Special Topics: Italian Studies","number":"82562","units":0,"blurb":"Restricted to language majors who wish to go beyond the regular course offerings in Italian Studi..."},"82571":{"name":"Special Topics: Japanese Studies","number":"82571","units":0,"blurb":"Restricted to language majors who wish to go beyond the regular course offerings in Japanese Stud..."},"82572":{"name":"Special Topics: Japanese Studies","number":"82572","units":0,"blurb":"Restricted to language majors who wish to go beyond the regular course offerings in Japanese Stud..."},"82580":{"name":"Senior Seminar in Modern Languages","number":"82580","units":3,"blurb":"This mini-seminar for majors in Modern Languages focuses on general issues in second language lea..."},"82585":{"name":"Topics in Second Language Acquisition","number":"82585","units":9,"blurb":"This repeatable course promotes inquiry into issues related to second language acquisition, for e..."},"82599":{"name":"Russian Studies Thesis","number":"82599","units":0,"blurb":"The Russian Studies thesis, as described for the Russian Studies major, is required of all Russia..."},"85102":{"name":"Introduction to Psychology","number":"85102","units":9,"blurb":"This course examines major areas of scientific psychology in some depth, the attempt being to dev..."},"85198":{"name":"Research Training: Psychology","number":"85198","units":9,"blurb":"See www.hss.cmu.edu/aac and click on (forms and guides informational handout page) then click on ..."},"85211":{"name":"Cognitive Psychology","number":"85211","units":9,"blurb":"How do people perceive, learn, remember, and think? This course will consider perception, languag..."},"85213":{"name":"Human Information Processing and Artifical Intelligence","number":"85213","units":9,"blurb":"This class will review various results in cognitive psychology (attention, perception, memory, pr..."},"85219":{"name":"Biological Foundations of Behavior","number":"85219","units":9,"blurb":"This course will provide students with a general introduction to the underlying biological princi..."},"85221":{"name":"Principles of Child Development","number":"85221","units":9,"blurb":"This course is about normal development from conception through adolescence. Topics include physi..."},"85241":{"name":"Social Psychology","number":"85241","units":9,"blurb":"The focus of this course will be on how peoples behavior, feelings and thoughts are influenced or..."},"85251":{"name":"Personality","number":"85251","units":9,"blurb":"The primary purpose of personality psychology is to understand human uniqueness—how and why it is..."},"85261":{"name":"Abnormal Psychology","number":"85261","units":9,"blurb":"The study of psychopathology is not an exact science; nor are there many clear-cut parameters wit..."},"85281":{"name":"Introduction to Clinical Psychology","number":"85281","units":9,"blurb":"This course is designed to introduce students to a wide variety of concepts in the area of clinic..."},"85310":{"name":"Research Methods in Cognitive Psychology","number":"85310","units":9,"blurb":"This is a course in which students develop the research skills associated with cognitive psycholo..."},"85314":{"name":"Cognitive Neuroscience Research Methods","number":"85314","units":9,"blurb":"This is a hands-on laboratory course designed to foster basic skills in the empirical approaches ..."},"85320":{"name":"Research Methods in Developmental Psychology","number":"85320","units":9,"blurb":"This is a laboratory course, in which the student will have direct experience working with childr..."},"85330":{"name":"Analytic Research Methods","number":"85330","units":9,"blurb":"This class will teach students how to apply six major non-experimental research methods used in a..."},"85340":{"name":"Research Methods in Social Psychology","number":"85340","units":9,"blurb":"This course is designed to provide students with the necessary knowledge to evaluate research, ma..."},"85341":{"name":"Organizational Communication","number":"85341","units":9,"blurb":"Much of the work in groups and organizations consists of communication. You communicate to get in..."},"85350":{"name":"Psychology of Prejudice","number":"85350","units":9,"blurb":"This course is devoted to the study of both traditional and more modern forms of prejudice and di..."},"85352":{"name":"Evolutionary Psychology","number":"85352","units":9,"blurb":"This course will cover both the fundamentals of evolutionary psychology, including the theories o..."},"85354":{"name":"Infant Language Development","number":"85354","units":9,"blurb":"While adults struggle to learn languages, almost all infants acquire language with seemingly litt..."},"85356":{"name":"Music and Mind: The Cognitive Neuroscience of Sound","number":"85356","units":9,"blurb":"This course will take a multidisciplinary approach to understand the neural systems that contribu..."},"85370":{"name":"Perception","number":"85370","units":9,"blurb":"Perception, broadly defined, is the construction of a representation of the external world for pu..."},"85375":{"name":"Crosscultural Psychology","number":"85375","units":9,"blurb":"Human beings share a common genetic inheritance, but our cultural institutions differ in a bewild..."},"85377":{"name":"Attitudes and Persuasion","number":"85377","units":9,"blurb":"This advanced undergraduate course will focus on the topic of attitude change and how various per..."},"85380":{"name":"In Search of Mind: The History of Psychology","number":"85380","units":9,"blurb":"This course will focus on three aspects of the origin and growth of experimen-tal psychology. The..."},"85385":{"name":"Auditory Perception: Sense of Sound","number":"85385","units":9,"blurb":"This course explores how our sense of hearing allows us to interact with the world. Students will..."},"85390":{"name":"Human Memory","number":"85390","units":9,"blurb":"Without memory, people would barely be able to function: we could not be able to communication be..."},"85392":{"name":"Human Expertise","number":"85392","units":9,"blurb":"The process of becoming an expert involves many changes, some quantitative and some qualitative. ..."},"85395":{"name":"Applications of Cognitive Science","number":"85395","units":9,"blurb":"The famous psychologist George Miller once said that Psychology should \"give itself away.\" The go..."},"85406":{"name":"Autism: Psychological and Neuroscience Perspectives","number":"85406","units":9,"blurb":"Autism is a disorder that affects many cognitive and social processes, sparing some facets of tho..."},"85412":{"name":"Cognitive Modeling","number":"85412","units":9,"blurb":"This course will be concerned with modeling of agent behavior in a range of applications from lab..."},"85419":{"name":"Introduction to Parallel Distributed Processing","number":"85419","units":9,"blurb":"This course will provide an overview of parallel-distributed processing models of aspects of perc..."},"85426":{"name":"Learning in Humans and Machines","number":"85426","units":9,"blurb":"This course provides an introduction to probabilistic models of cognition. The focus is on princi..."},"85429":{"name":"Cognitive Brain Imaging","number":"85429","units":9,"blurb":"This seminar will examine how the brain executes higher level cognitive processes, such as proble..."},"85442":{"name":"Health Psychology","number":"85442","units":9,"blurb":"This course is concerned with how behavior and psychological states influence the development of ..."},"85443":{"name":"Social Factors and Well-Being","number":"85443","units":9,"blurb":"This course will focus on the role that our social environment plays in our feelings of well-bein..."},"85444":{"name":"Relationships","number":"85444","units":9,"blurb":"The primary goal of this course is to introduce you to social psychological theory and research o..."},"85446":{"name":"Psychology of Gender","number":"85446","units":9,"blurb":"This course is devoted to the investigation of psychological gender rather than biological sex. T..."},"85480":{"name":"Internship in Clinical Psychology","number":"85480","units":0,"blurb":"This course introduces students to Clinical Psychology and related mental health fields. Students..."},"85482":{"name":"Internship in Psychology","number":"85482","units":0,"blurb":"The Internship in Psychology is designed to enable students to gain experience in professional se..."},"85484":{"name":"Practicum in Child Development","number":"85484","units":9,"blurb":"This guided field experience is designed to help students deepen their understanding of developme..."},"85505":{"name":"Readings In Psychology","number":"85505","units":0,"blurb":"As the name implies, the emphasis in the Reading course is on reading articles and books in some ..."},"85506":{"name":"Readings in Psychology","number":"85506","units":0,"blurb":"As the name implies, the emphasis in the reading course is on reading articles and books in some ..."},"85507":{"name":"Research in Psychology","number":"85507","units":0,"blurb":"This course may include field study, applied work, or laboratory research. The student should hav..."},"85508":{"name":"Research in Psychology","number":"85508","units":0,"blurb":"This course may include field study, applied work, or laboratory research. The student should hav..."},"85601":{"name":"Senior Thesis","number":"85601","units":9,"blurb":"This course is intended for senior Psychology or Cognitive Science majors who wish to conduct a r..."},"85602":{"name":"Senior Thesis","number":"85602","units":9,"blurb":"This course is intended for senior Psychology or Cognitive Science majors who wish to conduct a r..."},"85730":{"name":"Analytic Research Methods","number":"85730","units":12,"blurb":"This class will teach students how to apply six major non-experimental research methods used in a..."},"85765":{"name":"Cognitive Neuroscience","number":"85765","units":0,"blurb":"This course will cover fundamental findings and approaches in cognitive neuroscience, with the go..."},"88120":{"name":"Reason, Passion and Cognition","number":"88120","units":9,"blurb":"This course will introduce students to major concepts and theories in the social and decision sci..."},"88125":{"name":"Freshman Seminar: Forecasting Uncertainty","number":"88125","units":9,"blurb":"Whenever you make a plan, you have to think about the future. Sometimes you know a lot, sometimes..."},"88198":{"name":"Research Training: Social and Decision Sciences","number":"88198","units":0,"blurb":"This course is part of a set of 100-level courses offered by H&SS departments as independent stud..."},"88220":{"name":"Policy Analysis I","number":"88220","units":9,"blurb":"This course provides an introduction to theories and methods for policy analysis. The main focus ..."},"88221":{"name":"Policy Analysis II","number":"88221","units":9,"blurb":"This course is an extension of Policy Analysis I and focuses on a normative analysis of governmen..."},"88223":{"name":"Decision Analysis and Decision Support Systems","number":"88223","units":9,"blurb":"This course emphasizes explicit procedures for analyzing complex decisions. The topics covered in..."},"88251":{"name":"Empirical Research Methods","number":"88251","units":9,"blurb":"This course teaches students how to evaluate and conduct original research regarding human behavi..."},"88252":{"name":"Causal Inference in the Field: Using Data to Study Crime, Love, Sports & More","number":"88252","units":9,"blurb":"Causal questions are pervasive in the social and behavioral sciences, and empirical researchers o..."},"88257":{"name":"Experimental Economics","number":"88257","units":9,"blurb":"This course will focus on the experimental literature studying decision-making and strategic inte..."},"88260":{"name":"Organizations","number":"88260","units":9,"blurb":"Even in a \"market\" economy, the preponderance of economic activity is carried out through firms a..."},"88281":{"name":"Topics in Law: 1st Amendment","number":"88281","units":9,"blurb":"In their firm desire to perfect the new Constitution, which defined and limited the powers and ro..."},"88284":{"name":"Topics of Law: The Bill of Rights","number":"88284","units":9,"blurb":"This course examines the history and place of the Bill of Rights in our nation's constitutional f..."},"88302":{"name":"Behavioral Decision Making","number":"88302","units":9,"blurb":"Behavioral decision making is the study of how people make decisions, in terms that can eventuall..."},"88341":{"name":"Organizational Communication","number":"88341","units":9,"blurb":"Much of the work in groups and organizations consists of communication. You communicate to get in..."},"88342":{"name":"The Neuroscience of Decision Making","number":"88342","units":9,"blurb":"Because we are human, feelings provide the basis for reason and rational decision-making. Conside..."},"88345":{"name":"Perspectives on Industrial Research and Development","number":"88345","units":9,"blurb":"Incandescent and fluorescent electric lights; nylon and Kevlar&#61650;, the atomic bomb; the tran..."},"88365":{"name":"Behavioral Economics and Public Policy","number":"88365","units":9,"blurb":"Economics has up to now been the social science that has been most broadly and deeply involved in..."},"88367":{"name":"Behavioral Economics in the Wild","number":"88367","units":9,"blurb":"Behavioral Economics is a sub-field of economics that, relying on insights from psychology and de..."},"88384":{"name":"Conflict and Conflict Resolution in International Relations","number":"88384","units":9,"blurb":"Course will introduce students to concepts of conflict, conflict resolution, and peace in interna..."},"88398":{"name":"Independent Study","number":"88398","units":0,"blurb":"Students conduct independent academic study under the supervision of a Social & Decision Sciences..."},"88399":{"name":"Undergraduate Research","number":"88399","units":0,"blurb":"Students conduct research under the supervision of a Social & Decision Sciences faculty member. S..."},"88405":{"name":"Risk Perception and Communication","number":"88405","units":9,"blurb":"Throughout their lives, people make decisions about risks that may potentially affect their healt..."},"88411":{"name":"Rise of the Asian Economies","number":"88411","units":9,"blurb":"For most of the past quarter century, no region of the world has been more economically dynamic t..."},"88413":{"name":"Energy and Climate: History, Science, Technology, & Policy in the US 17762076","number":"88413","units":9,"blurb":"This course provides CMU students with a historically grounded, technically informed, and policy-..."},"88419":{"name":"Negotiation","number":"88419","units":9,"blurb":"Negotiation is a process in which two or more parties undertake a process to resolve conflicting ..."},"88435":{"name":"Decision Science and Policy","number":"88435","units":9,"blurb":"Research in the social sciences has extensively investigated how decision makers behave when they..."},"88444":{"name":"Public Policy and Regulation","number":"88444","units":9,"blurb":"Regulations are a significant policy tool of government. How society and the economy will react t..."},"88451":{"name":"Policy Analysis Senior Project","number":"88451","units":12,"blurb":"Students in this course apply the research and analytical methods learned in their other courses ..."},"88452":{"name":"Policy Analysis Senior Project","number":"88452","units":12,"blurb":"Students in this course apply the research and analytical methods learned in their other courses ..."},"88499":{"name":"Advanced Undergraduate Research","number":"88499","units":0,"blurb":"Students conduct research at an advanced level under the supervision of a Social & Decision Scien..."},"88505":{"name":"Undergraduate Internship","number":"88505","units":0,"blurb":"An internship is an approved and monitored work experience than can be related to an academic fie..."},"99101":{"name":"Computing @ Carnegie Mellon","number":"99101","units":3,"blurb":"Computing@Carnegie Mellon (C@CM) is a 3-unit, pass/fail mini course that will help you develop fo..."},"99104":{"name":"Carnegie Skills Workshop","number":"99104","units":3,"blurb":"Carnegie Skills Workshop (CSW) is a 3-unit course that helps students to define, locate, evaluate..."},"99241":{"name":"Revolutions of Circularity","number":"99241","units":9,"blurb":"In this course we will investigate how the apparently simple concept of circularity (both in stil..."},"99245":{"name":"Energy: Science, Society and Communication","number":"99245","units":9,"blurb":"Energy is a pervasive part of our lives in transportation, industry, agriculture, buildings, and ..."},"99250":{"name":"Seminar for Peer Tutors","number":"99250","units":4.5,"blurb":"SPECIAL PERMISSION REQUIRED: YES The purpose of this training course is to provide undergraduates..."},"99251":{"name":"Seminar for Supplemental Instruction","number":"99251","units":4.5,"blurb":"SPECIAL PERMISSION REQUIRED: YES The purpose of this training course is to provide undergraduates..."},"99252":{"name":"Seminar for Academic Counseling","number":"99252","units":4.5,"blurb":"SPECIAL PERMISSION REQUIRED: YES The purpose of this training course is to provide undergraduates..."},"03791":{"name":"Advanced Microbiology","number":"03791","units":12,"blurb":"This course will use both lectures and current research literature in the area of Microbiology an..."},"03741":{"name":"Advanced Cell Biology","number":"03741","units":12,"blurb":"This course covers fourteen topics in which significant recent advances or controversies have bee..."},"09560":{"name":"Computational Chemistry","number":"09560","units":12,"blurb":"Computer modeling is playing an increasingly important role in chemical, biological and materials..."},"03402":{"name":"Undergraduate Colloquium for Seniors","number":"03402","units":0,"blurb":"Missing Course Description - please contact the teaching department."},"09402":{"name":"Undergraduate Seminar VI","number":"09402","units":3,"blurb":"Students enrolled in this course present a 20 - 30 minute oral report on a current topic in chemi..."},"03350":{"name":"Developmental Biology","number":"03350","units":9,"blurb":"How does a complex, multicellular organism arise from a single cell? How do cells with identical ..."},"06607":{"name":"Physical Chemistry of Colloids and Surfaces","number":"06607","units":9,"blurb":"Thermodynamics of surfaces; adsorption at gas, liquid, and solid interfaces; capillarity; wetting..."},"03051":{"name":"Study Abroad","number":"03051","units":0,"blurb":"Missing Course Description - please contact the teaching department."},"03240":{"name":"Cell Biology","number":"03240","units":9,"blurb":"This course provides descriptive information and mechanistic detail concerning key cellular proce..."},"03250":{"name":"Introduction to Computational Biology","number":"03250","units":12,"blurb":"This class provides a general introduction to computational tools for biology. The course is divi..."},"03545":{"name":"Honors Research","number":"03545","units":0,"blurb":"This semester of research consists primarily of research and preparation of an acceptable written..."},"03700":{"name":"MS Thesis Research","number":"03700","units":0,"blurb":"A student enrolled in this course conducts an independent investigation on a project in a faculty..."},"09736":{"name":"Transition Metal Catalysis for Organic and Polymer Synthesis","number":"09736","units":12,"blurb":"Transition metal catalysts are invaluable in small molecule and polymer synthesis. The course wil..."},"09221":{"name":"Laboratory I:  Introduction to Chemical Analysis","number":"09221","units":12,"blurb":"This course is the first in a sequence of four laboratory courses on experimental aspects of chem..."},"03121":{"name":"Modern Biology","number":"03121","units":9,"blurb":"This is an introductory course that provides the basis for further studies in biochemistry, cell ..."},"06262":{"name":"Mathematical Methods of Chemical Engineering","number":"06262","units":12,"blurb":"Mathematical techniques are presented as tools for modeling and solving engineering problems. Mod..."},"09222":{"name":"Laboratory II: Organic Synthesis and Analysis","number":"09222","units":12,"blurb":"In this second course in the laboratory sequence, students acquire laboratory skills relevant to ..."},"03750":{"name":"Graduate Seminar","number":"03750","units":1,"blurb":"Each semester, all Department of Biological Sciences graduate students are required to register f..."},"09204":{"name":"Professional Communication Skills in Chemistry","number":"09204","units":3,"blurb":"This required course for chemistry majors promotes development of written and oral communication ..."},"09220":{"name":"Modern Organic Chemistry II","number":"09220","units":10,"blurb":"This course builds on 09219 by introducing students to additional functional groups, chemical rea..."},"06462":{"name":"Optimization Modeling and Algorithms","number":"06462","units":6,"blurb":"Formulation and solution of mathematical optimization problems with and without constraints. Obje..."},"03713":{"name":"Bioinformatics Data Integration Practicum","number":"03713","units":6,"blurb":"Missing Course Description - please contact the teaching department."},"06400":{"name":"Senior Research Project","number":"06400","units":0,"blurb":"Research projects under the direction of the Chemical Engineering faculty. The nature of the proj..."},"06708":{"name":"Advanced Process Dynamics and Control","number":"06708","units":12,"blurb":"Modeling and simulation of dynamic behavior of chemical processes. Theoretical and practical aspe..."},"03346":{"name":"Experimental Neuroscience","number":"03346","units":12,"blurb":"This laboratory is designed to teach concepts and experimental methods in neurobiology. Students ..."},"03344":{"name":"Experimental Biochemistry","number":"03344","units":12,"blurb":"This course is designed to be taken as a sequel to 03343. Experiments cover a variety of methods ..."},"03251":{"name":"Introduction to Computational Molecular Biology","number":"03251","units":6,"blurb":"This class provides a general introduction to computational tools for biology with specific empha..."},"03132":{"name":"Basic Science to Modern Medicine","number":"03132","units":9,"blurb":"This course will focus on the genetics, cell biology, and developmental biology behind human biol..."},"09101":{"name":"Introduction to Experimental Chemistry","number":"09101","units":3,"blurb":"This is a seven week chemistry laboratory course that is designed to introduce students to some b..."},"06466":{"name":"Experimental Polymer Science","number":"06466","units":9,"blurb":"Macromolecular behavior in bulk and in solution will be explored in experiments on tensile streng..."},"09445":{"name":"Undergraduate Research","number":"09445","units":0,"blurb":"Properly qualified students may undertake research projects under the direction of members of the..."},"03410":{"name":"Special Topics in Biological Sciences","number":"03410","units":0,"blurb":"Special Topics in Biological Sciences. Topics will vary depending on the semester and instructor...."},"03763":{"name":"Advanced Systems Neuroscience","number":"03763","units":12,"blurb":"This course is a graduate version of 03363. Students will attend the same lectures as the student..."},"03755":{"name":"Graduate Research Seminar","number":"03755","units":3,"blurb":"Each semester, all Departmental of Biological Sciences graduate students are required to register..."},"09214":{"name":"Physical Chemistry","number":"09214","units":9,"blurb":"This is a one-semester course intended primarily for students majoring in Biological Sciences, st..."},"03744":{"name":"Membrane Trafficking","number":"03744","units":9,"blurb":"While the focus of this course is to analyze membrane/protein traffic along both the biosynthetic..."},"03412":{"name":"Topics in Research","number":"03412","units":0,"blurb":"During the year students attend and submit brief summaries of weekly seminars given by outside sp..."},"03601":{"name":"Computational Biology Internship","number":"03601","units":0,"blurb":"This course allows a student to gain computational biology experience in a \"real-world\" setting. ..."},"03232":{"name":"Biochemistry I","number":"03232","units":9,"blurb":"This course provides an introduction to the application of biochemistry to biotechnology. The fun..."},"09803":{"name":"Chemistry of Gene Expression","number":"09803","units":12,"blurb":"This course examines the chemical basis of biological reactions required for the propagation of g..."},"09510":{"name":"Chemistry and Sustainability","number":"09510","units":9,"blurb":"This course aims to educate students in the foundations of systematic leadership for building a s..."},"09531":{"name":"Polymer Science","number":"09531","units":9,"blurb":"Polymer science is a vibrant multidisciplinary activity. It uses the methods of chemistry, physic..."},"03363":{"name":"Systems Neuroscience","number":"03363","units":9,"blurb":"Modern neuroscience is an interdisciplinary field that seeks to understand the function of the br..."},"09524":{"name":"Environmental Chemistry","number":"09524","units":9,"blurb":"Environmental pollutants are common consequences of human activities. These chemicals have a wide..."},"09345":{"name":"Physical Chemistry (Thermo): Macroscopic Principles of Physical Chemistry","number":"09345","units":9,"blurb":"The measurement and theoretical descriptions of the equilibrium properties of chemical systems ar..."},"06200":{"name":"Sophomore Research Project","number":"06200","units":0,"blurb":"Research projects under the direction of the Chemical Engineering faculty. The nature of the proj..."},"03730":{"name":"Advanced Genetics","number":"03730","units":12,"blurb":"This course considers selected current topics in genetics at an advanced level. Emphasis is on cl..."},"06361":{"name":"Unit Operations of Chemical Engineering","number":"06361","units":9,"blurb":"This course comprises many of the standard operations in chemical plants such as gas absorption, ..."},"09106":{"name":"Modern Chemistry II","number":"09106","units":10,"blurb":"This course provides an overview of thermodynamics, kinetics and chemical equilibrium. Topics inc..."},"03210":{"name":"Independent Study","number":"03210","units":0,"blurb":"Students will read papers from the original literature under the direction of a faculty member. S..."},"03252":{"name":"Introduction to Computational Cell Biology","number":"03252","units":6,"blurb":"This course presents an overview of important modeling and image analysis applications of compute..."},"06463":{"name":"Chemical Product Design","number":"06463","units":6,"blurb":"Computer-aided design of a chemical product. Course involves design of molecular structure, micro..."},"03124":{"name":"Modern Biology Laboratory","number":"03124","units":9,"blurb":"This laboratory is designed to introduce students to modern concepts in the biological sciences. ..."},"03116":{"name":"Phage Genomics Research","number":"03116","units":6,"blurb":"Spring Semester: The DNA sequences will be analyzed with bioinformatic tools and compared with th..."},"03445":{"name":"Undergraduate Research","number":"03445","units":0,"blurb":"Students may investigate research problems under the supervision of members of the faculty. Permi..."},"03409":{"name":"Special Topics","number":"03409","units":9,"blurb":"Note: This class is available only on the Qatar campus. This course covers the progress of stem c..."},"03362":{"name":"Cellular Neuroscience","number":"03362","units":9,"blurb":"Modern neuroscience is an interdisciplinary field that seeks to understand the function of the br..."},"03206":{"name":"Biomedical Engineering Laboratory","number":"03206","units":9,"blurb":"This laboratory course is designed to provide students with the ability to make measurements on a..."},"06363":{"name":"Transport Process Laboratory","number":"06363","units":9,"blurb":"Develop skills for proposing, designing, planning, implementing, interpreting, and communicating ..."},"09302":{"name":"Undergraduate Seminar IV","number":"09302","units":1,"blurb":"Students attend seminars presented by senior chemistry majors. Students provide peer evaluations ..."},"06300":{"name":"Junior Research Project","number":"06300","units":0,"blurb":"Research projects under the direction of the Chemical Engineering faculty. The nature of the proj..."},"09604":{"name":"Introduction to Chemical Kinetics","number":"09604","units":6,"blurb":"Empirical description of the time evolution of chemical reactions. Inductive derivation of kineti..."},"03900":{"name":"Doctoral Thesis Research","number":"03900","units":0,"blurb":"Doctoral Thesis Research consists of an independent investigation on a project selected from a ma..."},"09710":{"name":"Chemistry and Sustainability","number":"09710","units":12,"blurb":"This course aims to educate students in the foundations of systematic leadership for building a s..."},"03620":{"name":"Techniques in Electron Microscopy","number":"03620","units":9,"blurb":"This course is designed to teach basic methods in transmission electron microscopy to graduate an..."},"09105":{"name":"Introduction to Modern Chemistry I","number":"09105","units":10,"blurb":"This course begins with a very brief survey of some fundamental principles of chemistry and a pre..."},"03391":{"name":"Microbiology","number":"03391","units":9,"blurb":"The course provides introductory level molecular biology that is aimed for students from all disc..."},"03101":{"name":"Biological Sciences First Year Seminars","number":"03101","units":0,"blurb":"Various seminars are offered that introduce first-year students to current topics of modern biolo..."},"09218":{"name":"Organic Chemistry II","number":"09218","units":9,"blurb":"This course further develops many of the concepts introduced in Organic Chemistry I, 09217. Empha..."},"03161":{"name":"Molecules to Mind","number":"03161","units":9,"blurb":"This course provides a depth-first approach to understanding neuroscience. We will begin with a c..."},"03740":{"name":"Advanced Biochemistry","number":"03740","units":12,"blurb":"This is a special topics course in which selected topics in biochemistry will be analyzed in dept..."},"09714":{"name":"Advanced Organic Chemistry","number":"09714","units":12,"blurb":"This course will expose the students to modern methods of organic synthesis including insights in..."},"03126":{"name":"Cellular Response to the Environment","number":"03126","units":4,"blurb":"This laboratory course provides a multifaceted view of the cell, with the opportunity for new dis..."},"09322":{"name":"Laboratory IV: Molecular Spectroscopy and Dynamics","number":"09322","units":12,"blurb":"This laboratory course is devoted to physical chemistry experiments, which involve the use of mod..."},"09716":{"name":"Bioactive Natural Products","number":"09716","units":6,"blurb":"This mini-course is aimed at students with an interest in natural products research. Natural prod..."},"09502":{"name":"Organic Chemistry of Polymers","number":"09502","units":9,"blurb":"A study of the synthesis and reactions of high polymers. Emphasis is on practical polymer prepara..."},"09611":{"name":"Chemical Thermodynamics","number":"09611","units":6,"blurb":"A focused course on chemical thermodynamics. The basic thermodynamic functions will be introduced..."},"06720":{"name":"Advanced Process Systems Engineering","number":"06720","units":12,"blurb":"A general background on problems, methods, and tools for solving analysis and synthesis problems ..."},"06364":{"name":"Chemical Reaction Engineering","number":"06364","units":9,"blurb":"Fundamental concepts in the kinetic modeling of chemical reactions, the treatment and analysis of..."},"06100":{"name":"Introduction to Chemical Engineering","number":"06100","units":12,"blurb":"We equip students with creative engineering problem-solving techniques and fundamental chemical e..."},"06365":{"name":"Water Technology Innovation and Policy","number":"06365","units":9,"blurb":"Innovation in water technologies is necessary to confront profound water resource challenges faci..."},"06640":{"name":"Principles and Applications of Molecular Simulation","number":"06640","units":9,"blurb":"This course will introduce modern concepts and methods for simulating physical and thermodynamics..."},"03202":{"name":"Undergraduate Colloquium for Sophomores","number":"03202","units":0,"blurb":"Missing Course Description - please contact the teaching department."},"03747":{"name":"Proposal Preparation and Peer Review","number":"03747","units":4,"blurb":"The concise and clear presentation of an experimental research plan is an essential skill for res..."},"09455":{"name":"Honors Thesis","number":"09455","units":0,"blurb":"Students enrolled in the departmental honors program (B.S. with Departmental Honors or combined 4..."},"09348":{"name":"Inorganic Chemistry","number":"09348","units":10,"blurb":"The focus of this class is understanding the properties of the elements and of the inorganic comp..."},"03390":{"name":"Molecular and Cellular Immunology","number":"03390","units":9,"blurb":"This course offers the student a comprehensive view of modern immunology at the molecular and cel..."},"03127":{"name":"How Biological Experiments Work - A Project Course","number":"03127","units":9,"blurb":"The goal of this course is to provide an understanding of the nuts and bolts of biological experi..."},"06464":{"name":"Chemical Engineering Process Control","number":"06464","units":9,"blurb":"This course presents basic concepts of process dynamics and feedback control. Included are select..."},"09202":{"name":"Undergraduate Seminar II: Safety and Environmental Issues for Chemists","number":"09202","units":1,"blurb":"Issues and topics focused on laboratory safety are discussed in this class. The topics are select..."},"03392":{"name":"Microbiology Laboratory","number":"03392","units":6,"blurb":"This is an upper level biology course for students who have taken or are currently taking the Mic..."},"09435":{"name":"Independent Study Chemistry","number":"09435","units":0,"blurb":"The course allows students to earn academic credit for concentrated study in a topic area develop..."},"06261":{"name":"Fluid Mechanics","number":"06261","units":9,"blurb":"The principles of fluid mechanics as applied to engineering, including unit operations, are discu..."}};
var lookup={};
_.mixin({
	omitAll:function(data,arr){_.each(arr,function(k,v){data=_.omit(data,k);});return data;},
	findOr:function(data,arr){
		var res=[];
		_.each(arr,function(k,v){
			res.push(_.filter(data,_.flow(_.property(v),RegExp.prototype.test),k));
			});
			return _.flatten(res);}
});
_.partialRight(RegExp.prototype.test)

_.map(courses,function(v,k){console.log(k);_.set(courses,k+'.dept',_.get(courses,k+'.number').substr(0,2));});
// console.log(courses);
// courses=_.omitAll(courses,['desc','meetings']);
// console.log('Cou',courses);
// _.map(courses,function(d,k){lookup[k]=d});
