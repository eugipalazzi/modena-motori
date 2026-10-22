const SOCIALS = [
  {
    name: "Instagram",
    followers: "+60k",
    href: "https://www.instagram.com/modenamotori",
    path: "M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM17.3 5.6a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 1.8A3.7 3.7 0 003.8 7.5v9a3.7 3.7 0 003.7 3.7h9a3.7 3.7 0 003.7-3.7v-9a3.7 3.7 0 00-3.7-3.7z",
  },
  {
    name: "Facebook",
    followers: "+30k",
    href: "https://www.facebook.com/modenamotoriofficial/?locale=it_IT",
    path: "M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.5H7.5v3.3h2.8V22z",
  },
  {
    name: "TikTok",
    followers: "+15k",
    href: "https://www.tiktok.com/@modenamotori",
    path: "M16.6 2h-3.2v13.2a2.8 2.8 0 11-2.8-2.8c.3 0 .5 0 .8.1V9.2a6 6 0 105.2 5.9V8.6a7.4 7.4 0 004.3 1.4V6.8A4.3 4.3 0 0116.6 2z",
  },
  {
    name: "YouTube",
    followers: "+10k",
    href: "https://www.youtube.com/playlist?list=PLYJkXk73ihTZMGUGt2AXsG5M5nK35x3n7",
    path: "M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z",
  },
];

export default function Socials() {
  return (
    <ul className="socials">
      {SOCIALS.map(({ name, followers, href, path }) => (
        <li key={name}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={path} />
          </svg>
          <div>
            <b>{followers}</b>
            <span>{name}</span>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Modena Motori su ${name}`}
          />
        </li>
      ))}
    </ul>
  );
}
