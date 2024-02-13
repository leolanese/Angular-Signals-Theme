# Angular-Signals-Theme

## Goal

- Streamlined Service: Leveraging Angular Signals, we simplified our service by employing the signal function to create a theme signal, eliminating the necessity for a BehaviorSubject.
- Reactive Theme Switching: Within the component, we now have direct access to the theme through the signal. This guarantees that our component template promptly responds to any changes in the theme.
- Coordinated State Access: Utilizing themeService.themeSignal(), we can directly retrieve the current theme, ensuring seamless synchronization of the theme state throughout the application.




## Demo
[Angular Signal Theme](https://stackblitz.com/edit/stackblitz-starters-f2lzzc)
