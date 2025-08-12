import dairyImg from "@/assets/dairy-tech-diagram.jpg";

const DairyTech = () => {
  return (
    <section id="dairy" className="container mx-auto mt-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Dairy Tech Highlight</h2>
          <p className="text-muted-foreground mt-3">Built digital milk collection & sync for family dairy — includes IoT device integration, real-time dashboard & mobile ordering.</p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground/90 list-disc list-inside">
            <li>IoT devices integrated; offline-first mobile sync every 30s</li>
            <li>Node.js + WebSockets API; conflict-free replicated data types</li>
            <li>Real-time dashboard with volume metrics and sync status</li>
            <li>Outcome: ↓ errors 42%, ↑ operator speed 40%</li>
          </ul>
        </div>
        <div>
          <img src={dairyImg} alt="System diagram: IoT device → mobile sync → cloud → dashboard" className="w-full h-auto rounded-xl glass neon-border" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default DairyTech;
