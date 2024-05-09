"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

// When does the PROG200 course start?

function findCourseID(courseId) {
    for (let index = 0; index < courses.length; index++) {
         const course = courses[index]
         if (course.CourseId == courseId) {
            console.log(course.StartDate);
         }
    }
}

findCourseID("PROG200")



// let course = courses[1]
// console.log(course.StartDate);


// What is the title of the PROJ500 course?

function findCourseTitle(courseId) {
    for (let index = 0; index < courses.length; index++) {
         const course = courses[index]
         if (course.CourseId == courseId) {
            console.log(course.Title);
         }
    }
}

findCourseTitle("PROJ500")


// What are the titles of the courses that cost $50 or less?

let cheapCourseTitles = [];
for (let index = 0; index < courses.length; index++) {
  const course = courses[index];
  const fee = Number(course.Fee);
  if (fee <= 50) {
    cheapCourseTitles.push(course);
  }
}
console.log("These are the titles of the courses that cost $50 or less");
console.log(cheapCourseTitles);


// What classes meet in "Classroom 1"?

let classroomCourseTitles = [];
for (let index = 0; index < courses.length; index++) {
  const course = courses[index];
  const Location = Number(course.Location);
  if (Location == 1) {
    cheapCourseTitles.push(course);
  }
}
console.log(classroomCourseTitles);