import SpinnerLoader from "../ui/spinnerLoader";

export function LoadingPage() {
  return (
    <div className="z-50 min-h-screen min-w-screen">
      <div className="m-auto">
        <SpinnerLoader />
      </div>
    </div>
  );
}
