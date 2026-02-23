export function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <p className="text-sm text-muted-foreground mb-2">404</p>
      <h1 className="text-2xl font-semibold tracking-tight mb-2">
        Page not found
      </h1>
      <p className="text-sm text-muted-foreground mb-6 max-w-sm">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-flex items-center rounded-md border border-input bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
      >
        Go back home
      </a>
    </main>
  );
}
