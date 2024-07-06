'use client';

import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // 検索バー：関数が走るごとに、callbackの中身が0.3秒経過して走る
  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    // NOTE: paramsは、入力値を取得する
    // console.log(searchParams);
    const params = new URLSearchParams(searchParams);
    // console.log(term);
    params.set('page', '1');
    if (term) {
      // NOTE: クエリー条件にterm（入力値）を追記しろ
      params.set('query', term);
    } else {
      // NOTE: クエリー条件にterm（入力値）を追記しろ
      params.delete('query');
    }

    // NOTE: 上で指定した条件に、urlのpathnameを書き換えろ
    // ${pathname}：現在のpath
    // ユーザーが検索バーに入力すると${params.toString()}に入力値が入る
    // useRouterをreplaceって名前に変換してる
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        // NOTE: handleSeachの内容に書き換えろ
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}

// MUIをstorybookにする
// テキストの表示とか、disabledとか確認できることはある
// 共通利用するモノ。