import React, { createContext, useContext, useEffect, useState } from 'react';

export interface Course {
  id: string;
  title: string;
  description: string;
  chapters: Chapter[];
  isRegistered: boolean;
  progress: number;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface CourseContextType {
  courses: Course[];
  registerForCourse: (courseId: string) => void;
  toggleChapterCompletion: (courseId: string, chapterId: string) => void;
  getCourse: (courseId: string) => Course | undefined;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

const initialCourses: Course[] = [
  {
    id: 'digital-literacy',
    title: 'Digital Literacy Basics',
    description: 'Learn fundamental digital skills including internet navigation, email, and basic computer operations essential for modern life.',
    isRegistered: false,
    progress: 0,
    chapters: [
      { id: 'intro-computers', title: 'Introduction to Computers', description: 'Basic computer components and operations', isCompleted: false },
      { id: 'internet-basics', title: 'Internet Basics', description: 'Web browsing and online safety', isCompleted: false },
      { id: 'email-communication', title: 'Email Communication', description: 'Creating and managing email accounts', isCompleted: false },
      { id: 'digital-citizenship', title: 'Digital Citizenship', description: 'Responsible online behavior and privacy', isCompleted: false },
    ]
  },
  {
    id: 'coding-programming',
    title: 'Coding & Programming Fundamentals',
    description: 'Start your programming journey with HTML, CSS, JavaScript, and basic software development principles.',
    isRegistered: false,
    progress: 0,
    chapters: [
      { id: 'html-basics', title: 'HTML Fundamentals', description: 'Structure web pages with HTML', isCompleted: false },
      { id: 'css-styling', title: 'CSS Styling', description: 'Design and layout with CSS', isCompleted: false },
      { id: 'javascript-intro', title: 'JavaScript Introduction', description: 'Interactive programming with JavaScript', isCompleted: false },
      { id: 'web-development', title: 'Web Development Projects', description: 'Build your first websites', isCompleted: false },
      { id: 'programming-logic', title: 'Programming Logic', description: 'Problem-solving and algorithms', isCompleted: false },
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Freelancing',
    description: 'Develop skills in social media marketing, content creation, and freelancing to build your online career.',
    isRegistered: false,
    progress: 0,
    chapters: [
      { id: 'social-media-marketing', title: 'Social Media Marketing', description: 'Build brand presence on social platforms', isCompleted: false },
      { id: 'content-creation', title: 'Content Creation', description: 'Create engaging digital content', isCompleted: false },
      { id: 'freelancing-basics', title: 'Freelancing Fundamentals', description: 'Start your freelancing career', isCompleted: false },
      { id: 'client-management', title: 'Client Management', description: 'Professional client relationships', isCompleted: false },
    ]
  },
  {
    id: 'sustainable-tech',
    title: 'Sustainable Tech & Solar Hubs',
    description: 'Explore renewable energy technology, solar power systems, and sustainable technology solutions for communities.',
    isRegistered: false,
    progress: 0,
    chapters: [
      { id: 'renewable-energy', title: 'Renewable Energy Basics', description: 'Understanding sustainable energy sources', isCompleted: false },
      { id: 'solar-technology', title: 'Solar Technology', description: 'Solar panel systems and installation', isCompleted: false },
      { id: 'energy-storage', title: 'Energy Storage Solutions', description: 'Battery systems and grid management', isCompleted: false },
      { id: 'community-hubs', title: 'Community Energy Hubs', description: 'Building sustainable community centers', isCompleted: false },
      { id: 'maintenance-repair', title: 'Maintenance & Repair', description: 'System upkeep and troubleshooting', isCompleted: false },
    ]
  }
];

export function CourseProvider({ children }: { children: React.ReactNode }) {
  const [courses, setCourses] = useState<Course[]>(initialCourses);

  useEffect(() => {
    const savedCourses = localStorage.getItem('deh-courses');
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('deh-courses', JSON.stringify(courses));
  }, [courses]);

  const registerForCourse = (courseId: string) => {
    setCourses(prev => prev.map(course => 
      course.id === courseId 
        ? { ...course, isRegistered: true }
        : course
    ));
  };

  const toggleChapterCompletion = (courseId: string, chapterId: string) => {
    setCourses(prev => prev.map(course => {
      if (course.id === courseId) {
        const updatedChapters = course.chapters.map(chapter =>
          chapter.id === chapterId 
            ? { ...chapter, isCompleted: !chapter.isCompleted }
            : chapter
        );
        
        const completedChapters = updatedChapters.filter(chapter => chapter.isCompleted).length;
        const progress = Math.round((completedChapters / updatedChapters.length) * 100);
        
        return { ...course, chapters: updatedChapters, progress };
      }
      return course;
    }));
  };

  const getCourse = (courseId: string) => {
    return courses.find(course => course.id === courseId);
  };

  return (
    <CourseContext.Provider value={{ courses, registerForCourse, toggleChapterCompletion, getCourse }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourses() {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourses must be used within a CourseProvider');
  }
  return context;
}