/**
 * Quiet Scholarly House: an editorial British tutoring site using ink navy,
 * paper cream, sage and margin ochre; patient, precise, and personal.
 */
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Download,
  GraduationCap,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const brand = {
  logo: "/manus-storage/liping-james-compass-mark_3308bb64.png",
  hero: "/manus-storage/liping-james-hero-study_44496f18.jpg",
  learning: "/manus-storage/liping-james-learning-scene_cbf08467.jpg",
  portrait: "/manus-storage/liping-james-portrait-placeholder_4f38faa1.jpg",
  calendarUrl:
    "https://calendar.google.com/calendar/appointments/schedules/PLACEHOLDER",
};

const schedule = [
  {
    day: "Monday",
    time: "4:30–5:30 pm",
    level: "Year 9",
    focus: "Building secure GCSE foundations",
    availability: "Confirm spaces",
  },
  {
    day: "Wednesday",
    time: "5:00–6:00 pm",
    level: "Year 10",
    focus: "GCSE Higher problem-solving",
    availability: "Confirm spaces",
  },
  {
    day: "Thursday",
    time: "6:15–7:15 pm",
    level: "Year 11",
    focus: "Exam practice & technique",
    availability: "Confirm spaces",
  },
];

const resources = [
  {
    title: "Everyday Mental Maths Toolkit",
    level: "KS3",
    description: "A practical set of number models and shortcuts for making quick, reliable calculations feel more natural.",
  },
  {
    title: "KS3 Number Skills Check-in",
    level: "KS3",
    description: "A short diagnostic-style activity covering the building blocks of number work.",
  },
  {
    title: "GCSE Foundation Formula Sheet",
    level: "GCSE Foundation",
    description: "A clear, pupil-friendly formula reference for regular revision sessions.",
  },
  {
    title: "Higher Tier Algebra Practice",
    level: "GCSE Higher",
    description: "A progressive set of algebra questions designed to make method feel more familiar.",
  },
  {
    title: "A-Level Problem-Solving Notes",
    level: "A-Level",
    description: "A structured worksheet template for tackling multi-step mathematics questions.",
  },
];

// Fill these templates only with verified, permissioned student outcomes before publishing.
const successStoryTemplates = [
  {
    number: "01",
    title: "A confidence milestone",
    prompt: "A short, permissioned account of the point at which a student began approaching a previously difficult topic with greater assurance.",
    metrics: [
      ["Starting point", "Add agreed baseline"],
      ["Focus", "Add topic or routine"],
      ["Progress", "Add verified milestone"],
    ],
  },
  {
    number: "02",
    title: "A stronger exam routine",
    prompt: "A concise record of the small habits, methods or revision structure that made practice feel more manageable.",
    metrics: [
      ["Starting point", "Add agreed baseline"],
      ["Focus", "Add exam technique"],
      ["Progress", "Add verified milestone"],
    ],
  },
  {
    number: "03",
    title: "A result worth recording",
    prompt: "A space for a confirmed attainment result or meaningful learning milestone, shared only with the family’s approval.",
    metrics: [
      ["Starting point", "Add agreed baseline"],
      ["Focus", "Add learning goal"],
      ["Outcome", "Add confirmed result"],
    ],
  },
];

const navLinks = [
  ["About", "about"],
  ["Classes", "classes"],
  ["Book", "book"],
  ["Success", "success"],
  ["Resources", "resources"],
  ["Contact", "contact"],
] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLevel, setActiveLevel] = useState("All");
  const [formStatus, setFormStatus] = useState("");
  const levels = ["All", "KS3", "GCSE Foundation", "GCSE Higher", "A-Level"];

  const filteredResources = useMemo(
    () => resources.filter((resource) => activeLevel === "All" || resource.level === activeLevel),
    [activeLevel],
  );

  function handleEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (formData.get("website")) return;
    setFormStatus(
      "This form needs a live enquiry inbox before messages can be delivered. Please use the consultation route while the contact details are being finalised.",
    );
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand-lockup" aria-label="Mrs. Liping James Maths Tuition home">
          <img src={brand.logo} alt="" className="brand-mark" />
          <span>
            <strong>Mrs. Liping James</strong>
            <small>Maths Tuition</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map(([label, id]) => (
            <button key={id} type="button" onClick={() => scrollToSection(id)}>
              {label}
            </button>
          ))}
        </nav>

        <button
          className="header-cta"
          type="button"
          onClick={() => scrollToSection("book")}
        >
          <span>Free consultation</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                scrollToSection(id);
                setMenuOpen(false);
              }}
            >
              {label}
              <ArrowDownRight size={18} />
            </button>
          ))}
          <button
            className="mobile-book-link"
            type="button"
            onClick={() => {
              scrollToSection("book");
              setMenuOpen(false);
            }}
          >
            Arrange a free consultation
          </button>
        </div>
      )}

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><Compass size={15} aria-hidden="true" /> Based in Colchester • KS3 to A-Level</p>
            <h1 id="hero-title">Maths confidence grows one clear step at a time.</h1>
            <p className="hero-intro">
              Effective personalised tuition with <strong>Mrs. Liping James</strong>, a UK-qualified secondary maths teacher with more than 20 years of classroom experience. From mental-maths models and reliable arithmetic shortcuts to complex problem-solving, learning is built to work in exams and everyday life.
            </p>
            <div className="hero-actions">
              <Button className="ochre-button" onClick={() => scrollToSection("book")}>
                Book a free consultation <ArrowDownRight size={17} />
              </Button>
              <button className="text-action" type="button" onClick={() => scrollToSection("about")}>
                Meet Mrs. James <span>↓</span>
              </button>
            </div>
            <div className="hero-trust" aria-label="Tuition highlights">
              <span><Check size={15} /> Over 20 years +’ teaching experience</span>
              <span><Check size={15} /> Maths and Further Maths Tuition</span>
              <span><Check size={15} /> GCSE & A'level exam technique</span>
            </div>
          </div>
          <div className="hero-visual">
            <img src={brand.hero} alt="Mathematics study desk with graph paper, a geometry compass and a textbook" />
            <div className="hero-image-caption"><span>01</span> Thoughtful practice. Lasting progress.</div>
          </div>
          <div className="hero-equation" aria-hidden="true">x + patience = confidence</div>
        </section>

        <section id="about" className="about-section section-with-rail" aria-labelledby="about-title">
          <p className="rail-label">01 / About</p>
          <div className="about-visual-stack">
            <figure className="portrait-frame">
              <img src={brand.portrait} alt="Professional portrait placeholder — replace with a photo of Mrs. Liping James" />
              <figcaption>Professional photo placeholder — replace with a current photograph of Mrs. James.</figcaption>
            </figure>
            <div className="proof-note"><Sparkles size={17} /> Every learner deserves to feel capable in maths.</div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">A calm, personal approach</p>
            <h2 id="about-title">A teacher who sees the person behind the question.</h2>
            <p>
              Mrs. Liping James is a UK-qualified secondary and high school maths teacher with more than two decades of experience helping students develop secure understanding across Key Stage 3, GCSE and, where appropriate, A-Level maths.
            </p>
            <p>
              Her teaching is patient and student-centred. Lessons make room to ask questions, revisit foundations and practise methods until they feel dependable — while keeping a clear eye on the exam technique that turns knowledge into marks. Arithmetic shortcuts and mental-maths models are introduced with understanding, so students can calculate efficiently and recognise where maths is useful beyond the classroom.
            </p>
            <div className="approach-list">
              <div><span>01</span><p><strong>Start with the student.</strong> Find the gaps, the worries and the strengths before deciding what comes next.</p></div>
              <div><span>02</span><p><strong>Make methods make sense.</strong> Build real understanding, rather than relying on memorised steps alone.</p></div>
              <div><span>03</span><p><strong>Practise with purpose.</strong> Use clear routines and exam-aware feedback to turn effort into confidence.</p></div>
              <div><span>04</span><p><strong>Make maths usable.</strong> Develop flexible arithmetic, mental models and practical shortcuts that support everyday decisions as well as exam questions.</p></div>
            </div>
          </div>
        </section>

        <section className="learning-strip" aria-label="Teaching image">
          <img src={brand.learning} alt="A tutor and student working through geometry diagrams together" />
          <div className="learning-quote">
            <span className="quote-line" />
            <p>“The aim is not simply to get through more questions. It is to help each student know what to do when they meet the next one — in class, in an exam, or in everyday life.”</p>
            <small>— Mrs. Liping James</small>
          </div>
        </section>

        <section id="classes" className="schedule-section section-with-rail" aria-labelledby="schedule-title">
          <p className="rail-label">02 / Classes</p>
          <div className="schedule-heading">
            <p className="eyebrow">Small group tuition</p>
            <h2 id="schedule-title">A steady weekly rhythm.</h2>
            <p>
              Small groups create a focused, encouraging setting for regular practice. Get in touch to check the current term’s timings, year groups and availability.
            </p>
          </div>
          <div className="schedule-table-wrap">
            <table className="schedule-table">
              <thead><tr><th>Day</th><th>Time</th><th>Year group</th><th>Focus</th><th>Availability</th></tr></thead>
              <tbody>
                {schedule.map((session) => (
                  <tr key={`${session.day}-${session.time}`}>
                    <td>{session.day}</td><td>{session.time}</td><td>{session.level}</td><td>{session.focus}</td><td><span className="availability-dot" /> {session.availability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="schedule-cards">
              {schedule.map((session) => (
                <article className="schedule-card" key={`mobile-${session.day}-${session.time}`}>
                  <div><span className="schedule-day">{session.day}</span><span className="schedule-time"><Clock3 size={14} /> {session.time}</span></div>
                  <h3>{session.level}</h3><p>{session.focus}</p><small><span className="availability-dot" /> {session.availability}</small>
                </article>
              ))}
            </div>
          </div>
          <button className="inline-link" type="button" onClick={() => scrollToSection("contact")}>Need a different time? Send an enquiry <ArrowUpRight size={16} /></button>
        </section>

        <section id="book" className="booking-section" aria-labelledby="book-title">
          <div className="booking-copy">
            <p className="eyebrow"><CalendarDays size={16} aria-hidden="true" /> A simple first conversation</p>
            <h2 id="book-title">Let’s talk about what would help.</h2>
            <p>A short, free 15-minute conversation is a relaxed way to discuss the support that would make the greatest difference.</p>
            <div className="booking-notes">
              <span><Check size={16} /> A chance to discuss your child’s needs</span>
              <span><Check size={16} /> No obligation to book further lessons</span>
            </div>
          </div>
          <div className="calendar-shell">
            <div className="calendar-topbar"><span className="calendar-orb" /><span>Consultation calendar</span><span className="calendar-dots">•••</span></div>
            <div className="calendar-placeholder">
              <CalendarDays size={31} strokeWidth={1.4} />
              <strong>Choose a calm time to talk.</strong>
              <p>Consultation availability is shared personally, so every first conversation can begin with the right context.</p>
            </div>
            <iframe className="calendar-frame" src={brand.calendarUrl} title="Google Calendar appointment schedule placeholder" tabIndex={-1} aria-hidden="true" />
            <button type="button" className="calendar-fallback" onClick={() => scrollToSection("contact")}>Request a consultation time <ArrowUpRight size={15} /></button>
          </div>
        </section>

        <section id="success" className="success-stories-section section-with-rail" aria-labelledby="success-title">
          <p className="rail-label">03 / Success stories</p>
          <div className="success-heading">
            <p className="eyebrow"><GraduationCap size={16} aria-hidden="true" /> Progress, recorded with care</p>
            <h2 id="success-title">Success stories are built one real step at a time.</h2>
            <p>
              This is a dedicated space for verified progress stories. Each card is a fill-in template, ready to capture a student’s starting point, focus and confirmed achievement with permission.
            </p>
          </div>
          <div className="success-story-grid">
            {successStoryTemplates.map((story) => (
              <article className="success-story-card" key={story.number}>
                <div className="story-card-top"><span>Story {story.number}</span><span className="story-tab">Add with permission</span></div>
                <h3>{story.title}</h3>
                <p>{story.prompt}</p>
                <dl className="story-metrics">
                  {story.metrics.map(([label, value]) => (
                    <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                  ))}
                </dl>
                <div className="story-card-foot"><span className="story-mark"><span /> Confirmed progress</span><span className="story-edit">Editable card</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials-section" aria-labelledby="testimonials-title">
          <div>
            <p className="eyebrow">Kind words</p>
            <h2 id="testimonials-title">Trusted feedback belongs to real families.</h2>
          </div>
          <div className="testimonial-prompt">
            <MessageCircle size={26} strokeWidth={1.4} />
            <p>Parent and student feedback will be shared here with permission. For now, the focus is on beginning with a thoughtful, individual conversation.</p>
            <span>Words shared with care</span>
          </div>
        </section>

        <section id="resources" className="resources-section section-with-rail" aria-labelledby="resources-title">
          <p className="rail-label">04 / Resources</p>
          <div className="resources-heading">
            <p className="eyebrow"><BookOpen size={16} aria-hidden="true" /> The revision shelf</p>
            <h2 id="resources-title">Useful notes for the next small step.</h2>
            <p>A growing shelf of carefully chosen revision notes, worksheets and reference materials for the next useful step.</p>
          </div>
          <div className="resource-filter" role="tablist" aria-label="Filter resources by level">
            {levels.map((level) => (
              <button key={level} type="button" role="tab" aria-selected={activeLevel === level} className={activeLevel === level ? "is-active" : ""} onClick={() => setActiveLevel(level)}>{level}</button>
            ))}
          </div>
          <div className="resource-grid">
            {filteredResources.map((resource, index) => (
              <article className="resource-card" key={resource.title}>
                <span className="resource-number">0{index + 1}</span>
                <span className="resource-tag">{resource.level}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <button type="button" className="resource-action" onClick={() => scrollToSection("contact")}>Ask about this resource <Download size={16} /></button>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-intro">
            <p className="eyebrow">05 / Enquiries</p>
            <h2 id="contact-title">A good first step can be a short message.</h2>
            <p>Based in Colchester, Mrs. James supports students with thoughtful, practical maths tuition. Tell her a little about the support you are looking for so the first conversation can be more useful.</p>
            <div className="contact-details">
              <p><span>Email</span><strong>Contact details shared when consultation times open</strong></p>
              <p><span>Based in</span><strong>Colchester, Essex</strong></p>
              <p><span>Tutoring mode</span><strong>Tuition format discussed in the first conversation</strong></p>
              <p><span>Response time</span><strong>A considered reply to each enquiry</strong></p>
            </div>
          </div>
          <form className="enquiry-form" onSubmit={handleEnquiry}>
            <div className="form-grid">
              <label>Name<input required name="name" placeholder="Your name" /></label>
              <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
              <label>Phone <em>(optional)</em><input type="tel" name="phone" placeholder="Your preferred number" /></label>
              <label>Student’s year group<select required name="year"><option value="">Choose a year group</option><option>Year 7</option><option>Year 8</option><option>Year 9</option><option>Year 10</option><option>Year 11</option><option>Year 12 / 13</option><option>Not sure yet</option></select></label>
            </div>
            <label>How can I help?<textarea required name="message" rows={5} placeholder="A little about the areas of maths your child would like support with…" /></label>
            <label className="honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" name="website" /></label>
            <div className="form-bottom"><p>Your message is treated as private. Before launch, this form needs to be connected to Mrs. James’s preferred email or secure form service.</p><Button type="submit" className="ink-button">Send enquiry <ArrowUpRight size={17} /></Button></div>
            {formStatus && <p className="form-status" role="status">{formStatus}</p>}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><img src={brand.logo} alt="" /><span><strong>Mrs. Liping James</strong><small>Maths Tuition</small></span></div>
        <p>Patient, expert maths support for students who need confidence as well as results.</p>
        <button type="button" onClick={() => scrollToSection("top")}>Back to top ↑</button>
      </footer>
    </div>
  );
}
