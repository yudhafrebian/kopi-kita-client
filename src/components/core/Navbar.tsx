import { useTranslations } from "next-intl";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations("navbar");
  return (
    <header>
        <div className="px-20">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h1 >Logo Kopi Kita</h1>
            </div>
            <nav className="flex gap-4">
              <Link href="/">{t("home")}</Link>
              <Link href="/">{t("about")}</Link>
              <Link href="/">{t("menu")}</Link>
              <Link href="/">{t("location")}</Link>
            </nav>
          </div>
        </div>
    </header>
  )
};

export default Navbar;
