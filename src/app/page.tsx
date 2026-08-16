"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Trophy,
  Users,
  Calendar,
  Shield,
  Zap,
  Target,
  Clock,
  MapPin,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Menu,
  X,
  ExternalLink,
  Award,
  Sparkles,
  MessageCircle,
} from "lucide-react";

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState("all");
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const galleryItems = [
    {
      src: "/img/DSCF0436.jpg",
      title: "Glorias Championship Squad",
      desc: "Kekompakan tim basket putra & putri SMK Pasundan 2 Banjaran.",
      category: "team",
    },
    {
      src: "/img/DSCF0493.jpg",
      title: "Tactical Execution & Defense",
      desc: "Evaluasi strategi dan pola pertahanan intensif di lapangan.",
      category: "match",
    },
    {
      src: "/img/DSCF0492.jpg",
      title: "Strategic Offense Clinic",
      desc: "Latihan transisi cepat dan pergerakan bola rotasi penyerangan.",
      category: "training",
    },
    {
      src: "/img/DSCF0576.jpg",
      title: "Ball Handling Mastery",
      desc: "Penguasaan dribble presisi dan kontrol bola kecepatan tinggi.",
      category: "training",
    },
    {
      src: "/img/DSCF0451.jpg",
      title: "Pre-Game Mindset",
      desc: "Fokus dan kesiapan mental atlet sebelum memasuki arena laga.",
      category: "team",
    },
    {
      src: "/img/DSCF0447.jpg",
      title: "Youth Athlete Development",
      desc: "Pembinaan fisik dan disiplin bagi anggota generasi baru.",
      category: "training",
    },
    {
      src: "/img/DSCF0438.jpg",
      title: "Brotherhood Huddle",
      desc: "Satu tujuan, satu semangat membela almamater Pasundan 2.",
      category: "team",
    },
    {
      src: "/img/DSCF0503.jpg",
      title: "Fast Break & Layup Drills",
      desc: "Simulasi serangan balik kilat dan penyelesaian akhir tajam.",
      category: "match",
    },
    {
      src: "/img/DSCF0511.jpg",
      title: "Shooting Precision",
      desc: "Latihan tembakan perimeter dan free-throw akurasi tinggi.",
      category: "training",
    },
    {
      src: "/img/DSCF0442.jpg",
      title: "Rebound & Court Dominance",
      desc: "Duel udara dan pertahanan paint area yang kokoh.",
      category: "match",
    },
    {
      src: "/img/DSCF0572.jpg",
      title: "Transition Play",
      desc: "Kelincahan kaki dan koordinasi umpan cepat antar-posisi.",
      category: "training",
    },
    {
      src: "/img/DSCF0470.jpg",
      title: "Fitness & Athletic Conditioning",
      desc: "Peningkatan daya tahan kardio dan kekuatan fisik menyeluruh.",
      category: "training",
    },
  ];

  const filteredGallery =
    selectedGalleryCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedGalleryCategory);

  const faqs = [
    {
      q: "Bagaimana cara menghubungi atau bergabung dengan Glorias Basketball?",
      a: "Kamu bisa langsung mengirim pesan melalui DM Instagram resmi kami di @pasundan2basketball. Tim pengurus/official akan segera merespons seputar info jadwal latihan dan pendaftaran.",
    },
    {
      q: "Apakah siswa pemula yang belum bisa bermain basket boleh bergabung?",
      a: "Tentu saja! Glorias Basketball memiliki program pembinaan berjenjang mulai dari kelas dasar (Fundamental Drills & Ball Handling) hingga Tim Inti (Varsity). Siapa saja yang memiliki komitmen dan semangat belajar dipersilakan mendaftar.",
    },
    {
      q: "Kapan dan di mana jadwal latihan rutin Glorias Basketball?",
      a: "Latihan rutin diadakan 3-4 kali seminggu (Senin, Rabu, Jumat sore pukul 15:30 WIB dan Sabtu pagi pukul 08:00 WIB) bertempat di Lapangan Basket Utama SMK Pasundan 2 Banjaran.",
    },
    {
      q: "Kompetisi dan turnamen apa saja yang biasa diikuti oleh Glorias?",
      a: "Glorias Basketball aktif berkompetisi di turnamen antar-SMA/SMK se-Bandung Raya, Kejurda Pelajar, DBL Series, serta laga persahabatan/sparring berkala dengan sekolah-sekolah unggulan.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#07090E] text-slate-100 bg-court-pattern">
      {/* 🏀 TOP NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#07090E]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Logo & Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-[#ff5500] shadow-[0_0_15px_rgba(255,85,0,0.5)] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/img/Glorias.jpg"
                alt="Glorias Basketball Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl font-bold tracking-wider text-white">
                  GLORIAS
                </span>
                <span className="rounded bg-[#ff5500] px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-white">
                  P2B
                </span>
              </div>
              <p className="text-[11px] font-medium tracking-wide text-slate-400">
                SMK Pasundan 2 Banjaran
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#beranda"
              className="text-sm font-medium text-slate-300 transition hover:text-[#ff5500]"
            >
              Beranda
            </a>
            <a
              href="#tentang"
              className="text-sm font-medium text-slate-300 transition hover:text-[#ff5500]"
            >
              Tentang Kami
            </a>
            <a
              href="#program"
              className="text-sm font-medium text-slate-300 transition hover:text-[#ff5500]"
            >
              Program
            </a>
            <a
              href="#jadwal"
              className="text-sm font-medium text-slate-300 transition hover:text-[#ff5500]"
            >
              Jadwal
            </a>
            <a
              href="#galeri"
              className="text-sm font-medium text-slate-300 transition hover:text-[#ff5500]"
            >
              Galeri Aksi
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-slate-300 transition hover:text-[#ff5500]"
            >
              FAQ
            </a>
          </nav>

          {/* Right CTA (DM Instagram) */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://www.instagram.com/pasundan2basketball"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-[#ff5500] to-[#ff7722] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,85,0,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,85,0,0.7)] hover:scale-105"
            >
              <InstagramIcon className="h-4 w-4" />
              <span>DM Instagram</span>
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-white/10 bg-[#07090E]/95 px-6 py-5 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#beranda"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-base font-semibold text-slate-200 hover:text-[#ff5500]"
              >
                Beranda
              </a>
              <a
                href="#tentang"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-base font-semibold text-slate-200 hover:text-[#ff5500]"
              >
                Tentang Kami
              </a>
              <a
                href="#program"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-base font-semibold text-slate-200 hover:text-[#ff5500]"
              >
                Program Latihan
              </a>
              <a
                href="#jadwal"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-base font-semibold text-slate-200 hover:text-[#ff5500]"
              >
                Jadwal Lapangan
              </a>
              <a
                href="#galeri"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-base font-semibold text-slate-200 hover:text-[#ff5500]"
              >
                Galeri Aksi
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-base font-semibold text-slate-200 hover:text-[#ff5500]"
              >
                Tanya Jawab (FAQ)
              </a>
              <a
                href="https://www.instagram.com/pasundan2basketball"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#ff5500] py-3 text-center text-sm font-bold uppercase tracking-wider text-white"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>DM Instagram @pasundan2basketball</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 🏀 HERO SECTION */}
      <section
        id="beranda"
        className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
      >
        {/* Background Image with Dynamic Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/DSCF0436.jpg"
            alt="Glorias Basketball Team SMK Pasundan 2 Banjaran"
            fill
            priority
            className="object-cover object-center opacity-30 brightness-75 scale-105 transform transition duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/80 to-[#07090E]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#07090E]/50 to-[#07090E]" />
          {/* Subtle Orange Glow Ambient */}
          <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ff5500]/15 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5500]/40 bg-[#ff5500]/10 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#ff5500]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff7722]">
              Official Basketball Extracurricular • SMK Pasundan 2 Banjaran
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display mt-6 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">
            FORGED IN <span className="text-gradient-orange">GLORY</span>, <br className="hidden sm:block" />
            PLAYED WITH <span className="text-gradient-gold">PRIDE</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Membentuk atlet muda yang berdisiplin tinggi, berkarakter tangguh, dan menjunjung tinggi sportivitas demi meraih prestasi terbaik di setiap kejuaraan.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/pasundan2basketball"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#ff7722] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(255,85,0,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,85,0,0.8)]"
            >
              <InstagramIcon className="h-5 w-5" />
              <span>Hubungi via Instagram</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="#galeri"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40"
            >
              <span>Jelajahi Galeri</span>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </a>
          </div>

          {/* Live Stats Row */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            <div className="glass-panel rounded-2xl p-5 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#ff5500]/15 text-[#ff5500]">
                <Trophy className="h-5 w-5" />
              </div>
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                15+
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Trofi & Prestasi
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-5 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#f59e0b]/15 text-[#f59e0b]">
                <Users className="h-5 w-5" />
              </div>
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                40+
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Atlet Aktif
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-5 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#ff5500]/15 text-[#ff5500]">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                4x
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Sesi Latihan / Minggu
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-5 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#10b981]/15 text-[#10b981]">
                <Award className="h-5 w-5" />
              </div>
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                100%
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Team Brotherhood
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏀 ABOUT & CORE PILLARS */}
      <section id="tentang" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#090D16]/60">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff5500]">
              Identitas & Filosofi Tim
            </span>
            <h2 className="font-display mt-2 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
              Membangun Fondasi <span className="text-gradient-orange">Juara Sejati</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
              Glorias Basketball bukan sekadar ekstrakurikuler biasa, melainkan wadah pembinaan karakter, ketangguhan fisik, dan kekeluargaan yang solid di SMK Pasundan 2 Banjaran.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Pillar 1 */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff5500]/15 text-[#ff5500] mb-5">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                  Fundamental Mastery
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Pengasahan teknik dasar bola basket secara disiplin: ball handling presisi, akurasi tembakan, footwork, dan kelincahan passing.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#ff5500]">
                <CheckCircle2 className="h-4 w-4" />
                <span>Teknik Berstandar</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f59e0b]/15 text-[#f59e0b] mb-5">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                  Tactical Intelligence
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Pemahaman strategi pertandingan modern: rotasi zona pertahanan kokoh, fast break terorganisir, dan membaca ritme permainan lawan.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#f59e0b]">
                <CheckCircle2 className="h-4 w-4" />
                <span>Smart Basketball IQ</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff5500]/15 text-[#ff5500] mb-5">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                  Athletic Conditioning
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Pelatihan fisik intensif yang mencakup daya tahan kardio (endurance), kekuatan otot inti, kelincahan gerak, dan pencegahan cedera.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#ff5500]">
                <CheckCircle2 className="h-4 w-4" />
                <span>Kekuatan & Stamina Prima</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#10b981]/15 text-[#10b981] mb-5">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                  Brotherhood & Pride
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  Menanamkan rasa kebersamaan yang kokoh, sportivitas, etika bermain, dan kebanggaan membawa nama besar SMK Pasundan 2 Banjaran.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#10b981]">
                <CheckCircle2 className="h-4 w-4" />
                <span>Solidaritas Tanpa Batas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏀 PROGRAMS & TRAINING CURRICULUM */}
      <section id="program" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff5500]">
              Kurikulum & Program
            </span>
            <h2 className="font-display mt-2 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
              Program Pembinaan <span className="text-gradient-orange">Terstruktur</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
              Setiap sesi dirancang secara sistematis untuk mengembangkan potensi pemain dari tingkat pemula hingga atlet kompetisi.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-[#ff5500]/50 hover:-translate-y-2">
              <div className="relative h-48 w-full">
                <Image
                  src="/img/DSCF0503.jpg"
                  alt="Program Reguler & Fundamental"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/40 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-[#ff5500] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Kelas Dasar
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold uppercase text-white">
                  Fundamental & Ball Handling
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Fokus pada pembentukan teknik dasar: dribbling 2 tangan, lay-up presisi, passing variasi, dan footwork pertahanan.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#ff5500]" />
                    <span>Drill bola 2 tangan & cone dribble</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#ff5500]" />
                    <span>Shooting form & free throw release</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-[#ff5500]/50 hover:-translate-y-2">
              <div className="relative h-48 w-full">
                <Image
                  src="/img/DSCF0492.jpg"
                  alt="Varsity Squad & Taktik"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/40 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-[#f59e0b] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Tim Inti
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold uppercase text-white">
                  Varsity Squad & Game IQ
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Sesi khusus skuad turnamen: simulasi pertandingan, eksekusi set play, full-court press, dan adaptasi strategi lawan.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#f59e0b]" />
                    <span>Pola penyerangan Pick & Roll / Motion Offense</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#f59e0b]" />
                    <span>Zone Defense 2-3 & Man-to-Man Switch</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-[#ff5500]/50 hover:-translate-y-2">
              <div className="relative h-48 w-full">
                <Image
                  src="/img/DSCF0470.jpg"
                  alt="Strength & Conditioning"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/40 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-[#10b981] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Kebugaran Fisik
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold uppercase text-white">
                  Strength, Agility & Conditioning
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Peningkatan vertikal jump, akselerasi sprint lapangan, ketahanan kardio 4 kuarter, serta fleksibilitas tubuh.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10b981]" />
                    <span>Plyometrics & Vertical Jump Training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10b981]" />
                    <span>Ladder drills & Suicide sprints</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏀 WEEKLY SCHEDULE SECTION */}
      <section id="jadwal" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#090D16]/60">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff5500]">
              Waktu & Lokasi
            </span>
            <h2 className="font-display mt-2 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
              Jadwal Latihan <span className="text-gradient-orange">Rutin</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
              Latihan diselenggarakan di Lapangan Utama SMK Pasundan 2 Banjaran dengan bimbingan pelatih profesional.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Senin */}
            <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-[#ff5500]">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold uppercase text-white">
                  Senin
                </span>
                <span className="rounded-md bg-[#ff5500]/10 px-2.5 py-1 text-xs font-bold text-[#ff5500]">
                  Sore
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Clock className="h-4 w-4 text-[#ff5500]" />
                <span>15:30 - 17:30 WIB</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span>Lapangan Utama P2B</span>
              </div>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="text-xs font-bold uppercase text-white">Fokus Sesi:</div>
                <div className="mt-1 text-xs text-slate-400">
                  Fundamental Drills, Ball Handling, & Passing Precision.
                </div>
              </div>
            </div>

            {/* Rabu */}
            <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-[#f59e0b]">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold uppercase text-white">
                  Rabu
                </span>
                <span className="rounded-md bg-[#f59e0b]/10 px-2.5 py-1 text-xs font-bold text-[#f59e0b]">
                  Sore
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Clock className="h-4 w-4 text-[#f59e0b]" />
                <span>15:30 - 17:30 WIB</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span>Lapangan Utama P2B</span>
              </div>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="text-xs font-bold uppercase text-white">Fokus Sesi:</div>
                <div className="mt-1 text-xs text-slate-400">
                  Tactical Defense Rotation & Set Plays Strategy.
                </div>
              </div>
            </div>

            {/* Jumat */}
            <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-[#ff5500]">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold uppercase text-white">
                  Jumat
                </span>
                <span className="rounded-md bg-[#ff5500]/10 px-2.5 py-1 text-xs font-bold text-[#ff5500]">
                  Sore
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Clock className="h-4 w-4 text-[#ff5500]" />
                <span>15:00 - 17:30 WIB</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span>Lapangan Utama P2B</span>
              </div>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="text-xs font-bold uppercase text-white">Fokus Sesi:</div>
                <div className="mt-1 text-xs text-slate-400">
                  Shooting Clinic, Free Throws & Physical Conditioning.
                </div>
              </div>
            </div>

            {/* Sabtu */}
            <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-[#10b981]">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-bold uppercase text-white">
                  Sabtu
                </span>
                <span className="rounded-md bg-[#10b981]/10 px-2.5 py-1 text-xs font-bold text-[#10b981]">
                  Pagi
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Clock className="h-4 w-4 text-[#10b981]" />
                <span>08:00 - 11:00 WIB</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span>Lapangan Utama P2B</span>
              </div>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="text-xs font-bold uppercase text-white">Fokus Sesi:</div>
                <div className="mt-1 text-xs text-slate-400">
                  Internal Scrimmage / Sparring Match & Game Review.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏀 ACTION PHOTO GALLERY SHOWCASE */}
      <section id="galeri" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff5500]">
                Dokumentasi Asli Tim
              </span>
              <h2 className="font-display mt-2 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
                Galeri Aksi <span className="text-gradient-orange">Glorias P2B</span>
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedGalleryCategory("all")}
                className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  selectedGalleryCategory === "all"
                    ? "bg-[#ff5500] text-white shadow-[0_0_15px_rgba(255,85,0,0.5)]"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setSelectedGalleryCategory("team")}
                className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  selectedGalleryCategory === "team"
                    ? "bg-[#ff5500] text-white shadow-[0_0_15px_rgba(255,85,0,0.5)]"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                Tim & Skuad
              </button>
              <button
                onClick={() => setSelectedGalleryCategory("training")}
                className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  selectedGalleryCategory === "training"
                    ? "bg-[#ff5500] text-white shadow-[0_0_15px_rgba(255,85,0,0.5)]"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                Sesi Latihan
              </button>
              <button
                onClick={() => setSelectedGalleryCategory("match")}
                className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  selectedGalleryCategory === "match"
                    ? "bg-[#ff5500] text-white shadow-[0_0_15px_rgba(255,85,0,0.5)]"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                Pertandingan
              </button>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGallery.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageModal(photo.src)}
                className="group relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 cursor-pointer shadow-lg transition duration-300 hover:border-[#ff5500]/60 hover:shadow-[0_0_20px_rgba(255,85,0,0.25)]"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/30 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
                <div className="absolute bottom-0 left-0 right-0 p-5 transform transition duration-300 group-hover:translate-y-0">
                  <span className="rounded bg-[#ff5500]/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {photo.category}
                  </span>
                  <h4 className="font-display mt-2 text-base font-bold uppercase text-white">
                    {photo.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-300 line-clamp-2">
                    {photo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏀 IMAGE LIGHTBOX MODAL */}
      {activeImageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setActiveImageModal(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-slate-950 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImageModal(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-[#ff5500]"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative h-[65vh] w-full min-w-[320px] sm:min-w-[550px] md:min-w-[700px] lg:min-w-[850px]">
              <Image
                src={activeImageModal}
                alt="Glorias Photo Preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* 🏀 FAQ SECTION */}
      <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#090D16]/60">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff5500]">
              Pertanyaan Umum
            </span>
            <h2 className="font-display mt-2 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions (FAQ)
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-white text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#ff5500] transition-transform duration-300 ${
                      activeFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="border-t border-white/10 px-6 pb-6 pt-4 text-sm leading-relaxed text-slate-400">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏀 LOCATION & CONTACT SECTION (INSTAGRAM DM DIRECT) */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#090D16]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff5500]">
                Home Court & Kontak Resmi
              </span>
              <h2 className="font-display mt-2 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
                Terhubung Bersama <span className="text-gradient-orange">Glorias P2B</span>
              </h2>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                Untuk pertanyaan, informasi jadwal sparring/tanding, maupun pendaftaran anggota baru, silakan langsung menghubungi kami melalui Direct Message (DM) Instagram resmi.
              </p>

              <div className="mt-8 space-y-4">
                {/* Instagram DM Highlight Box */}
                <a
                  href="https://www.instagram.com/pasundan2basketball"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-[#ff5500]/40 bg-[#ff5500]/10 p-5 transition duration-300 hover:border-[#ff5500] hover:bg-[#ff5500]/15 hover:scale-[1.02] group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ff5500] text-white shadow-[0_0_15px_rgba(255,85,0,0.5)]">
                      <InstagramIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        DM Instagram Resmi
                      </h4>
                      <p className="text-xs text-[#ff8c42] mt-0.5 font-medium">
                        @pasundan2basketball
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white">
                    <span>Kirim DM</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>

                <div className="flex items-start gap-4 pt-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff5500]/15 text-[#ff5500]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">Alamat Lapangan & Sekolah</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Jl. Stasiun Timur No. 62 Banjaran, Kec. Banjaran, Kabupaten Bandung, Jawa Barat 40377
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* School Campus & Map Card */}
            <div className="glass-panel rounded-3xl p-6 border border-white/10 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#ff5500]">
                  <Image
                    src="/img/Glorias.jpg"
                    alt="Glorias Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-display text-lg font-bold text-white">
                    SMK PASUNDAN 2 BANJARAN
                  </h3>
                  <p className="text-xs text-slate-400">
                    Sekolah Pusat Keunggulan • Kab. Bandung
                  </p>
                </div>
              </div>

              <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/img/DSCF0436.jpg"
                  alt="SMK Pasundan 2 Banjaran Basketball Team"
                  fill
                  className="object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-4">
                  <span className="rounded-full bg-black/70 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm border border-white/20">
                    📍 Kampus Jl. Stasiun Timur No. 62 Banjaran
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <a
                  href="https://maps.google.com/?q=SMK+Pasundan+2+Banjaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#ff5500]"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Buka Petunjuk Arah di Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏀 FOOTER */}
      <footer className="border-t border-white/10 bg-[#05070B] py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo & School Branding */}
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#ff5500]">
              <Image
                src="/img/Glorias.jpg"
                alt="Glorias Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-display text-lg font-bold text-white tracking-wider">
                GLORIAS BASKETBALL
              </div>
              <div className="text-xs text-slate-400">
                SMK Pasundan 2 Banjaran • Bandung
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#beranda" className="hover:text-[#ff5500] transition">
              Beranda
            </a>
            <a href="#tentang" className="hover:text-[#ff5500] transition">
              Tentang
            </a>
            <a href="#program" className="hover:text-[#ff5500] transition">
              Program
            </a>
            <a href="#jadwal" className="hover:text-[#ff5500] transition">
              Jadwal
            </a>
            <a href="#galeri" className="hover:text-[#ff5500] transition">
              Galeri
            </a>
            <a
              href="https://www.instagram.com/pasundan2basketball"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff5500] transition"
            >
              DM Instagram
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/pasundan2basketball"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-[#ff5500] hover:text-white hover:border-[#ff5500]"
              aria-label="Instagram @pasundan2basketball"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/5 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Glorias Basketball P2B. Ekstrakurikuler Bola Basket SMK Pasundan 2 Banjaran. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
