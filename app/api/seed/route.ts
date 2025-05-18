import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"

export async function POST() {
  try {
    // Insert rarities
    await executeQuery(`
      INSERT INTO card_rarities (name, description, color_hex, drop_rate)
      VALUES 
        ('Common', 'Standard cards available in all packs', '#8A8A8A', 70.00),
        ('Uncommon', 'Less common cards with better stats', '#4CAF50', 20.00),
        ('Rare', 'Hard to find cards with excellent stats', '#2196F3', 7.00),
        ('Epic', 'Very rare cards with superior stats', '#9C27B0', 2.50),
        ('Legendary', 'Extremely rare cards with the best stats', '#FFD700', 0.50)
      ON CONFLICT DO NOTHING;
    `)

    // Insert artists
    await executeQuery(`
      INSERT INTO artists (name, country_code, bio, image_url)
      VALUES 
        ('Neon Visage', 'US', 'Known for futuristic beats and cutting-edge visuals', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpa69q1vwf-ig4yFeIDVoUhSCaHYSqmDk93gZVVFe.webp'),
        ('Circuit Flow', 'FR', 'Parisian artist blending traditional hip-hop with electronic elements', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpkf7gxutl-gMEmDBxiJFY3gGcTlpNQ3ePz6Se5ui.webp'),
        ('Cyber Prophet', 'JP', 'Tokyo-based artist with a focus on dystopian themes', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpupfiwwr_-NbuarWLzKhySK9b2fym2ltWRG6RCYL.webp'),
        ('Digital Wolf', 'DE', 'Leading the Berlin underground scene with crypto-inspired lyrics', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpp8p5xxw8.jpg-R0OQLNYBmBK71c97vrp7WOPHSZbLJ2.jpeg'),
        ('Red Eye', 'CN', 'Shanghai-based artist known for aggressive flows and tech references', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpvvsr15jp-oB68J7wfydAeOKvKRzThGvvgUoMq0Y.webp'),
        ('BPM Mech', 'UK', 'Pioneering the fusion of AI-generated beats with human vocals', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpflzxmav5-DDjPcvFGQh5nuSALVedXcntCnarCpu.webp'),
        ('Neon Coder', 'KR', 'Seoul artist with a background in programming and music production', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmp3qy2sd6t-Awc2wb02908DCdnWYBhRq4I8L4Uwji.webp'),
        ('Quantum Verse', 'CA', 'Award-winning artist exploring the intersection of quantum physics and hip-hop', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/122-wN9UjRpKj3xbE54Z1yIkj98ghTENNN.webp'),
        ('CryptoFlow', 'RU', 'Moscow-based artist with lyrics focused on blockchain and digital freedom', 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpap9ttv4w.jpg-uHGWRq9Y4Zw84xbLFlj5kHenhRACEJ.jpeg')
      ON CONFLICT DO NOTHING;
    `)

    // Insert cards
    await executeQuery(`
      INSERT INTO cards (artist_id, name, rarity_id, image_url, flow_stat, lyrics_stat, impact_stat, is_premium)
      VALUES 
        (1, 'Digital Overlord', 5, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpa69q1vwf-ig4yFeIDVoUhSCaHYSqmDk93gZVVFe.webp', 98, 95, 99, true),
        (2, 'Street Oracle', 4, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpkf7gxutl-gMEmDBxiJFY3gGcTlpNQ3ePz6Se5ui.webp', 92, 96, 90, false),
        (3, 'Neo Tokyo', 5, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpupfiwwr_-NbuarWLzKhySK9b2fym2ltWRG6RCYL.webp', 97, 94, 98, true),
        (4, 'Crypto King', 4, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpp8p5xxw8.jpg-R0OQLNYBmBK71c97vrp7WOPHSZbLJ2.jpeg', 91, 89, 95, false),
        (5, 'Ghost Protocol', 5, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpvvsr15jp-oB68J7wfydAeOKvKRzThGvvgUoMq0Y.webp', 99, 97, 96, true),
        (6, 'Rhythm Machine', 3, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpflzxmav5-DDjPcvFGQh5nuSALVedXcntCnarCpu.webp', 95, 85, 90, false),
        (7, 'Matrix Breaker', 4, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmp3qy2sd6t-Awc2wb02908DCdnWYBhRq4I8L4Uwji.webp', 93, 91, 94, false),
        (8, 'Astral Voyager', 5, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/122-wN9UjRpKj3xbE54Z1yIkj98ghTENNN.webp', 96, 98, 97, true),
        (9, 'Data Miner', 4, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpap9ttv4w.jpg-uHGWRq9Y4Zw84xbLFlj5kHenhRACEJ.jpeg', 94, 92, 93, false)
      ON CONFLICT DO NOTHING;
    `)

    // Insert events
    await executeQuery(`
      INSERT INTO events (name, description, event_date, location, is_virtual, image_url)
      VALUES 
        ('RhymeChain x SXSW Showcase', 'Join us for an explosive night featuring live performances from RhymeChain artists, exclusive card drops, and networking with fans and collectors.', '2025-03-15 20:00:00+00', 'Austin, TX', false, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpupfiwwr_-NbuarWLzKhySK9b2fym2ltWRG6RCYL.webp'),
        ('Global Tournament: Finals', 'Watch the best players battle it out in our championship finals with $50,000 in prizes and legendary card rewards.', '2025-04-22 18:00:00+00', 'Virtual Event', true, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpp8p5xxw8.jpg-R0OQLNYBmBK71c97vrp7WOPHSZbLJ2.jpeg'),
        ('Paris Blockchain Week: RhymeChain Panel', 'Our founders discuss the future of music NFTs and how RhymeChain is bridging the gap between artists and fans.', '2025-05-10 14:00:00+00', 'Paris, France', false, 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmpa69q1vwf-ig4yFeIDVoUhSCaHYSqmDk93gZVVFe.webp')
      ON CONFLICT DO NOTHING;
    `)

    // Insert card drops
    await executeQuery(`
      INSERT INTO card_drops (name, description, start_date, end_date, total_supply, price_in_rhyme)
      VALUES 
        ('Genesis Collection', 'The first ever RhymeChain card collection featuring the founding artists.', '2025-01-01 00:00:00+00', '2025-02-01 00:00:00+00', 10000, 100.00),
        ('Cyber Edition', 'Limited edition cards with exclusive cyberpunk designs and enhanced stats.', '2025-03-01 00:00:00+00', '2025-03-15 00:00:00+00', 5000, 250.00),
        ('Global Masters', 'Cards featuring the top artists from around the world with special abilities.', '2025-04-01 00:00:00+00', '2025-04-30 00:00:00+00', 7500, 175.00)
      ON CONFLICT DO NOTHING;
    `)

    return NextResponse.json({ success: true, message: "Database seeded successfully" })
  } catch (error) {
    console.error("Error seeding database:", error)
    return NextResponse.json({ error: "Failed to seed database" }, { status: 500 })
  }
}
