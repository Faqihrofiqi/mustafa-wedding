---
name: framer-motion
description: >-
  Panduan dan standar animasi kelas industri menggunakan prinsip Framer Motion:
  fisika pegas (spring physics), transisi tata letak (layout animations),
  gestur interaktif, efek scroll-driven, serta konversi animasi fluida ke CSS/Web Animations API.
---

# Framer Motion & Fluid Animation Mastery

Skill ini menyediakan panduan lengkap untuk merancang, mengimplementasikan, dan mengoptimalkan animasi antarmuka modern dengan gerakan yang halus, alami, responsif, dan bebas jeda (*zero jank*).

---

## 1. Prinsip Utama Gerakan Alami (Natural Physics)

### 1.1 Spring Physics vs Duration Curves
- **Spring Animation (Default untuk Interaksi User):**
  Hindari kurva linier (`linear`) untuk interaksi manusia. Gunakan pegas (*spring physics*) berbasis `stiffness`, `damping`, dan `mass` agar gerakan terasa memiliki bobot dan inersia:
  - **Quick & Snappy (Tombol / Klik / Toggle):** `stiffness: 400`, `damping: 25`, `mass: 0.5`
  - **Smooth & Elegant (Modal / Card Hover / Reveal):** `stiffness: 260`, `damping: 20`
  - **Bouncy & Playful (Badge / Notifikasi / Like Icon):** `stiffness: 500`, `damping: 15`

### 1.2 Aturan Transformasi Performa Tinggi (GPU-Accelerated)
Hanya animasikan properti yang diproses pada lapisan GPU komposit tanpa memicu reflow/repaint:
- ✅ **Aman (60-120 FPS):** `transform` (`translateX`, `translateY`, `scale`, `rotate`), `opacity`, `filter`.
- ❌ **Hindari Animasi Kontinyu:** `width`, `height`, `top`, `left`, `margin`, `padding` (memicu layout thrashing).

---

## 2. Pola Implementasi (React Framer Motion)

### 2.1 Variants & Staggered Reveal
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};
```

### 2.2 Shared Element Transition (`layoutId`)
Gunakan `layoutId` untuk menghubungkan dua elemen berbeda yang mewakili konten yang sama saat berganti state:
```jsx
{isSelected && (
  <motion.div
    layoutId="active-indicator"
    className="active-pill"
    transition={{ type: "spring", stiffness: 380, damping: 30 }}
  />
)}
```

### 2.3 Scroll-Driven & Parallax Animations
```jsx
import { useScroll, useTransform, motion } from "framer-motion";

const { scrollYProgress } = useScroll({
  target: targetRef,
  offset: ["start end", "end start"]
});

const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
```

---

## 3. Porting Prinsip Framer Motion ke Vanilla Web (HTML5/CSS3/JS)

Ketika membangun proyek statis atau vanilla web tanpa React, terjemahkan prinsip Framer Motion dengan:

### 3.1 Custom Cubic-Bezier Pegas (*Spring Easing*)
Gunakan kurva cubic-bezier yang meniru efek hentakan pegas:
```css
/* Snappy Spring */
--ease-spring-snappy: cubic-bezier(0.175, 0.885, 0.32, 1.275);
/* Soft Spring */
--ease-spring-soft: cubic-bezier(0.34, 1.56, 0.64, 1);
/* Smooth Luxury */
--ease-luxury: cubic-bezier(0.16, 1, 0.3, 1);
```

### 3.2 Micro-Interactions Hover & Tap
```css
.interactive-element {
  transition: transform 0.3s var(--ease-spring-snappy), box-shadow 0.3s ease;
  will-change: transform;
}

.interactive-element:hover {
  transform: translateY(-4px) scale(1.02);
}

.interactive-element:active {
  transform: translateY(0) scale(0.98);
}
```

### 3.3 Aksesibilitas (`prefers-reduced-motion`)
Selalu sediakan fallback untuk pengguna dengan sensitivitas gerak:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
