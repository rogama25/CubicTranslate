import useLocalStorageState, {LocalStorageOptions} from "use-local-storage-state";
import {Dispatch, useEffect, useReducer} from "react";

export default function useLocalStorageReducer<T, R>(key: string, reducer: (state: T, action: R) => T, options?: LocalStorageOptions<T>): [T, Dispatch<R>] {
  const [persistedValue, setPersistedValue] = useLocalStorageState(key, options);

  const [state, dispatch] = useReducer(reducer, persistedValue, () => {
    if (typeof window !== "undefined") {
      return JSON.parse(
        window.localStorage.getItem(key) || String(persistedValue)
      );
    }
    return persistedValue;
  });

  useEffect(() => {
    setPersistedValue(state);
  }, [setPersistedValue, state]);
  return [state, dispatch];
}
