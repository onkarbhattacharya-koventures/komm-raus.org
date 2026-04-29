declare module 'aos' {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
  }
  
  interface AOS {
    init(options?: AosOptions): void;
  }
  
  const AOS: AOS;
  export default AOS;
}