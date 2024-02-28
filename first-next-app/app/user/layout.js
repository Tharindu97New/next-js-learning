export default function ProfileLayout({ children }) {
  return (
    <div>
      <div className="row">
        <h3>Profile Header</h3>
      </div>
      {children}
      <div className="row">
        <h3>Profile Footer</h3>
      </div>
    </div>
  );
}