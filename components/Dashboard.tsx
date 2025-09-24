import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ThemeToggle } from './ThemeToggle';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useAuth } from '../contexts/AuthContext';
import { useCourses } from '../contexts/CourseContext';
import { LogOut, Monitor, BookOpen, Users, Zap, Code, TrendingUp, Play, Clock } from 'lucide-react';

interface DashboardProps {
  onCourseSelect: (courseId: string) => void;
}

export function Dashboard({ onCourseSelect }: DashboardProps) {
  const { user, logout } = useAuth();
  const { courses } = useCourses();

  const getCourseIcon = (courseId: string) => {
    switch (courseId) {
      case 'digital-literacy':
        return Monitor;
      case 'coding-programming':
        return Code;
      case 'digital-marketing':
        return TrendingUp;
      case 'sustainable-tech':
        return Zap;
      default:
        return BookOpen;
    }
  };

  const getCourseImage = (courseId: string) => {
    switch (courseId) {
      case 'digital-literacy':
        return 'https://images.unsplash.com/photo-1758612898304-1a6bb546ac44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGl0ZXJhY3klMjBjb21wdXRlciUyMGxlYXJuaW5nfGVufDF8fHx8MTc1ODYzNDgxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
      case 'coding-programming':
        return 'https://images.unsplash.com/photo-1556792189-55769c8dfbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc1ODYyODgwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
      case 'digital-marketing':
        return 'https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc29jaWFsJTIwbWVkaWF8ZW58MXx8fHwxNzU4NTgzMjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
      case 'sustainable-tech':
        return 'https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NTg1NTI1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
      default:
        return '';
    }
  };

  const totalCourses = courses.length;
  const registeredCourses = courses.filter(course => course.isRegistered).length;
  const completedCourses = courses.filter(course => course.progress === 100).length;
  const averageProgress = courses.reduce((acc, course) => acc + course.progress, 0) / totalCourses;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                  <Monitor className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">DEH Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Digital Empowerment Hub</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="outline" onClick={logout} className="flex items-center space-x-2">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h2>
          <p className="text-muted-foreground text-lg">
            Continue your digital learning journey with DEH
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Courses</p>
                  <p className="text-2xl font-bold">{totalCourses}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Enrolled</p>
                  <p className="text-2xl font-bold">{registeredCourses}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-green-500/10 text-green-500">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold">{completedCourses}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-orange-500/10 text-orange-500">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg Progress</p>
                  <p className="text-2xl font-bold">{Math.round(averageProgress)}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Courses Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Available Courses</h3>
            <Badge variant="secondary" className="text-sm">
              {courses.filter(course => course.isRegistered).length} enrolled
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course) => {
              const Icon = getCourseIcon(course.id);
              const hasNewContent = !course.isRegistered;
              const courseImage = getCourseImage(course.id);
              
              return (
                <Card 
                  key={course.id} 
                  className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer"
                  onClick={() => onCourseSelect(course.id)}
                >
                  {/* Course Image with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={courseImage}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                    
                    {/* Status badges in top corners */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      {course.isRegistered ? (
                        <Badge variant="secondary" className="bg-green-500/90 text-white border-none">
                          Enrolled
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                          Available
                        </Badge>
                      )}
                      {hasNewContent && (
                        <Badge variant="destructive" className="text-xs bg-red-500/90 text-white border-none animate-pulse">
                          New
                        </Badge>
                      )}
                    </div>

                    {/* Video indicator */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 border border-white/20">
                        <Play className="h-4 w-4 text-white fill-white" />
                      </div>
                    </div>

                    {/* Course icon in bottom left */}
                    <div className="absolute bottom-4 left-4">
                      <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="space-y-3 pb-4">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {course.title}
                    </CardTitle>
                    
                    <CardDescription className="text-sm leading-relaxed">
                      {course.description}
                    </CardDescription>

                    {/* Course metadata */}
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-3 w-3" />
                        <span>{course.chapters.length} chapters</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>Self-paced</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 pt-0">
                    {course.isRegistered && (
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium text-primary">{course.progress}%</span>
                        </div>
                        <Progress 
                          value={course.progress} 
                          className="h-2 bg-muted group-hover:bg-muted/80 transition-colors" 
                        />
                        <p className="text-xs text-muted-foreground">
                          {course.chapters.filter(ch => ch.isCompleted).length} of {course.chapters.length} chapters completed
                        </p>
                      </div>
                    )}

                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onCourseSelect(course.id);
                      }}
                      className="w-full bg-primary/90 hover:bg-primary text-white shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300 transform group-hover:scale-105"
                      size="lg"
                    >
                      <div className="flex items-center space-x-2">
                        <Play className="h-4 w-4" />
                        <span>{course.isRegistered ? 'Continue Learning' : 'View Course'}</span>
                      </div>
                    </Button>
                  </CardContent>

                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500 pointer-events-none" />
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 to-transparent" />
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}