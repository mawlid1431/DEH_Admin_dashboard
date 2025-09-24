import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Checkbox } from './ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ThemeToggle } from './ThemeToggle';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useAuth } from '../contexts/AuthContext';
import { useCourses } from '../contexts/CourseContext';
import { ArrowLeft, Monitor, CheckCircle, Circle, Book, Clock, Award, ChevronDown, ChevronRight, Play, Code, TrendingUp, Zap } from 'lucide-react';

interface CourseDetailsProps {
  courseId: string;
  onBack: () => void;
}

export function CourseDetails({ courseId, onBack }: CourseDetailsProps) {
  const { logout } = useAuth();
  const { getCourse, registerForCourse, toggleChapterCompletion } = useCourses();
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set());
  
  const course = getCourse(courseId);

  const toggleChapterExpansion = (chapterId: string) => {
    const newExpanded = new Set(expandedChapters);
    if (newExpanded.has(chapterId)) {
      newExpanded.delete(chapterId);
    } else {
      newExpanded.add(chapterId);
    }
    setExpandedChapters(newExpanded);
  };

  const getCourseTheme = (courseId: string) => {
    switch (courseId) {
      case 'digital-literacy':
        return {
          primary: 'from-blue-500 to-cyan-500',
          secondary: 'bg-blue-500/10 text-blue-600',
          accent: 'border-blue-500/20 bg-blue-500/5',
          icon: Monitor
        };
      case 'coding-programming':
        return {
          primary: 'from-purple-500 to-pink-500',
          secondary: 'bg-purple-500/10 text-purple-600',
          accent: 'border-purple-500/20 bg-purple-500/5',
          icon: Code
        };
      case 'digital-marketing':
        return {
          primary: 'from-orange-500 to-red-500',
          secondary: 'bg-orange-500/10 text-orange-600',
          accent: 'border-orange-500/20 bg-orange-500/5',
          icon: TrendingUp
        };
      case 'sustainable-tech':
        return {
          primary: 'from-green-500 to-emerald-500',
          secondary: 'bg-green-500/10 text-green-600',
          accent: 'border-green-500/20 bg-green-500/5',
          icon: Zap
        };
      default:
        return {
          primary: 'from-gray-500 to-slate-500',
          secondary: 'bg-gray-500/10 text-gray-600',
          accent: 'border-gray-500/20 bg-gray-500/5',
          icon: Book
        };
    }
  };

  const getChapterImage = (courseId: string, chapterIndex: number) => {
    const imageMap: Record<string, string[]> = {
      'digital-literacy': [
        'https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGJhc2ljcyUyMGxlYXJuaW5nfGVufDF8fHx8MTc1ODYzNTE1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1592760542125-4d0de08e74fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5ldCUyMGJyb3dzaW5nJTIwb25saW5lfGVufDF8fHx8MTc1ODYzNTE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1631248052734-dce4d3ee91b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNzU4NjM1MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY2l0aXplbnNoaXB8ZW58MXx8fHwxNzU4NjM1MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      'coding-programming': [
        'https://images.unsplash.com/photo-1576145790918-bdddd6d5ad21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodG1sJTIwY3NzJTIwd2ViJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzU4NjMzMzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjc3MlMjBzdHlsaW5nfGVufDF8fHx8MTc1ODYzNTE4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1653387319597-84bde7e5368e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXZhc2NyaXB0JTIwcHJvZ3JhbW1pbmclMjBjb2RlfGVufDF8fHx8MTc1ODYzNTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3RzfGVufDF8fHx8MTc1ODYzNTE4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1627398242454-45a1465c2479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGxvZ2ljfGVufDF8fHx8MTc1ODYzNTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      'digital-marketing': [
        'https://images.unsplash.com/photo-1572814392266-1620040c58be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NTg2MDgxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRpb258ZW58MXx8fHwxNzU4NjM1MTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1674291700118-f3c7ee84843b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlbGFuY2luZyUyMHJlbW90ZSUyMHdvcmt8ZW58MXx8fHwxNzU4NjM1MTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1521790361543-f645cf042ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGllbnQlMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc1ODYzNTE5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      'sustainable-tech': [
        'https://images.unsplash.com/photo-1735584496549-7532b6f3afdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1ODU0Njk3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJlbmV3YWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NTg1NTI1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1662601680176-b797a4417c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGJhdHRlcnklMjBlbmVyZ3klMjBzdG9yYWdlfGVufDF8fHx8MTc1ODU1MTA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1508515803269-23c29252d9ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlbmVyZ3klMjBodWJzfGVufDF8fHx8MTc1ODYzNTIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWludGVuYW5jZSUyMHJlcGFpcnxlbnwxfHx8fDE3NTg2MzUyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    };
    
    return imageMap[courseId]?.[chapterIndex] || '';
  };

  const theme = getCourseTheme(courseId);
  const ThemeIcon = theme.icon;

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Course not found</h2>
          <Button onClick={onBack}>Back to Dashboard</Button>
        </div>
      </div>
    );
  }

  const completedChapters = course.chapters.filter(chapter => chapter.isCompleted).length;
  const totalChapters = course.chapters.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Themed background overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.primary} opacity-5 pointer-events-none`} />
      
      {/* Header */}
      <header className="relative border-b border-border/50 bg-card/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={onBack} 
                className="p-2 hover:bg-primary/10 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${theme.primary} text-white shadow-lg`}>
                  <ThemeIcon className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">DEH Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Digital Empowerment Hub</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${theme.primary} text-white shadow-xl`}>
                  <ThemeIcon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {course.title}
                  </h2>
                  <p className="text-muted-foreground text-xl leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                {course.isRegistered ? (
                  <Badge className={`${theme.secondary} border-0 px-4 py-2 text-sm flex items-center space-x-2`}>
                    <CheckCircle className="h-4 w-4" />
                    <span>Enrolled</span>
                  </Badge>
                ) : (
                  <Badge variant="outline" className="px-4 py-2 text-sm">Not Enrolled</Badge>
                )}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Book className="h-4 w-4" />
                  <span>{totalChapters} chapters</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Self-paced</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Play className="h-4 w-4" />
                  <span>Interactive content</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Card */}
          {course.isRegistered && (
            <Card className={`${theme.accent} border-2 mb-6 shadow-lg backdrop-blur-sm`}>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${theme.primary} text-white shadow-lg`}>
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Course Progress</h3>
                      <p className="text-muted-foreground">
                        {completedChapters} of {totalChapters} chapters completed
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      {course.progress}%
                    </p>
                    <p className="text-sm text-muted-foreground">Complete</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Progress value={course.progress} className="h-4 bg-muted/50" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Started</span>
                    <span>{course.progress === 100 ? 'Completed!' : 'In Progress'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Enrollment Action */}
          {!course.isRegistered && (
            <Card className={`${theme.accent} border-2 mb-6 shadow-xl backdrop-blur-sm`}>
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${theme.primary} text-white shadow-lg`}>
                      <Play className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Ready to start learning?</h3>
                      <p className="text-muted-foreground text-lg">
                        Enroll in this course to access all chapters and track your progress.
                      </p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => registerForCourse(course.id)}
                    className={`ml-4 bg-gradient-to-r ${theme.primary} text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-3 text-lg`}
                    size="lg"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Chapters Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Course Chapters
            </h3>
            <Badge variant="outline" className="text-sm px-4 py-2">
              {course.chapters.length} chapters
            </Badge>
          </div>
          
          <div className="space-y-6">
            {course.chapters.map((chapter, index) => {
              const isExpanded = expandedChapters.has(chapter.id);
              const chapterImage = getChapterImage(courseId, index);
              
              return (
                <Collapsible
                  key={chapter.id}
                  open={isExpanded}
                  onOpenChange={() => toggleChapterExpansion(chapter.id)}
                >
                  <Card 
                    className={`group border-border/50 backdrop-blur-sm transition-all duration-500 ${
                      course.isRegistered 
                        ? 'hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 cursor-pointer hover:-translate-y-1' 
                        : 'opacity-60'
                    } ${isExpanded ? 'ring-2 ring-primary/20 shadow-xl' : ''}`}
                  >
                    <CollapsibleTrigger asChild>
                      <CardHeader className="pb-4 cursor-pointer">
                        <div className="flex items-center space-x-6">
                          {/* Chapter number with theme styling */}
                          <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${theme.primary} text-white shadow-lg text-lg font-bold group-hover:scale-110 transition-transform duration-300`}>
                            {index + 1}
                          </div>
                          
                          {/* Chapter image */}
                          <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <ImageWithFallback
                              src={chapterImage}
                              alt={chapter.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                            
                            {/* Play icon overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                                <Play className="h-4 w-4 text-white fill-white" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Chapter content */}
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                                {chapter.title}
                              </CardTitle>
                              <div className="flex items-center space-x-4">
                                {/* Progress controls for enrolled users */}
                                {course.isRegistered && (
                                  <div className="flex items-center space-x-3">
                                    <Checkbox
                                      checked={chapter.isCompleted}
                                      onCheckedChange={(_checked) => {
                                        toggleChapterCompletion(course.id, chapter.id);
                                      }}
                                      className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500 w-5 h-5"
                                    />
                                    {chapter.isCompleted ? (
                                      <CheckCircle className="h-6 w-6 text-green-500 animate-pulse" />
                                    ) : (
                                      <Circle className="h-6 w-6 text-muted-foreground" />
                                    )}
                                  </div>
                                )}
                                
                                {/* Expand/collapse indicator */}
                                <div className="transition-transform duration-300">
                                  {isExpanded ? (
                                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                                  ) : (
                                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <CardDescription className="text-base leading-relaxed mb-3">
                              {chapter.description}
                            </CardDescription>
                            
                            {/* Chapter metadata */}
                            <div className="flex items-center space-x-4">
                              {chapter.isCompleted && (
                                <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-xs">
                                  ✓ Completed
                                </Badge>
                              )}
                              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                <Play className="h-3 w-3" />
                                <span>Interactive content</span>
                              </div>
                              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>15-30 min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="transition-all duration-500 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                      <CardContent className="pt-0 pb-6">
                        <div className="ml-[7.5rem] space-y-4">
                          {course.isRegistered ? (
                            <div className={`p-6 rounded-xl ${theme.accent} border transition-all duration-300`}>
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-semibold text-lg">Chapter Content</h4>
                                  <Badge 
                                    variant={chapter.isCompleted ? "default" : "secondary"}
                                    className={chapter.isCompleted ? "bg-green-500 text-white" : ""}
                                  >
                                    {chapter.isCompleted ? 'Completed' : 'Not Started'}
                                  </Badge>
                                </div>
                                
                                <p className="text-muted-foreground leading-relaxed">
                                  This chapter includes interactive lessons, hands-on exercises, and practical examples 
                                  to help you master {chapter.title.toLowerCase()}. Click the checkbox above to mark 
                                  your progress as you work through the material.
                                </p>
                                
                                <div className="flex items-center space-x-4 pt-2">
                                  <Button 
                                    size="sm" 
                                    className={`bg-gradient-to-r ${theme.primary} text-white shadow-md hover:shadow-lg transition-all duration-300`}
                                  >
                                    <Play className="h-4 w-4 mr-2" />
                                    Start Chapter
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    Download Resources
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="p-6 rounded-xl border-2 border-dashed border-muted-foreground/20 text-center">
                              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                                <Circle className="h-5 w-5" />
                                <span>Enroll in this course to access chapter content</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              );
            })}
          </div>
        </div>

        {/* Course Completion */}
        {course.isRegistered && course.progress === 100 && (
          <Card className="border-2 border-green-500/50 bg-gradient-to-br from-green-500/10 to-emerald-500/5 mt-12 shadow-2xl">
            <CardContent className="p-10 text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-2xl animate-pulse">
                  <Award className="h-12 w-12" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Congratulations!
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                You have successfully completed the <span className="font-semibold text-foreground">{course.title}</span> course. 
                Keep up the great work on your digital learning journey!
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Button 
                  onClick={onBack}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Back to Dashboard
                </Button>
                <Button variant="outline">
                  Download Certificate
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Back to Dashboard for non-completed courses */}
        {(!course.isRegistered || course.progress < 100) && (
          <div className="flex justify-center mt-12">
            <Button 
              onClick={onBack}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg hover:bg-primary/5 transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}