

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <h2> inner Layout item</h2>
     {children}
     </>
    
  );
}
