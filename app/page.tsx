// app/page.tsx

import Link from "next/link";


export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "sans-serif",
        
      }}
    >
      <section
        style={{
          maxWidth: "500px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.05)",
          padding: "2rem",
          borderRadius: "8px",
        
        }}
      >
        {/* <Image
          src="/me.jpg"
          alt="Profile photo"
          width={96}
          height={96}
          priority
          style={{
            borderRadius: "100%",
            marginBottom: "1rem",
            objectFit: "cover",
          }}
        /> */}

        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "0.3rem",
          }}
        >
          Tamal Sarkar
        </h1>

        <p
          style={{
            opacity: 0.7,
            marginBottom: "1.5rem",
          }}
        >
          Fullstack Developer
        </p>

        <p
          style={{
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          Fullstack developer building web apps and learning systems. Focused on shipping real projects and improving every day. <br/> I use Arch btw.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
        
            <Link href="https://github.com/kardt89" target="_blank">
              GitHub
            </Link>
          

        
            <Link href="https://linkedin.com/in/helloworldt89" target="_blank">
              LinkedIn
            </Link>
          

        
            <Link href="https://twitter.com/helloworldt89" target="_blank">
              Twitter
            </Link>
          

        
            <Link href="https://dt89.hashnode.dev/" target="_blank">
              Blog
            </Link>
          
        
            <Link href="https://www.youtube.com/@kardt89" target="_blank">
              Youtube
            </Link>
          
        
            <Link href="https://twitch.tv/dt89_ow" target="_blank">
              Twitch
            </Link>
          
        </div>
      
      </section>
    </main>
  );
}