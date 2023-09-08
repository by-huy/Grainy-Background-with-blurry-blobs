import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="absolute left-1/2 -translate-x-1/2 pt-4 z-10 font-ranade text-sm font-medium">
        <a target="_blank" rel="noreferrer" href="https://huyng.xyz">built by HuyNG</a>
      </div>
      <Outlet />
    </div>
  );
}
