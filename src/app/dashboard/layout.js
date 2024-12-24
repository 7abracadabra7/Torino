import AuthProvider from "../../../providers/AuthProvider";

const ProfileLayout = ({ children }) => {
  return (
    <AuthProvider>
      <div>
        <ul>
          <li>
            <Link href="/profile">پروفایل من</Link>
          </li>
          <li>
            <Link href="/profile/my-tours">تور ها من</Link>
          </li>
          <li>
            <Link href="/profile/transactions">تراکنش ها</Link>
          </li>
        </ul>
        <main>{children}</main>
      </div>
    </AuthProvider>
  );
};

export default ProfileLayout;
