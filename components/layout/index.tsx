import { Box } from '../base';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box className="h-screen w-full xs:overflow-scroll lg:overflow-hidden">
      <main className="flex-1 overflow-y-auto pb-32 px-4 relative">
        {children}
      </main>
    </Box>
  );
}

export { Layout };
