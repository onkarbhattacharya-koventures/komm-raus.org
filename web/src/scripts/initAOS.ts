import AOS from 'aos';
import 'aos/dist/aos.css';

export default function initAOS() {
  AOS.init({ duration: 600, easing: 'ease-in-out', once: true });
}
