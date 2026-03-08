import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function Features() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Features</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to build modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>⚡ Fast</CardTitle>
              <CardDescription>Optimized for performance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built with Next.js for lightning-fast page loads and optimal user experience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎨 Beautiful</CardTitle>
              <CardDescription>Modern design system</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                shadcn/ui components with Tailwind CSS for stunning, responsive interfaces.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🔧 Flexible</CardTitle>
              <CardDescription>Easy to customize</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Fully customizable components and styling to match your brand perfectly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}