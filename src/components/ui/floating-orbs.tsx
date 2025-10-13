export const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Large floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float-slow" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-primary/8 rounded-full blur-xl animate-float-medium delay-1000" />
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/4 rounded-full blur-3xl animate-float-slow delay-2000" />
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary/6 rounded-full blur-2xl animate-float-medium delay-3000" />
      
      {/* Medium floating orbs */}
      <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float-fast" />
      <div className="absolute top-2/3 right-1/3 w-16 h-16 bg-primary/12 rounded-full blur-lg animate-float-fast delay-1500" />
      <div className="absolute bottom-1/3 left-2/3 w-18 h-18 bg-primary/8 rounded-full blur-xl animate-float-medium delay-2500" />
      
      {/* Small floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-primary/15 rounded-full blur-lg animate-float-fast delay-500" />
      <div className="absolute bottom-1/4 left-1/5 w-10 h-10 bg-primary/20 rounded-full blur-md animate-float-medium delay-1800" />
      <div className="absolute top-3/4 right-1/5 w-14 h-14 bg-primary/12 rounded-full blur-lg animate-float-slow delay-3500" />
    </div>
  );
};