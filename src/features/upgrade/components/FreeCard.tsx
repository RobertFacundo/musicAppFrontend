export const FreeCard = () => (
  <div className="
    p-6 rounded-xl shadow-md
    bg-white/70 dark:bg-neutral-900/70
    flex flex-col
  ">
    <h3 className="text-xl font-bold mb-4">Free</h3>
    <ul className="flex-1 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
      <li>• Ads</li>
      <li>• Limited skips</li>
      <li>• Basic features</li>
    </ul>

    <div className="mt-6 text-center text-sm text-neutral-500">
      Current plan
    </div>
  </div>
);