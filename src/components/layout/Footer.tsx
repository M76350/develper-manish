const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border/40">
      <div className="container mx-auto py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© <span id="year" className="animate-fade-in">{new Date().getFullYear()}</span> Manish Yadav. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:opacity-90">Privacy</a>
          <a href="#terms" className="hover:opacity-90">Terms</a>
          <span className="text-xs">Built with ❤️ by Manish</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
