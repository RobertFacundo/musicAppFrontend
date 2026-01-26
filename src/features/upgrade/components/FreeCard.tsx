export const FreeCard = () => (
  <div className="
    p-6 rounded-xl shadow-md
    bg-white/40 dark:bg-neutral-900/40
    border border-neutral-200/40 dark:border-neutral-700/40
    flex flex-col
    opacity-90
  ">
    <h3 className="text-lg font-semibold mb-4 text-neutral-700 border-b border-neutral-200/40 dark:border-neutral-700/40 dark:text-neutral-300">Free</h3>
    <ul className="flex-1 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
      <li>✓ Ads</li>
      <li>✓ Limited skips</li>
      <li>✓ Basic features</li>
    </ul>

    <div className="mt-6 text-center text-sm text-neutral-500">
       Your current plan
    </div>
  </div>
);