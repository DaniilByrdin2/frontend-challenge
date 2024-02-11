export const getId = (target: HTMLElement): string | null => {
    return target.closest("svg")?.dataset.id || null;
};
