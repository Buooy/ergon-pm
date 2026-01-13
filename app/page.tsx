import { Dashboard } from '@/components/Dashboard'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background decorative elements */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:px-8 lg:py-16 relative z-10">
        {/* Hero header with editorial styling */}
        <header className="mb-8 sm:mb-12 md:mb-16 animate-slide-in-up">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/5 border border-primary/10">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-primary">AI-Powered Product Management</span>
          </div>

          <h1 className="display-xl mb-3 sm:mb-4 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Ergon
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Transform scattered context into professional PRDs.
            Manage projects, synthesize information, and generate
            publication-ready documents with AI precision.
          </p>

          {/* Decorative line */}
          <div className="mt-6 sm:mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </header>

        <Dashboard />
      </div>
    </main>
  )
}
