# Angular-Signals-Theme

## Signal as Reactive

- Signals Rule! Say Goodbye to ngClass for Dynamic Themes. Re-imagine Dynamic Theming with Angular Signals
- Dynamic Themes, Simplified: The Power of Angular Signals. Upgrade Your Theming Game to Reactive Style Changes with Angular Signals
- Simplify and Enhance Your Styling: Go Reactive with Angular Signals. Boost Theme Flexibility: Leverage Angular Signals for Dynamic Styling

## Goal

- Streamlined Service: Leveraging Angular Signals, we simplified our service by employing the signal function to create a theme signal, eliminating the necessity for a BehaviorSubject.
- Reactive Theme Switching: Within the component, we now have direct access to the theme through the signal. This guarantees that our component template promptly responds to any changes in the theme.
- Coordinated State Access: Using `themeService.themeSignal()`, we can directly retrieve the current theme, ensuring seamless synchronization of the theme state throughout the application.

## Demo
[Angular Signal Theme](https://stackblitz.com/edit/stackblitz-starters-f2lzzc)

