function GridLists() {
  return (
    <div className="mx-auto grid grid-cols-1 gap-x-5 gap-px gap-y-px md:grid-cols-2 lg:grid-cols-4 border-2 border-emerald-300 text-black">
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
    </div>
  );
}

function Section(){
  return (
    <div className="flex flex-col  bg-white">
        <div className="flex items-center justify-between px-4 py-5 border-b border-b-neutral-400">
          <div className="flex flex-col items-start justify-center gap-y-1">
            <div className="flex flex-row items-center gap-x-5">
              <div className="text-xs">Jane Cooper</div>
              <div className="rounded-full border border-green-400 bg-green-50 px-2 py-0.5 text-xs text-green-500">
                Admin
              </div>
            </div>
            <div className="text-xs text-slate-500">Regional Paradigm Technician</div>
          </div>
          <div className="h-12 w-12 bg-fuchsia-600 rounded-full" />
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="w-full text-center py-1 border-r border-r-neutral-400"> Email

          </div>
          <div className="w-full text-center pw-1">Call</div>
        </div>
      </div>
  )
}

export default GridLists;
