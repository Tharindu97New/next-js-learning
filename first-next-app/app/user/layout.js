export default function ProfileLayout({ children }) {
  return (
    <div className="wrapper">
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