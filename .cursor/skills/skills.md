
# Cursor Agent Skills - Angular Standalone (CV Serverless)

## Angular Standalone
- Use standalone components only
- Avoid NgModules
- Use `bootstrapApplication`
- Prefer functional APIs

## Signals First
- Prefer signals over RxJS
- Use `signal()` for state
- Use `computed()` for derived state
- Use `effect()` only for side effects
- Avoid manual subscriptions

## Component Design
- Small, reusable components
- Separate container/presentational responsibilities
- No business logic in templates
- Strongly typed `@Input()` and `@Output()`

## Performance
- Use `ChangeDetectionStrategy.OnPush`
- Use `trackBy` in loops
- Avoid unnecessary re-renders
- Lazy load routes/components when it makes sense
- Optimize bundle size

## Serverless Mindset
- Prefer static JSON data
- Avoid backend dependencies
- Optimize for static deployment
- Fast load and SEO-friendly behavior

## UI/UX
- Semantic HTML
- Accessibility basics (ARIA, contrast)
- Mobile-first responsive design
- Minimal, clean UI

## Clean Code
- No `any`
- Strict typing
- Small functions
- Early returns
- Self-documenting code

## API Handling
- API logic in services only (when applicable)
- Use `async/await`
- Handle errors
- Validate data

## State Management
- Use signals
- Avoid NgRx
- Keep state local by default

## Tooling
- Follow Angular CLI standards
- Use ESLint/Prettier
- Keep dependencies minimal
