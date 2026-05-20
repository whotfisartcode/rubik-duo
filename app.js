const LEGACY_STORAGE_KEY = "rubik-duo-v1";
const AUTH_KEY = "rubik-duo-auth-v1";
const CLOUD_META_KEY = "rubik-duo-cloud-v1";
const DB_NAME = "rubik-duo-db";
const DB_STORE = "app-state";
const LEGACY_DB_RECORD_ID = "current";
const MAX_TEXTS = 20;
const THEME_KEY = "rubik-duo-theme-v1";
const LANGUAGE_KEY = "rubik-duo-language-v1";
const GOOGLE_CLIENT_ID = "959235616258-q20q1ckuj2089bmaf0moart8jgh5d8ff.apps.googleusercontent.com";
const GOOGLE_SCOPES = "https://www.googleapis.com/auth/drive.appdata";
const GOOGLE_ACCOUNT_ID = "google-drive";
const DRIVE_FILE_NAME = "rubik-duo-state.json";
const UI_TEXT = {
  en: {
    appSubtitle: "Your second memory",
    navLibrary: "Library",
    navReview: "Review",
    navSettings: "Settings",
    primaryNavigation: "Primary navigation",
    back: "Back",
    theme: "Theme",
    privateStudio: "Private language studio",
    introTitle: "Keep the phrases that actually belong to you.",
    introCopy: "Paste Italian texts, refine phrases, and review them from a phone-friendly workspace.",
    syncGoogle: "Sync with Google",
    loginCopy: "Rubik Duo will save one hidden data file in your Google Drive app storage. Local storage remains available for offline use.",
    useOffline: "Use this device offline",
    today: "Today",
    phrasesNeedCare: "Review queue: {count} {phraseWord}",
    readySummary: "{ready} {textWord} ready for lessons. {phrases} {phraseWord} saved.",
    startSummary: "Start by adding one Italian text.",
    newText: "New Text",
    reviewToday: "Review Today",
    textsMetric: "texts / {max}",
    phrasesMetric: "phrases",
    reviewMetric: "review",
    save: "Save",
    saveNow: "Save now",
    removeDuplicates: "Remove duplicates",
    switchAccount: "Switch account",
    myTexts: "My Texts",
    open: "Open",
    edit: "Edit",
    delete: "Delete",
    weak: "weak",
    noTexts: "No texts yet. Add your first text and a few phrases to start a lesson.",
    textWorkspaceOpened: "Text workspace opened",
    textWorkspace: "Text Workspace",
    sourceContext: "Source context",
    startLesson: "Start lesson",
    correctText: "Correct text",
    createPhrases: "Create phrases",
    fillPhrases: "Fill phrases",
    addPhrase: "Add phrase",
    phrases: "Phrases",
    deleteText: "Delete text",
    phrase: "Phrase",
    addMeaning: "Add a meaning before the lesson",
    hasImage: "has image",
    ready: "ready",
    draft: "draft",
    correctLower: "correct",
    reviewCount: "review {count}/3",
    noPhrases: "Add phrases manually or create them from the source text. Then you can start a lesson.",
    mvpLimit: "MVP limit",
    mvpLimitMessage: "This first version stores up to {max} texts. Delete an old text to add a new one.",
    pasteNow: "Paste now, upload later",
    textSource: "Text source",
    pasteItalianBelow: "Paste Italian text below",
    uploadLater: "File and photo import will fit here when the backend is ready.",
    uploadPlaceholder: "Upload placeholder",
    title: "Title",
    titlePlaceholder: "Example: Capitolo 1",
    italianSourceText: "Italian source text",
    italianSourcePlaceholder: "Paste your Italian text here",
    saveText: "Save text",
    textSaved: "Text saved",
    saveChanges: "Save changes",
    changesSaved: "Changes saved",
    deleteConfirm: "Delete text \"{title}\"?",
    textDeleted: "Text deleted",
    backupDownloaded: "Backup downloaded",
    backupRestored: "Backup restored",
    backupReadError: "Could not read the backup file",
    fillPhrasesTitle: "Fill Phrases",
    meaning: "Meaning",
    meaningPlaceholder: "Example: I am going to school.",
    gapType: "Gap type",
    gapAnswer: "Gap answer",
    noPhrasesYet: "No phrases yet. Press “Create phrases” in the text workspace.",
    saveAllPhrases: "Save all phrases",
    phrasesSaved: "Phrases saved",
    phraseDeleted: "Phrase deleted",
    editPhrase: "Edit Phrase",
    newPhrase: "New Phrase",
    italianPhrase: "Italian phrase",
    meaningPhrasePlaceholder: "I fell a little behind with school / work.",
    sourceContextLabel: "Source context",
    sourceContextPlaceholder: "Sentence or source excerpt",
    imageUrl: "Image URL, optional",
    gapAnswerPlaceholder: "example: con",
    verbCondition: "Verb condition",
    verbConditionPlaceholder: "example: io, passato prossimo, feminine",
    correctVerbForm: "Correct verb form",
    correctVerbPlaceholder: "example: sono rimasta",
    savePhrase: "Save phrase",
    phraseUpdated: "Phrase updated",
    phraseSaved: "Phrase saved",
    duplicatesRemoved: "Duplicates removed: {count}",
    noDuplicates: "No duplicates found",
    createdPhrases: "Created phrases: {count}. Add meanings and save all.",
    noNewPhrases: "No new phrases found",
    toClear: "{count}/3 to clear",
    noReview: "Nothing to review yet. Weak phrases will appear here automatically.",
    reviewWeakPhrases: "Review weak phrases",
    settings: "Settings",
    themeStorage: "Theme and storage",
    appearance: "Appearance",
    system: "System",
    light: "Light",
    dark: "Dark",
    interfaceLanguage: "Interface language",
    english: "English",
    russian: "Русский",
    storage: "Storage",
    iDontKnow: "I don’t know",
    chooseMeaning: "Choose the correct meaning",
    chooseItalian: "Choose the Italian phrase",
    insertVerb: "Insert the verb in the correct form",
    insertMissing: "Insert the missing {type}",
    memoryCard: "Memory card",
    needReview: "Need review",
    remembered: "Remembered",
    buildPhrase: "Build the phrase",
    tapWords: "Tap words to add them here",
    condition: "Condition:",
    check: "Check",
    markedRemembered: "Marked as remembered",
    markedReview: "Marked for review",
    reviewLater: "Review later",
    correct: "Correct",
    feedbackNote: "Memory cards do not affect the correct-answer score.",
    continue: "Continue",
    result: "Result",
    lesson: "Lesson",
    cards: "cards",
    backHome: "Back home",
    googleDriveConnected: "Google Drive connected",
    googleDrive: "Google Drive",
    offlineDevice: "Offline on this device",
    localProfile: "Local profile",
    notYet: "not yet",
    syncStatusSyncing: "Syncing to Google Drive...",
    syncStatusConnecting: "Reconnecting to Google Drive...",
    syncStatusReconnect: "Last Google Drive sync: {time}. Press Save to reconnect.",
    syncStatusSavedDrive: "Saved to Google Drive: {time}",
    syncStatusError: "Saved locally. Google Drive error: {error}",
    syncStatusLocal: "Local autosave: {time}",
    syncStatusLocalDevice: "Local autosave: {time} · this device only",
    savedNoBackup: "Saved in the browser. Backup storage is unavailable.",
    connectFirst: "Connect Google Drive first",
    savedConnect: "Saved locally. Connect Google Drive to sync.",
    savedDevice: "Saved on this device",
    savedLocalStorageUnavailable: "Saved in localStorage. Browser backup storage is unavailable",
    dataRestored: "Data restored",
    localStorageOnly: "Data is saved only in localStorage. Open through http://localhost:5173 when possible.",
    googleClosed: "Google sign-in was closed or blocked",
    googleLoading: "Google sign-in is still loading. Try again in a moment.",
    googleFailed: "Google Drive connection failed",
    googleReconnectFailed: "Google session could not be restored. Press Save to reconnect.",
    googleConnected: "Google Drive connected",
    driveSyncFailed: "Saved locally. Google Drive sync failed.",
    syncFailed: "sync failed",
    googleAccessMissing: "Google did not return an access token",
    savedToDrive: "Saved to Google Drive",
    emailPin: "Enter an email and a PIN with at least 4 digits",
    signedIn: "Signed in",
    signedInProfile: "Signed in. Data is linked to this profile.",
    lessonNeedsMeaning: "Add a meaning to at least one phrase before starting a lesson",
    weakPhrases: "Weak Phrases",
    languageUpdated: "Interface language updated",
    themeUpdated: "Theme updated",
    word: "word",
    preposition: "preposition",
    verb: "verb",
  },
  ru: {
    appSubtitle: "Твоя вторая память",
    navLibrary: "Библиотека",
    navReview: "Повторение",
    navSettings: "Настройки",
    primaryNavigation: "Основная навигация",
    back: "Назад",
    theme: "Тема",
    privateStudio: "Личная языковая студия",
    introTitle: "Запоминай фразы, которые действительно твои.",
    introCopy: "Добавляй итальянские тексты, уточняй фразы и повторяй их в удобном формате с телефона.",
    syncGoogle: "Синхронизировать с Google",
    loginCopy: "Rubik Duo сохранит один скрытый файл данных в Google Drive. Локальное хранение останется доступным офлайн.",
    useOffline: "Использовать это устройство офлайн",
    today: "Сегодня",
    phrasesNeedCare: "Нужно повторить: {count} {phraseWord}",
    readySummary: "Готово к урокам: {ready} {textWord}. Сохранено: {phrases} {phraseWord}.",
    startSummary: "Начни с одного итальянского текста.",
    newText: "Новый текст",
    reviewToday: "Повторить сегодня",
    textsMetric: "текстов / {max}",
    phrasesMetric: "фразы",
    reviewMetric: "повторение",
    save: "Сохранить",
    saveNow: "Сохранить сейчас",
    removeDuplicates: "Удалить дубликаты",
    switchAccount: "Сменить вход",
    myTexts: "Мои тексты",
    open: "Открыть",
    edit: "Править",
    delete: "Удалить",
    weak: "слабые",
    noTexts: "Пока нет текстов. Добавь первый текст и несколько фраз, чтобы начать урок.",
    textWorkspaceOpened: "Меню текста открыто",
    textWorkspace: "Меню текста",
    sourceContext: "Исходный текст",
    startLesson: "Начать урок",
    correctText: "Исправить текст",
    createPhrases: "Создать фразы",
    fillPhrases: "Заполнить фразы",
    addPhrase: "Добавить фразу",
    phrases: "Фразы",
    deleteText: "Удалить текст",
    phrase: "Фраза",
    addMeaning: "Добавь смысл перед уроком",
    hasImage: "есть картинка",
    ready: "готово",
    draft: "черновик",
    correctLower: "верно",
    reviewCount: "повторение {count}/3",
    noPhrases: "Добавь фразы вручную или создай их из текста. После этого можно запускать урок.",
    mvpLimit: "Лимит MVP",
    mvpLimitMessage: "В первой версии можно хранить до {max} текстов. Удали старый текст, чтобы добавить новый.",
    pasteNow: "Ручная вставка",
    textSource: "Источник текста",
    pasteItalianBelow: "Вставь итальянский текст ниже",
    uploadLater: "Загрузка файла и фото появится здесь, когда будет готов backend.",
    uploadPlaceholder: "Зона загрузки",
    title: "Название",
    titlePlaceholder: "Например: Capitolo 1",
    italianSourceText: "Итальянский текст",
    italianSourcePlaceholder: "Вставь итальянский текст сюда",
    saveText: "Сохранить текст",
    textSaved: "Текст сохранен",
    saveChanges: "Сохранить изменения",
    changesSaved: "Изменения сохранены",
    deleteConfirm: "Удалить текст «{title}»?",
    textDeleted: "Текст удален",
    backupDownloaded: "Резервная копия скачана",
    backupRestored: "Резервная копия восстановлена",
    backupReadError: "Не удалось прочитать резервную копию",
    fillPhrasesTitle: "Заполнить фразы",
    meaning: "Смысл",
    meaningPlaceholder: "Например: Я иду в школу.",
    gapType: "Тип пропуска",
    gapAnswer: "Ответ для пропуска",
    noPhrasesYet: "Фраз пока нет. Нажми «Создать фразы» в меню текста.",
    saveAllPhrases: "Сохранить все фразы",
    phrasesSaved: "Фразы сохранены",
    phraseDeleted: "Фраза удалена",
    editPhrase: "Править фразу",
    newPhrase: "Новая фраза",
    italianPhrase: "Итальянская фраза",
    meaningPhrasePlaceholder: "Я немного отстала по учебе / работе.",
    sourceContextLabel: "Контекст из текста",
    sourceContextPlaceholder: "Предложение или фрагмент текста",
    imageUrl: "URL картинки, необязательно",
    gapAnswerPlaceholder: "например: con",
    verbCondition: "Условие для глагола",
    verbConditionPlaceholder: "например: io, passato prossimo, feminine",
    correctVerbForm: "Правильная форма глагола",
    correctVerbPlaceholder: "например: sono rimasta",
    savePhrase: "Сохранить фразу",
    phraseUpdated: "Фраза обновлена",
    phraseSaved: "Фраза сохранена",
    duplicatesRemoved: "Удалено дубликатов: {count}",
    noDuplicates: "Дубликатов не найдено",
    createdPhrases: "Создано фраз: {count}. Добавь смысл и сохрани все.",
    noNewPhrases: "Новых фраз не найдено",
    toClear: "{count}/3 до выхода",
    noReview: "Пока нечего повторять. Слабые фразы появятся здесь автоматически.",
    reviewWeakPhrases: "Повторить слабые фразы",
    settings: "Настройки",
    themeStorage: "Тема и хранение",
    appearance: "Внешний вид",
    system: "Системная",
    light: "Светлая",
    dark: "Темная",
    interfaceLanguage: "Язык интерфейса",
    english: "English",
    russian: "Русский",
    storage: "Хранение",
    iDontKnow: "Я не знаю",
    chooseMeaning: "Выбери правильный смысл",
    chooseItalian: "Выбери итальянскую фразу",
    insertVerb: "Вставь глагол в нужной форме",
    insertMissing: "Вставь пропущенное: {type}",
    memoryCard: "Карточка памяти",
    needReview: "Повторить",
    remembered: "Помню",
    buildPhrase: "Собери фразу",
    tapWords: "Нажимай слова, чтобы добавить их сюда",
    condition: "Условие:",
    check: "Проверить",
    markedRemembered: "Отмечено: помню",
    markedReview: "Отмечено: повторить",
    reviewLater: "Повторим позже",
    correct: "Верно",
    feedbackNote: "Карточки памяти не влияют на счетчик правильных ответов.",
    continue: "Продолжить",
    result: "Результат",
    lesson: "Урок",
    cards: "карточки",
    backHome: "На главный экран",
    googleDriveConnected: "Google Drive подключен",
    googleDrive: "Google Drive",
    offlineDevice: "Офлайн на этом устройстве",
    localProfile: "Локальный профиль",
    notYet: "еще не было",
    syncStatusSyncing: "Синхронизация с Google Drive...",
    syncStatusConnecting: "Восстанавливаю Google Drive...",
    syncStatusReconnect: "Последняя синхронизация: {time}. Нажми «Сохранить», чтобы подключиться заново.",
    syncStatusSavedDrive: "Сохранено в Google Drive: {time}",
    syncStatusError: "Сохранено локально. Ошибка Google Drive: {error}",
    syncStatusLocal: "Локальное автосохранение: {time}",
    syncStatusLocalDevice: "Локальное автосохранение: {time} · только это устройство",
    savedNoBackup: "Сохранено в браузере. Резервное хранилище недоступно.",
    connectFirst: "Сначала подключи Google Drive",
    savedConnect: "Сохранено локально. Подключи Google Drive для синхронизации.",
    savedDevice: "Сохранено на этом устройстве",
    savedLocalStorageUnavailable: "Сохранено в localStorage. Резервное хранилище браузера недоступно",
    dataRestored: "Данные восстановлены",
    localStorageOnly: "Данные сохранены только в localStorage. Лучше открыть через http://localhost:5173.",
    googleClosed: "Вход через Google был закрыт или заблокирован",
    googleLoading: "Google вход еще загружается. Попробуй через пару секунд.",
    googleFailed: "Не удалось подключить Google Drive",
    googleReconnectFailed: "Не удалось восстановить Google сессию. Нажми «Сохранить», чтобы подключиться заново.",
    googleConnected: "Google Drive подключен",
    driveSyncFailed: "Сохранено локально. Синхронизация с Google Drive не удалась.",
    syncFailed: "синхронизация не удалась",
    googleAccessMissing: "Google не вернул access token",
    savedToDrive: "Сохранено в Google Drive",
    emailPin: "Введи почту и PIN минимум из 4 цифр",
    signedIn: "Вход выполнен",
    signedInProfile: "Вход выполнен. Данные привязаны к профилю.",
    lessonNeedsMeaning: "Добавь смысл хотя бы к одной фразе перед уроком",
    weakPhrases: "Слабые фразы",
    languageUpdated: "Язык интерфейса обновлен",
    themeUpdated: "Тема обновлена",
    word: "слово",
    preposition: "предлог",
    verb: "глагол",
  },
};

let account = loadAccount();
let cloud = loadCloudMeta();
let googleAccessToken = "";
let googleTokenClient = null;
let googleAuthMode = "interactive";
let syncTimer = null;
let syncAfterAuth = false;
let theme = loadTheme();
let language = loadLanguage();
const state = loadState();
let view = { name: "home" };
let lesson = null;
let toast = "";

applyTheme(theme);
applyLanguage(language);

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || button.disabled) return;
  button.classList.add("pressed");
  window.setTimeout(() => button.classList.remove("pressed"), 220);
});

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function emptyState() {
  return { texts: [], activeTextId: null, savedAt: null };
}

function loadTheme() {
  try {
    return localStorage.getItem(THEME_KEY) || "system";
  } catch {
    return "system";
  }
}

function applyTheme(nextTheme) {
  const root = document.documentElement;
  root.dataset.theme = nextTheme;
  root.style.colorScheme = nextTheme === "dark" ? "dark" : nextTheme === "light" ? "light" : "light dark";
}

function setTheme(nextTheme) {
  theme = nextTheme;
  localStorage.setItem(THEME_KEY, nextTheme);
  applyTheme(nextTheme);
  notify(t("themeUpdated"));
  render();
}

function loadLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_KEY) || "en";
  } catch {
    return "en";
  }
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  localStorage.setItem(LANGUAGE_KEY, nextLanguage);
  applyLanguage(nextLanguage);
  notify(t("languageUpdated"));
  render();
}

function applyLanguage(nextLanguage) {
  document.documentElement.lang = nextLanguage === "ru" ? "ru" : "en";
}

function t(key, params = {}) {
  const template = UI_TEXT[language]?.[key] ?? UI_TEXT.en[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (_, name) => params[name] ?? "");
}

function normalizeEmail(value = "") {
  return value.trim().toLowerCase();
}

function profileId(email, pin) {
  let hash = 2166136261;
  const value = `${normalizeEmail(email)}|${pin}`;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0).toString(36);
}

function loadAccount() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function loadCloudMeta() {
  try {
    const raw = localStorage.getItem(CLOUD_META_KEY);
    return {
      status: "offline",
      fileId: null,
      lastSyncedAt: null,
      dirty: false,
      error: "",
      ...(raw ? JSON.parse(raw) : {}),
    };
  } catch {
    return { status: "offline", fileId: null, lastSyncedAt: null, dirty: false, error: "" };
  }
}

function persistCloudMeta() {
  localStorage.setItem(CLOUD_META_KEY, JSON.stringify({
    fileId: cloud.fileId,
    lastSyncedAt: cloud.lastSyncedAt,
    dirty: cloud.dirty,
    status: cloud.status,
    error: cloud.error,
  }));
}

function accountStorageKey(active = account) {
  if (active?.source === "google") return `${LEGACY_STORAGE_KEY}:google-drive`;
  return active?.id ? `${LEGACY_STORAGE_KEY}:profile:${active.id}` : LEGACY_STORAGE_KEY;
}

function accountRecordId(active = account) {
  if (active?.source === "google") return "profile:google-drive";
  return active?.id ? `profile:${active.id}` : LEGACY_DB_RECORD_ID;
}

function loadState() {
  const fallback = emptyState();
  try {
    const raw = localStorage.getItem(accountStorageKey());
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return { ...fallback, ...parsed };
  } catch {
    return fallback;
  }
}

function saveState() {
  if (!account) return;
  state.savedAt = new Date().toISOString();
  const snapshot = cloneState(state);
  saveSnapshotLocally(snapshot);
  saveStateToIndexedDB(snapshot).catch(() => {
    notify(t("savedNoBackup"));
    render();
  });
  scheduleCloudSync();
}

async function manualSave() {
  if (!account) {
    setView({ name: "login" }, t("connectFirst"));
    return;
  }
  state.savedAt = new Date().toISOString();
  const snapshot = cloneState(state);
  saveSnapshotLocally(snapshot);
  try {
    await saveStateToIndexedDB(snapshot);
    if (account.source === "google") {
      if (!googleAccessToken) {
        syncAfterAuth = true;
        notify(t("savedConnect"));
        render();
        connectGoogleDrive({ prompt: "consent" });
        return;
      }
      await syncToGoogleDrive({ showMessage: true });
      return;
    }
    notify(t("savedDevice"));
  } catch {
    notify(t("savedLocalStorageUnavailable"));
  }
  render();
}

function saveSnapshotLocally(snapshot) {
  localStorage.setItem(accountStorageKey(), JSON.stringify(snapshot));
}

function cloneState(value) {
  return JSON.parse(JSON.stringify(value));
}

function openAppDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB is unavailable"));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(DB_STORE);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveStateToIndexedDB(snapshot) {
  const db = await openAppDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readwrite");
    tx.objectStore(DB_STORE).put(snapshot, accountRecordId());
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };
  });
}

async function loadStateFromIndexedDB() {
  const db = await openAppDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readonly");
    const request = tx.objectStore(DB_STORE).get(accountRecordId());
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
    tx.oncomplete = () => db.close();
  });
}

function shouldUsePersistedState(persisted, current) {
  if (!persisted || !Array.isArray(persisted.texts)) return false;
  if (!current.texts?.length && persisted.texts.length) return true;
  if (!persisted.savedAt || !current.savedAt) return false;
  return new Date(persisted.savedAt).getTime() > new Date(current.savedAt).getTime();
}

async function hydratePersistentState() {
  if (!account) return;
  try {
    const persisted = await loadStateFromIndexedDB();
    if (shouldUsePersistedState(persisted, state)) {
      Object.keys(state).forEach((key) => delete state[key]);
      Object.assign(state, emptyState(), persisted);
      setView({ name: "home" }, t("dataRestored"));
      return;
    }
    if (state.texts.length) {
      await saveStateToIndexedDB(cloneState(state));
    }
  } catch {
    if (state.texts.length) {
      notify(t("localStorageOnly"));
      render();
    }
  }
}

async function loadLegacyIndexedState() {
  const db = await openAppDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readonly");
    const request = tx.objectStore(DB_STORE).get(LEGACY_DB_RECORD_ID);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
    tx.oncomplete = () => db.close();
  });
}

function initGoogleTokenClient() {
  if (googleTokenClient) return googleTokenClient;
  if (!window.google?.accounts?.oauth2) {
    throw new Error("Google Identity script is not loaded yet");
  }
  googleTokenClient = google.accounts.oauth2.initTokenClient({
    client_id: GOOGLE_CLIENT_ID,
    scope: GOOGLE_SCOPES,
    callback: handleGoogleToken,
    error_callback: () => {
      if (googleAuthMode === "silent") {
        cloud.status = "offline";
        cloud.error = t("googleReconnectFailed");
        persistCloudMeta();
        render();
        return;
      }
      cloud.status = "error";
      cloud.error = t("googleClosed");
      persistCloudMeta();
      notify(t("googleClosed"));
      render();
    },
  });
  return googleTokenClient;
}

function connectGoogleDrive(options = {}) {
  const { prompt = account?.source === "google" ? "" : "consent", silent = false } = options;
  try {
    const client = initGoogleTokenClient();
    googleAuthMode = silent ? "silent" : "interactive";
    cloud.status = silent ? "connecting" : "syncing";
    cloud.error = "";
    persistCloudMeta();
    client.requestAccessToken({ prompt });
  } catch {
    if (silent) return;
    notify(t("googleLoading"));
    render();
  }
}

async function handleGoogleToken(response) {
  if (response.error || !response.access_token) {
    if (googleAuthMode === "silent") {
      cloud.status = "offline";
      cloud.error = t("googleReconnectFailed");
      persistCloudMeta();
      render();
      return;
    }
    cloud.status = "error";
    cloud.error = response.error || t("googleAccessMissing");
    persistCloudMeta();
    notify(t("googleFailed"));
    render();
    return;
  }
  googleAccessToken = response.access_token;
  googleAuthMode = "interactive";
  account = {
    id: GOOGLE_ACCOUNT_ID,
    email: "Google Drive",
    source: "google",
    signedInAt: new Date().toISOString(),
  };
  localStorage.setItem(AUTH_KEY, JSON.stringify(account));
  await syncFromGoogleDrive();
}

function restoreGoogleSession() {
  if (account?.source !== "google" || googleAccessToken) return;
  const startedAt = Date.now();
  const tryReconnect = () => {
    if (account?.source !== "google" || googleAccessToken) return;
    if (window.google?.accounts?.oauth2) {
      connectGoogleDrive({ prompt: "", silent: true });
      return;
    }
    if (Date.now() - startedAt < 8000) {
      window.setTimeout(tryReconnect, 250);
    }
  };
  window.setTimeout(tryReconnect, 350);
}

function scheduleCloudSync() {
  if (account?.source !== "google" || !googleAccessToken) return;
  cloud.dirty = true;
  persistCloudMeta();
  window.clearTimeout(syncTimer);
  syncTimer = window.setTimeout(() => {
    syncToGoogleDrive().catch(() => {});
  }, 900);
}

async function syncFromGoogleDrive() {
  cloud.status = "syncing";
  cloud.error = "";
  persistCloudMeta();
  render();
  try {
    const remoteFile = await findDriveStateFile();
    cloud.fileId = remoteFile?.id || cloud.fileId || null;
    const remoteState = remoteFile ? await downloadDriveState(remoteFile.id) : null;
    const localState = cloneState(state);
    const useRemote = shouldUsePersistedState(remoteState, localState);

    if (useRemote) {
      Object.keys(state).forEach((key) => delete state[key]);
      Object.assign(state, emptyState(), remoteState);
      const snapshot = cloneState(state);
      saveSnapshotLocally(snapshot);
      await saveStateToIndexedDB(snapshot);
    }

    if (!remoteFile || !useRemote || syncAfterAuth) {
      await syncToGoogleDrive({ silent: true });
    }

    syncAfterAuth = false;
    cloud.status = "synced";
    cloud.lastSyncedAt = new Date().toISOString();
    cloud.dirty = false;
    cloud.error = "";
    persistCloudMeta();
    setView({ name: "home" }, t("googleConnected"));
  } catch (error) {
    cloud.status = "error";
    cloud.error = error.message || t("driveSyncFailed");
    cloud.dirty = true;
    persistCloudMeta();
    notify(t("driveSyncFailed"));
    render();
  }
}

async function syncToGoogleDrive(options = {}) {
  if (account?.source !== "google" || !googleAccessToken) return;
  const { showMessage = false, silent = false } = options;
  cloud.status = "syncing";
  cloud.error = "";
  persistCloudMeta();
  if (!silent) render();
  try {
    if (!cloud.fileId) {
      const remoteFile = await findDriveStateFile();
      cloud.fileId = remoteFile?.id || null;
    }
    const snapshot = cloneState(state);
    if (cloud.fileId) {
      await updateDriveStateFile(cloud.fileId, snapshot);
    } else {
      const created = await createDriveStateFile(snapshot);
      cloud.fileId = created.id;
    }
    cloud.status = "synced";
    cloud.lastSyncedAt = new Date().toISOString();
    cloud.dirty = false;
    cloud.error = "";
    persistCloudMeta();
    if (showMessage) notify(t("savedToDrive"));
    if (!silent || showMessage) render();
  } catch (error) {
    cloud.status = "error";
    cloud.error = error.message || t("driveSyncFailed");
    cloud.dirty = true;
    persistCloudMeta();
    if (showMessage) notify(t("driveSyncFailed"));
    if (!silent || showMessage) render();
    throw error;
  }
}

async function driveFetch(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${googleAccessToken}`,
      ...(options.headers || {}),
    },
  });
  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(text || `Google Drive request failed: ${response.status}`);
  }
  return response;
}

async function findDriveStateFile() {
  const query = encodeURIComponent(`name='${DRIVE_FILE_NAME}' and 'appDataFolder' in parents and trashed=false`);
  const fields = encodeURIComponent("files(id,name,modifiedTime)");
  const url = `https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&q=${query}&fields=${fields}`;
  const response = await driveFetch(url);
  const data = await response.json();
  return data.files?.[0] || null;
}

async function downloadDriveState(fileId) {
  const response = await driveFetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`);
  const data = await response.json();
  return { ...emptyState(), ...data };
}

async function createDriveStateFile(snapshot) {
  const metadata = {
    name: DRIVE_FILE_NAME,
    parents: ["appDataFolder"],
    mimeType: "application/json",
  };
  const boundary = `rubik_duo_${uid()}`;
  const body = [
    `--${boundary}`,
    "Content-Type: application/json; charset=UTF-8",
    "",
    JSON.stringify(metadata),
    `--${boundary}`,
    "Content-Type: application/json; charset=UTF-8",
    "",
    JSON.stringify(snapshot),
    `--${boundary}--`,
  ].join("\r\n");
  const response = await driveFetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,modifiedTime", {
    method: "POST",
    headers: { "Content-Type": `multipart/related; boundary=${boundary}` },
    body,
  });
  return response.json();
}

async function updateDriveStateFile(fileId, snapshot) {
  const response = await driveFetch(`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media&fields=id,modifiedTime`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(snapshot),
  });
  return response.json();
}

async function loginAccount(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const email = normalizeEmail(form.get("email"));
  const pin = String(form.get("pin") || "").trim();
  if (!email || pin.length < 4) {
    notify(t("emailPin"));
    render();
    return;
  }

  const nextAccount = {
    id: profileId(email, pin),
    email,
    signedInAt: new Date().toISOString(),
  };
  account = nextAccount;
  localStorage.setItem(AUTH_KEY, JSON.stringify(nextAccount));

  const profileState = readStateFromKey(accountStorageKey(nextAccount));
  const legacyState = readStateFromKey(LEGACY_STORAGE_KEY);
  let nextState = profileState;
  if (!profileState.texts.length && legacyState.texts.length) {
    nextState = legacyState;
  } else if (!profileState.texts.length) {
    try {
      const legacyIndexed = await loadLegacyIndexedState();
      if (legacyIndexed?.texts?.length) nextState = { ...emptyState(), ...legacyIndexed };
    } catch {
      nextState = profileState;
    }
  }

  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, emptyState(), nextState);
  saveState();
  setView({ name: "home" }, profileState.texts.length ? t("signedIn") : t("signedInProfile"));
}

function readStateFromKey(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? { ...emptyState(), ...JSON.parse(raw) } : emptyState();
  } catch {
    return emptyState();
  }
}

function switchAccount() {
  if (googleAccessToken && window.google?.accounts?.oauth2?.revoke) {
    google.accounts.oauth2.revoke(googleAccessToken);
  }
  localStorage.removeItem(AUTH_KEY);
  account = null;
  googleAccessToken = "";
  cloud.status = "offline";
  cloud.error = "";
  persistCloudMeta();
  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, emptyState());
  setView({ name: "login" }, t("syncGoogle"));
}

function continueOffline() {
  const offlineAccount = {
    id: "offline",
    email: "This device",
    source: "offline",
    signedInAt: new Date().toISOString(),
  };
  account = offlineAccount;
  localStorage.setItem(AUTH_KEY, JSON.stringify(offlineAccount));
  const offlineState = readStateFromKey(accountStorageKey(offlineAccount));
  const legacyState = readStateFromKey(LEGACY_STORAGE_KEY);
  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, emptyState(), offlineState.texts.length ? offlineState : legacyState);
  saveState();
  setView({ name: "home" }, t("offlineDevice"));
}

function notify(message) {
  toast = message;
  window.clearTimeout(notify.timer);
}

function setView(next, message = "") {
  view = next;
  if (message) {
    toast = message;
    window.clearTimeout(notify.timer);
  } else {
    toast = "";
  }
  render();
  if (next.focus === "phrases") {
    window.setTimeout(() => {
      document.getElementById("phrases")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }
}

function activeText() {
  return state.texts.find((text) => text.id === state.activeTextId) || state.texts[0] || null;
}

function findText(textId) {
  return state.texts.find((text) => text.id === textId);
}

function allPhrases() {
  return state.texts.flatMap((text) => text.phrases.map((phrase) => ({ ...phrase, textId: text.id, textTitle: text.title })));
}

function poopPhrases() {
  return allPhrases().filter((phrase) => phrase.inPoop);
}

function phraseStats(phrase) {
  return phrase.stats || { correct: 0, wrong: 0, seen: 0, poopCorrect: 0 };
}

function updatePhrase(textId, phraseId, patch) {
  const text = findText(textId);
  if (!text) return;
  text.phrases = text.phrases.map((phrase) => (phrase.id === phraseId ? { ...phrase, ...patch } : phrase));
  saveState();
}

function sample(array, count, exclude = []) {
  const blocked = new Set(exclude);
  return shuffle(array.filter((item) => !blocked.has(item))).slice(0, count);
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value = "") {
  return value.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.!?;:,]+$/g, "");
}

function tokenizeItalian(value = "") {
  return value
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function significantWords(value = "") {
  const stop = new Set(["il", "lo", "la", "i", "gli", "le", "un", "una", "di", "a", "da", "in", "con", "su", "per", "tra", "fra", "e", "o"]);
  return tokenizeItalian(value)
    .map((word) => word.replace(/[.,!?;:]/g, ""))
    .filter((word) => word.length > 2 && !stop.has(word.toLowerCase()));
}

function normalizeGapType(value = "") {
  const map = {
    "\u0441\u043b\u043e\u0432\u043e": "word",
    "\u043f\u0440\u0435\u0434\u043b\u043e\u0433": "preposition",
    "\u0433\u043b\u0430\u0433\u043e\u043b": "verb",
    word: "word",
    preposition: "preposition",
    verb: "verb",
  };
  return map[value] || "word";
}

function gapTypeLabel(value = "") {
  return t(normalizeGapType(value));
}

function gapTypeOptions(selected) {
  const current = normalizeGapType(selected);
  return [
    ["word", t("word")],
    ["preposition", t("preposition")],
    ["verb", t("verb")],
  ].map(([value, label]) => `<option value="${value}" ${current === value ? "selected" : ""}>${label}</option>`).join("");
}

function createExercisePool(text, source = "text") {
  const phrases = text.phrases || [];
  const pool = [];
  phrases.forEach((phrase) => {
    if (!phrase.italian || !phrase.russian) return;
    pool.push({ type: "it-ru", phrase, textId: text.id, source });
    pool.push({ type: "ru-it", phrase, textId: text.id, source });
    pool.push({ type: "flashcard", phrase, textId: text.id, source });
    pool.push({ type: "order", phrase, textId: text.id, source });
    const answer = phrase.gapAnswer || autoGapAnswer(phrase);
    if (answer) pool.push({ type: "gap", phrase, textId: text.id, source, answer });
    if (phrase.verbAnswer) pool.push({ type: "verb", phrase, textId: text.id, source, answer: phrase.verbAnswer });
  });
  return shuffle(pool);
}

function autoGapAnswer(phrase) {
  return significantWords(phrase.italian)[0] || "";
}

function startTextLesson(textId) {
  const text = findText(textId);
  if (!text || !trainablePhrases(text).length) {
    notify(t("lessonNeedsMeaning"));
    render();
    return;
  }
  lesson = {
    mode: "text",
    title: text.title,
    queue: createExercisePool({ ...text, phrases: trainablePhrases(text) }, "text"),
    currentIndex: 0,
    selected: null,
    pickedWords: [],
    checked: null,
    correct: 0,
    wrong: 0,
    cards: 0,
  };
  setView({ name: "lesson" });
}

function trainablePhrases(text) {
  return (text.phrases || []).filter((phrase) => phrase.italian?.trim() && phrase.russian?.trim());
}

function startPoopLesson() {
  const grouped = new Map();
  poopPhrases().forEach((phrase) => {
    if (!grouped.has(phrase.textId)) grouped.set(phrase.textId, { id: phrase.textId, title: t("weakPhrases"), phrases: [] });
    grouped.get(phrase.textId).phrases.push(phrase);
  });
  const queue = shuffle([...grouped.values()].flatMap((text) => createExercisePool(text, "poop")));
  if (!queue.length) return;
  lesson = {
    mode: "poop",
    title: t("weakPhrases"),
    queue,
    currentIndex: 0,
    selected: null,
    pickedWords: [],
    checked: null,
    correct: 0,
    wrong: 0,
    cards: 0,
  };
  setView({ name: "lesson" });
}

function currentExercise() {
  return lesson?.queue[lesson.currentIndex] || null;
}

function answerCurrent(isCorrect) {
  const exercise = currentExercise();
  if (!exercise) return;
  const text = findText(exercise.textId);
  const latestPhrase = text?.phrases.find((phrase) => phrase.id === exercise.phrase.id) || exercise.phrase;
  const stats = phraseStats(latestPhrase);
  const patch = {
    stats: {
      ...stats,
      seen: stats.seen + 1,
      correct: stats.correct + (isCorrect ? 1 : 0),
      wrong: stats.wrong + (isCorrect ? 0 : 1),
      poopCorrect: exercise.source === "poop" && isCorrect ? stats.poopCorrect + 1 : stats.poopCorrect,
    },
    inPoop: isCorrect ? latestPhrase.inPoop : true,
  };
  if (exercise.source === "poop" && isCorrect && patch.stats.poopCorrect >= 3) {
    patch.inPoop = false;
    patch.stats.poopCorrect = 0;
  }
  updatePhrase(exercise.textId, exercise.phrase.id, patch);
  exercise.phrase = { ...exercise.phrase, ...patch };
  if (isCorrect) {
    lesson.correct += 1;
    continueLesson(t("correct"));
    return;
  }
  lesson.wrong += 1;
  continueLesson(t("reviewLater"));
}

function answerFlashcard(remembered) {
  const exercise = currentExercise();
  if (!exercise) return;
  const text = findText(exercise.textId);
  const latestPhrase = text?.phrases.find((phrase) => phrase.id === exercise.phrase.id) || exercise.phrase;
  const stats = phraseStats(latestPhrase);
  const patch = {
    stats: {
      ...stats,
      seen: stats.seen + 1,
      remembered: (stats.remembered || 0) + (remembered ? 1 : 0),
      forgot: (stats.forgot || 0) + (remembered ? 0 : 1),
    },
  };
  updatePhrase(exercise.textId, exercise.phrase.id, patch);
  exercise.phrase = { ...exercise.phrase, ...patch };
  lesson.cards = (lesson.cards || 0) + 1;
  continueLesson(remembered ? t("markedRemembered") : t("markedReview"));
}

function continueLesson(message = "") {
  if (!lesson) return;
  if (lesson.currentIndex >= lesson.queue.length - 1) {
    setView({ name: "lesson-result", summary: { ...lesson } });
    lesson = null;
    return;
  }
  lesson.currentIndex += 1;
  lesson.selected = null;
  lesson.pickedWords = [];
  lesson.checked = null;
  toast = message;
  render();
}

function render() {
  const app = document.getElementById("app");
  if (view.name === "lesson") {
    app.innerHTML = renderLesson();
    return;
  }
  app.innerHTML = `<main class="app">${renderAppView()}</main>${renderBottomNav()}`;
}

function renderAppView() {
  if (!account || view.name === "login") return renderLogin();
  if (view.name === "new-text") return renderNewText();
  if (view.name === "edit-text") return renderEditText(view.textId);
  if (view.name === "text") return renderTextDetail(view.textId);
  if (view.name === "bulk-phrases") return renderBulkPhrases(view.textId);
  if (view.name === "phrase-form") return renderPhraseForm(view.textId, view.phraseId);
  if (view.name === "poop") return renderPoop();
  if (view.name === "settings") return renderSettings();
  if (view.name === "lesson-result") return renderLessonResult(view.summary);
  return renderHome();
}

function renderBottomNav() {
  if (!account || view.name === "login" || view.name === "lesson") return "";
  const item = (target, label, mark, activeNames) => `
    <button class="nav-item ${activeNames.includes(view.name) ? "active" : ""}" onclick="setView(${JSON.stringify(target).replaceAll('"', "&quot;")})" type="button">
      <span>${mark}</span>
      ${label}
    </button>
  `;
  return `
    <nav class="bottom-nav" aria-label="${t("primaryNavigation")}">
      ${item({ name: "home" }, t("navLibrary"), "⌂", ["home"])}
      ${item({ name: "poop" }, t("navReview"), "◌", ["poop"])}
      ${item({ name: "settings" }, t("navSettings"), "⌘", ["settings"])}
    </nav>
  `;
}

function renderLogin() {
  return `
    <div class="topbar hero-topbar">
      <div class="brand">
        <strong>Rubik Duo</strong>
        <span>${t("syncGoogle")}</span>
      </div>
    </div>
    ${renderToast()}
    <section class="panel login-panel intro-panel">
      <p class="eyebrow">${t("privateStudio")}</p>
      <h1>${t("introTitle")}</h1>
      <p class="intro-copy">${t("introCopy")}</p>
      <button class="primary" type="button" onclick="connectGoogleDrive()">${t("syncGoogle")}</button>
      <p class="login-copy">${t("loginCopy")}</p>
      <button class="secondary" type="button" onclick="continueOffline()">${t("useOffline")}</button>
    </section>
  `;
}

function renderTopbar(title = "Rubik Duo", subtitle = t("appSubtitle"), back = null) {
  return `
    <div class="topbar">
      ${back ? `<button class="icon-btn" aria-label="${t("back")}" onclick="setView(${JSON.stringify(back).replaceAll('"', "&quot;")})">‹</button>` : ""}
      <div class="brand">
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(subtitle)}</span>
      </div>
    </div>
  `;
}

function renderToast() {
  return toast ? `<div class="toast">${escapeHtml(toast)}</div>` : "";
}

function formatSavedAt(value) {
  if (!value) return t("notYet");
  return new Date(value).toLocaleString(language === "ru" ? "ru-RU" : "en-GB", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function pluralRu(count, one, few, many) {
  const value = Math.abs(count) % 100;
  const last = value % 10;
  if (value > 10 && value < 20) return many;
  if (last === 1) return one;
  if (last >= 2 && last <= 4) return few;
  return many;
}

function phraseWord(count) {
  if (language === "ru") return pluralRu(count, "фраза", "фразы", "фраз");
  return count === 1 ? "phrase" : "phrases";
}

function textWord(count) {
  if (language === "ru") return pluralRu(count, "текст", "текста", "текстов");
  return count === 1 ? "text" : "texts";
}

function accountLabel() {
  if (account?.source === "google") return googleAccessToken ? t("googleDriveConnected") : t("googleDrive");
  if (account?.source === "offline") return t("offlineDevice");
  return account?.email || t("localProfile");
}

function syncStatusText() {
  if (account?.source === "google") {
    if (cloud.status === "syncing") return t("syncStatusSyncing");
    if (cloud.status === "connecting") return t("syncStatusConnecting");
    if (!googleAccessToken) return t("syncStatusReconnect", { time: formatSavedAt(cloud.lastSyncedAt) });
    if (cloud.status === "synced") return t("syncStatusSavedDrive", { time: formatSavedAt(cloud.lastSyncedAt) });
    if (cloud.status === "error") return t("syncStatusError", { error: cloud.error || t("syncFailed") });
    return t("syncStatusLocal", { time: formatSavedAt(state.savedAt) });
  }
  return t("syncStatusLocalDevice", { time: formatSavedAt(state.savedAt) });
}

function renderHome() {
  const phrases = allPhrases();
  const poop = poopPhrases();
  const readyTexts = state.texts.filter((text) => trainablePhrases(text).length).length;
  const cards = state.texts.length
    ? state.texts.map((text) => `
      <article class="text-card">
        <div>
          <h3>${escapeHtml(text.title)}</h3>
          <p>${text.phrases.length} ${phraseWord(text.phrases.length)} · ${escapeHtml(text.content.slice(0, 72))}${text.content.length > 72 ? "..." : ""}</p>
        </div>
        <span class="pill">${text.phrases.filter((phrase) => phrase.inPoop).length} ${t("weak")}</span>
        <div class="card-actions">
          <button class="mini good" onclick="openText('${text.id}')">${t("open")}</button>
          <button class="mini" onclick="setView({name:'edit-text',textId:'${text.id}'})">${t("edit")}</button>
          <button class="mini bad" onclick="deleteText('${text.id}')">${t("delete")}</button>
        </div>
      </article>
    `).join("")
    : `<div class="empty">${t("noTexts")}</div>`;

  return `
    ${renderTopbar()}
    ${renderToast()}
    <section class="command-panel">
      <p class="eyebrow">${t("today")}</p>
      <div class="command-title">
        ${poop.length ? `<h1>${t("phrasesNeedCare", { count: poop.length, phraseWord: phraseWord(poop.length) })}</h1>` : ""}
        <p>${state.texts.length ? t("readySummary", { ready: readyTexts, textWord: textWord(readyTexts), phrases: phrases.length, phraseWord: phraseWord(phrases.length) }) : t("startSummary")}</p>
      </div>
      <div class="quick-actions">
        <button class="primary" onclick="setView({name:'new-text'})">${t("newText")}</button>
        <button class="secondary" onclick="setView({name:'poop'})" ${poop.length ? "" : "disabled"}>${t("reviewToday")}</button>
      </div>
    </section>
    <div class="metrics">
      <div class="metric"><strong>${state.texts.length}</strong><span>${t("textsMetric", { max: MAX_TEXTS })}</span></div>
      <div class="metric"><strong>${phrases.length}</strong><span>${t("phrasesMetric")}</span></div>
      <div class="metric"><strong>${poop.length}</strong><span>${t("reviewMetric")}</span></div>
    </div>
    <div class="hero-actions">
      <div class="save-row">
        <button class="secondary account-button" onclick="setView({name:'login'})">${escapeHtml(accountLabel())}</button>
        <button class="primary save-button" onclick="manualSave()">${t("save")}</button>
      </div>
      <p class="save-status">${escapeHtml(syncStatusText())}</p>
      ${account?.source === "google" ? "" : `<button class="secondary" onclick="connectGoogleDrive()">${t("syncGoogle")}</button>`}
      <button class="secondary" onclick="removeDuplicateTexts()" ${state.texts.length < 2 ? "disabled" : ""}>${t("removeDuplicates")}</button>
      <button class="ghost" onclick="switchAccount()">${t("switchAccount")}</button>
    </div>
    <h2 class="section-title" style="margin-top:28px">${t("myTexts")}</h2>
    <div class="stack">${cards}</div>
  `;
}

function openText(textId) {
  state.activeTextId = textId;
  saveState();
  setView({ name: "text", textId }, t("textWorkspaceOpened"));
}

function exportBackup() {
  const snapshot = cloneState(state);
  const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `rubik-duo-backup-${stamp}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  notify(t("backupDownloaded"));
  render();
}

function importBackup(event) {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!Array.isArray(imported.texts)) throw new Error("Bad backup");
      Object.keys(state).forEach((key) => delete state[key]);
      Object.assign(state, { texts: [], activeTextId: null, savedAt: null }, imported);
      saveState();
      setView({ name: "home" }, t("backupRestored"));
    } catch {
      notify(t("backupReadError"));
      render();
    }
  };
  reader.readAsText(file);
}

function renderNewText() {
  if (state.texts.length >= MAX_TEXTS) {
    return `
      ${renderTopbar(t("newText"), t("mvpLimit"), { name: "home" })}
      <div class="empty">${t("mvpLimitMessage", { max: MAX_TEXTS })}</div>
    `;
  }
  return `
    ${renderTopbar(t("newText"), t("pasteNow"), { name: "home" })}
    ${renderToast()}
    <form class="panel text-entry-panel" onsubmit="createText(event)">
      <div class="upload-box" aria-label="${t("uploadPlaceholder")}">
        <span>${t("textSource")}</span>
        <strong>${t("pasteItalianBelow")}</strong>
        <small>${t("uploadLater")}</small>
      </div>
      <div class="field">
        <label>${t("title")}</label>
        <input name="title" aria-label="${t("title")}" placeholder="${t("titlePlaceholder")}" required />
      </div>
      <div class="field">
        <label>${t("italianSourceText")}</label>
        <textarea name="content" aria-label="${t("italianSourceText")}" placeholder="${t("italianSourcePlaceholder")}" required></textarea>
      </div>
      <button class="primary" type="submit">${t("saveText")}</button>
    </form>
  `;
}

function createText(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const text = {
    id: uid(),
    title: form.get("title").trim(),
    content: form.get("content").trim(),
    phrases: [],
    createdAt: new Date().toISOString(),
  };
  state.texts.unshift(text);
  state.activeTextId = text.id;
  saveState();
  setView({ name: "text", textId: text.id }, t("textSaved"));
}

function renderEditText(textId) {
  const text = findText(textId);
  if (!text) return renderHome();
  return `
    ${renderTopbar(t("correctText"), text.title, { name: "text", textId })}
    ${renderToast()}
    <form class="panel text-entry-panel" onsubmit="saveTextEdit(event,'${textId}')">
      <div class="field">
        <label>${t("title")}</label>
        <input name="title" aria-label="${t("title")}" value="${escapeHtml(text.title)}" required />
      </div>
      <div class="field">
        <label>${t("italianSourceText")}</label>
        <textarea name="content" aria-label="${t("italianSourceText")}" required>${escapeHtml(text.content)}</textarea>
      </div>
      <button class="primary" type="submit">${t("saveChanges")}</button>
    </form>
  `;
}

function saveTextEdit(event, textId) {
  event.preventDefault();
  const text = findText(textId);
  if (!text) return;
  const form = new FormData(event.currentTarget);
  text.title = form.get("title").trim();
  text.content = form.get("content").trim();
  saveState();
  setView({ name: "text", textId }, t("changesSaved"));
}

function renderTextDetail(textId) {
  const text = findText(textId);
  if (!text) return renderHome();
  const readyCount = trainablePhrases(text).length;
  const phraseCards = text.phrases.length
    ? text.phrases.map((phrase) => {
      const stats = phraseStats(phrase);
      return `
        <div class="phrase-card">
          <p class="eyebrow">${t("phrase")} · ${gapTypeLabel(phrase.gapType)}</p>
          <h3>${escapeHtml(phrase.italian)}</h3>
          <p>${phrase.russian ? escapeHtml(phrase.russian) : `<span class="needs-translation">${t("addMeaning")}</span>`}</p>
          ${phrase.context ? `<blockquote>${escapeHtml(phrase.context)}</blockquote>` : ""}
          ${phrase.imageUrl ? `<p style="margin-top:8px"><span class="pill">${t("hasImage")}</span></p>` : ""}
          <div class="phrase-actions">
            ${phrase.russian ? `<span class="pill good-pill">${t("ready")}</span>` : `<span class="pill warn-pill">${t("draft")}</span>`}
            <span class="pill">${stats.correct} ${t("correctLower")}</span>
            <span class="pill">${stats.wrong} ${t("weak")}</span>
            ${phrase.inPoop ? `<span class="pill poop">${t("reviewCount", { count: stats.poopCorrect })}</span>` : ""}
            <button class="mini" onclick="setView({name:'phrase-form',textId:'${text.id}',phraseId:'${phrase.id}'})">${t("edit")}</button>
            <button class="mini bad" onclick="deletePhrase('${text.id}','${phrase.id}')">${t("delete")}</button>
          </div>
        </div>
      `;
    }).join("")
    : `<div class="empty">${t("noPhrases")}</div>`;

  return `
    ${renderTopbar(t("textWorkspace"), `${text.title} · ${readyCount}/${text.phrases.length} ${t("ready")}`, { name: "home" })}
    ${renderToast()}
    <div class="panel source-reader">
      <p class="eyebrow">${t("sourceContext")}</p>
      <h1>${escapeHtml(text.title)}</h1>
      <p class="hint">${escapeHtml(text.content)}</p>
    </div>
    <div class="row text-actions" style="margin:16px 0">
      <button class="primary" onclick="startTextLesson('${text.id}')" ${readyCount ? "" : "disabled"}>${t("startLesson")}</button>
      <button class="secondary" onclick="setView({name:'edit-text',textId:'${text.id}'})">${t("correctText")}</button>
      <button class="secondary" onclick="createPhrasesFromText('${text.id}')">${t("createPhrases")}</button>
      <button class="secondary" onclick="setView({name:'bulk-phrases',textId:'${text.id}'})" ${text.phrases.length ? "" : "disabled"}>${t("fillPhrases")}</button>
      <button class="secondary" onclick="setView({name:'phrase-form',textId:'${text.id}'})">${t("addPhrase")}</button>
    </div>
    <h2 class="section-title" id="phrases">${t("phrases")}</h2>
    <div class="stack">${phraseCards}</div>
    <div class="screen-actions">
      <button class="danger" onclick="deleteText('${text.id}')">${t("deleteText")}</button>
    </div>
  `;
}

function renderBulkPhrases(textId) {
  const text = findText(textId);
  if (!text) return renderHome();
  const rows = text.phrases.length
    ? text.phrases.map((phrase, index) => `
      <div class="bulk-row">
        <div class="bulk-head">
          <strong>${index + 1}. ${escapeHtml(phrase.italian)}</strong>
          <button class="mini bad" type="button" onclick="deletePhraseFromBulk('${textId}','${phrase.id}')">${t("delete")}</button>
        </div>
        <div class="field">
          <label>${t("meaning")}</label>
          <textarea name="russian:${phrase.id}" aria-label="${t("meaning")}" placeholder="${t("meaningPlaceholder")}">${escapeHtml(phrase.russian || "")}</textarea>
        </div>
        <div class="row">
          <div class="field">
            <label>${t("gapType")}</label>
            <select name="gapType:${phrase.id}" aria-label="${t("gapType")}">
              ${gapTypeOptions(phrase.gapType)}
            </select>
          </div>
          <div class="field">
            <label>${t("gapAnswer")}</label>
            <input name="gapAnswer:${phrase.id}" aria-label="${t("gapAnswer")}" value="${escapeHtml(phrase.gapAnswer || autoGapAnswer(phrase))}" />
          </div>
        </div>
      </div>
    `).join("")
    : `<div class="empty">${t("noPhrasesYet")}</div>`;

  return `
    ${renderTopbar(t("fillPhrasesTitle"), text.title, { name: "text", textId })}
    ${renderToast()}
    <form class="panel bulk-editor" onsubmit="saveBulkPhrases(event,'${textId}')">
      ${rows}
      <button class="primary" type="submit" ${text.phrases.length ? "" : "disabled"}>${t("saveAllPhrases")}</button>
    </form>
  `;
}

function saveBulkPhrases(event, textId) {
  event.preventDefault();
  const text = findText(textId);
  if (!text) return;
  const form = new FormData(event.currentTarget);
  text.phrases.forEach((phrase) => {
    phrase.russian = (form.get(`russian:${phrase.id}`) || "").trim();
    phrase.gapType = normalizeGapType(form.get(`gapType:${phrase.id}`) || phrase.gapType || "word");
    phrase.gapAnswer = (form.get(`gapAnswer:${phrase.id}`) || "").trim();
  });
  saveState();
  setView({ name: "text", textId, focus: "phrases" }, t("phrasesSaved"));
}

function deletePhraseFromBulk(textId, phraseId) {
  const text = findText(textId);
  if (!text) return;
  text.phrases = text.phrases.filter((phrase) => phrase.id !== phraseId);
  saveState();
  setView({ name: "bulk-phrases", textId }, t("phraseDeleted"));
}

function renderPhraseForm(textId, phraseId = null) {
  const text = findText(textId);
  if (!text) return renderHome();
  const phrase = phraseId ? text.phrases.find((item) => item.id === phraseId) : null;
  return `
    ${renderTopbar(phrase ? t("editPhrase") : t("newPhrase"), text.title, { name: "text", textId })}
    ${renderToast()}
    <form class="panel" onsubmit="savePhrase(event,'${textId}','${phraseId || ""}')">
      <div class="field">
        <label>${t("italianPhrase")}</label>
        <textarea name="italian" aria-label="${t("italianPhrase")}" required placeholder="Sono rimasto un po' indietro.">${escapeHtml(phrase?.italian || "")}</textarea>
      </div>
      <div class="field">
        <label>${t("meaning")}</label>
        <textarea name="russian" aria-label="${t("meaning")}" required placeholder="${t("meaningPhrasePlaceholder")}">${escapeHtml(phrase?.russian || "")}</textarea>
      </div>
      <div class="field">
        <label>${t("sourceContextLabel")}</label>
        <textarea name="context" aria-label="${t("sourceContextLabel")}" placeholder="${t("sourceContextPlaceholder")}">${escapeHtml(phrase?.context || "")}</textarea>
      </div>
      <div class="field">
        <label>${t("imageUrl")}</label>
        <input name="imageUrl" aria-label="${t("imageUrl")}" value="${escapeHtml(phrase?.imageUrl || "")}" placeholder="https://..." />
      </div>
      <div class="row">
        <div class="field">
          <label>${t("gapType")}</label>
          <select name="gapType" aria-label="${t("gapType")}">
            ${gapTypeOptions(phrase?.gapType)}
          </select>
        </div>
        <div class="field">
          <label>${t("gapAnswer")}</label>
          <input name="gapAnswer" aria-label="${t("gapAnswer")}" value="${escapeHtml(phrase?.gapAnswer || "")}" placeholder="${t("gapAnswerPlaceholder")}" />
        </div>
      </div>
      <div class="field">
        <label>${t("verbCondition")}</label>
        <input name="verbPrompt" aria-label="${t("verbCondition")}" value="${escapeHtml(phrase?.verbPrompt || "")}" placeholder="${t("verbConditionPlaceholder")}" />
      </div>
      <div class="field">
        <label>${t("correctVerbForm")}</label>
        <input name="verbAnswer" aria-label="${t("correctVerbForm")}" value="${escapeHtml(phrase?.verbAnswer || "")}" placeholder="${t("correctVerbPlaceholder")}" />
      </div>
      <button class="primary" type="submit">${t("savePhrase")}</button>
    </form>
  `;
}

function savePhrase(event, textId, phraseId) {
  event.preventDefault();
  const text = findText(textId);
  if (!text) return;
  const form = new FormData(event.currentTarget);
  const data = {
    italian: form.get("italian").trim(),
    russian: form.get("russian").trim(),
    context: form.get("context").trim(),
    imageUrl: form.get("imageUrl").trim(),
    gapType: normalizeGapType(form.get("gapType")),
    gapAnswer: form.get("gapAnswer").trim(),
    verbPrompt: form.get("verbPrompt").trim(),
    verbAnswer: form.get("verbAnswer").trim(),
  };
  if (phraseId) {
    text.phrases = text.phrases.map((phrase) => (phrase.id === phraseId ? { ...phrase, ...data } : phrase));
  } else {
    text.phrases.push({
      id: uid(),
      ...data,
      inPoop: false,
      stats: { correct: 0, wrong: 0, seen: 0, poopCorrect: 0 },
      createdAt: new Date().toISOString(),
    });
  }
  saveState();
  setView({ name: "text", textId }, phraseId ? t("phraseUpdated") : t("phraseSaved"));
}

function deletePhrase(textId, phraseId) {
  const text = findText(textId);
  if (!text) return;
  text.phrases = text.phrases.filter((phrase) => phrase.id !== phraseId);
  saveState();
  setView({ name: "text", textId }, t("phraseDeleted"));
}

function deleteText(textId) {
  const text = findText(textId);
  if (!text) return;
  if (!window.confirm(t("deleteConfirm", { title: text.title }))) return;
  state.texts = state.texts.filter((text) => text.id !== textId);
  state.activeTextId = state.texts[0]?.id || null;
  saveState();
  setView({ name: "home" }, t("textDeleted"));
}

function removeDuplicateTexts() {
  const seen = new Set();
  const before = state.texts.length;
  state.texts = state.texts.filter((text) => {
    const key = `${normalize(text.title)}|${normalize(text.content)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const removed = before - state.texts.length;
  state.activeTextId = state.texts[0]?.id || null;
  saveState();
  notify(removed ? t("duplicatesRemoved", { count: removed }) : t("noDuplicates"));
  render();
}

function createPhrasesFromText(textId) {
  const text = findText(textId);
  if (!text) return;
  const sentences = text.content
    .split(/(?<=[.!?])\s+|\n+/)
    .map((item) => item.trim())
    .filter((item) => item.length > 2);
  const existing = new Set(text.phrases.map((phrase) => normalize(phrase.italian)));
  let created = 0;
  sentences.forEach((sentence) => {
    if (existing.has(normalize(sentence))) return;
    const gap = autoGapAnswer({ italian: sentence });
    text.phrases.push({
      id: uid(),
      italian: sentence,
      russian: "",
      context: sentence,
      imageUrl: "",
      gapType: "word",
      gapAnswer: gap,
      verbPrompt: "",
      verbAnswer: "",
      inPoop: false,
      stats: { correct: 0, wrong: 0, seen: 0, poopCorrect: 0 },
      createdAt: new Date().toISOString(),
    });
    created += 1;
  });
  saveState();
  setView(
    { name: "bulk-phrases", textId },
    created ? t("createdPhrases", { count: created }) : t("noNewPhrases")
  );
}

function renderPoop() {
  const poop = poopPhrases();
  const cards = poop.length
    ? poop.map((phrase) => {
      const stats = phraseStats(phrase);
      return `
        <div class="phrase-card">
          <h3>${escapeHtml(phrase.italian)}</h3>
          <p>${escapeHtml(phrase.russian)}</p>
          <div class="phrase-actions">
            <span class="pill">${escapeHtml(phrase.textTitle)}</span>
            <span class="pill poop">${t("toClear", { count: stats.poopCorrect })}</span>
          </div>
        </div>
      `;
    }).join("")
    : `<div class="empty">${t("noReview")}</div>`;
  return `
    ${renderTopbar(t("reviewToday"), `${poop.length} ${t("weak")}`, { name: "home" })}
    ${renderToast()}
    <button class="primary" onclick="startPoopLesson()" ${poop.length ? "" : "disabled"}>${t("reviewWeakPhrases")}</button>
    <div class="stack" style="margin-top:18px">${cards}</div>
  `;
}

function renderSettings() {
  const themeButton = (value, label) => `
    <button class="theme-choice ${theme === value ? "active" : ""}" onclick="setTheme('${value}')" type="button">${label}</button>
  `;
  const languageButton = (value, label) => `
    <button class="theme-choice ${language === value ? "active" : ""}" onclick="setLanguage('${value}')" type="button">${label}</button>
  `;
  return `
    ${renderTopbar(t("settings"), t("themeStorage"), { name: "home" })}
    ${renderToast()}
    <section class="panel settings-panel">
      <p class="eyebrow">${t("appearance")}</p>
      <div class="theme-grid" role="group" aria-label="${t("theme")}">
        ${themeButton("system", t("system"))}
        ${themeButton("light", t("light"))}
        ${themeButton("dark", t("dark"))}
      </div>
    </section>
    <section class="panel settings-panel">
      <p class="eyebrow">${t("interfaceLanguage")}</p>
      <div class="theme-grid" role="group" aria-label="${t("interfaceLanguage")}">
        ${languageButton("en", t("english"))}
        ${languageButton("ru", t("russian"))}
      </div>
    </section>
    <section class="panel settings-panel">
      <p class="eyebrow">${t("storage")}</p>
      <h2>${escapeHtml(accountLabel())}</h2>
      <p class="hint">${escapeHtml(syncStatusText())}</p>
      <div class="stack" style="margin-top:16px">
        <button class="primary" onclick="manualSave()">${t("saveNow")}</button>
        ${account?.source === "google" ? "" : `<button class="secondary" onclick="connectGoogleDrive()">${t("syncGoogle")}</button>`}
      </div>
    </section>
  `;
}

function renderLesson() {
  const exercise = currentExercise();
  if (!lesson || !exercise) return `<main class="app">${renderHome()}</main>`;
  const progress = Math.round(((lesson.currentIndex + 1) / lesson.queue.length) * 100);
  return `
    <main class="lesson-shell">
      <div class="lesson-head">
        <button class="icon-btn" onclick="finishLessonEarly()">×</button>
        <div class="progress-track"><div class="progress-bar" style="width:${progress}%"></div></div>
        <span class="pill">${lesson.currentIndex + 1}/${lesson.queue.length}</span>
      </div>
      <button class="dont-know" onclick="${exercise.type === "flashcard" ? "answerFlashcard(false)" : "answerCurrent(false)"}">${t("iDontKnow")}</button>
      ${renderToast()}
      ${renderExercise(exercise)}
      ${renderBottomAction(exercise)}
      ${lesson.checked ? renderFeedback(exercise, lesson.checked.isCorrect) : ""}
    </main>
  `;
}

function renderExercise(exercise) {
  if (exercise.type === "it-ru") return renderChoiceExercise(t("chooseMeaning"), exercise.phrase.italian, getChoiceOptions(exercise, "russian"));
  if (exercise.type === "ru-it") return renderChoiceExercise(t("chooseItalian"), exercise.phrase.russian, getChoiceOptions(exercise, "italian"));
  if (exercise.type === "flashcard") return renderFlashcard(exercise);
  if (exercise.type === "order") return renderOrder(exercise);
  if (exercise.type === "verb") return renderGap(exercise, t("insertVerb"), exercise.answer);
  return renderGap(exercise, t("insertMissing", { type: gapTypeLabel(exercise.phrase.gapType) }), exercise.answer);
}

function makeOptions(exercise, field) {
  const phrase = exercise.phrase;
  const all = exercise.source === "poop" ? allPhrases() : (findText(exercise.textId)?.phrases || []);
  const wrong = sample(all.map((item) => item[field]).filter(Boolean), 3, [phrase[field]]);
  return shuffle([phrase[field], ...wrong]).map((value) => ({ value, correct: normalize(value) === normalize(phrase[field]) }));
}

function getChoiceOptions(exercise, field) {
  if (!exercise.options) exercise.options = makeOptions(exercise, field);
  return exercise.options;
}

function renderChoiceExercise(title, prompt, options) {
  return `
    <h1 class="lesson-title">${title}</h1>
    <div class="prompt small">${escapeHtml(prompt)}</div>
    <div class="answer-list">
      ${options.map((option, index) => `
        <button class="answer ${lesson.selected === index ? "selected" : ""}" onclick="lesson.selected=${index};render()">
          ${escapeHtml(option.value)}
        </button>
      `).join("")}
    </div>
  `;
}

function renderFlashcard(exercise) {
  const phrase = exercise.phrase;
  return `
    <h1 class="lesson-title">${t("memoryCard")}</h1>
    <div class="prompt">
      ${phrase.imageUrl ? `<img src="${escapeHtml(phrase.imageUrl)}" alt="">` : ""}
      ${escapeHtml(phrase.italian)}
    </div>
    <div class="panel" style="text-align:center;font-size:24px;line-height:1.3">${escapeHtml(phrase.russian)}</div>
    <div class="row" style="margin-top:24px">
      <button class="danger" onclick="answerFlashcard(false)">${t("needReview")}</button>
      <button class="primary" onclick="answerFlashcard(true)">${t("remembered")}</button>
    </div>
  `;
}

function renderOrder(exercise) {
  const words = tokenizeItalian(exercise.phrase.italian);
  const bank = shuffle(words.map((word, index) => ({ word, index })));
  exercise.bank = exercise.bank || bank;
  const picked = lesson.pickedWords || [];
  return `
    <h1 class="lesson-title">${t("buildPhrase")}</h1>
    <div class="prompt small">${escapeHtml(exercise.phrase.russian)}</div>
    <div class="word-slots">
      ${picked.length ? picked.map((item, idx) => `<button class="word-slot" onclick="lesson.pickedWords.splice(${idx},1);render()">${escapeHtml(item.word)}</button>`).join("") : `<div class="empty">${t("tapWords")}</div>`}
    </div>
    <div class="word-bank">
      ${exercise.bank.map((item) => {
        const isPicked = picked.some((pickedItem) => pickedItem.index === item.index);
        return isPicked
          ? `<span class="word ghost-slot">${escapeHtml(item.word)}</span>`
          : `<button class="word" onclick="lesson.pickedWords.push(${JSON.stringify(item).replaceAll('"', "&quot;")});render()">${escapeHtml(item.word)}</button>`;
      }).join("")}
    </div>
  `;
}

function renderGap(exercise, title, answer) {
  const phrase = exercise.phrase;
  const source = phrase.context || phrase.italian;
  const blanked = blankAnswer(source, answer);
  const allWords = allPhrases().flatMap((phraseItem) => significantWords(`${phraseItem.italian} ${phraseItem.gapAnswer || ""} ${phraseItem.verbAnswer || ""}`));
  if (!exercise.options) exercise.options = shuffle([answer, ...sample(allWords, 3, [answer])]).slice(0, 4);
  const options = exercise.options;
  return `
    <h1 class="lesson-title">${escapeHtml(title)}</h1>
    <div class="prompt small">${blanked}</div>
    ${phrase.verbPrompt ? `<div class="panel" style="text-align:center;margin-bottom:22px"><strong>${t("condition")}</strong> ${escapeHtml(phrase.verbPrompt)}</div>` : ""}
    <div class="word-bank">
      ${options.map((option, index) => `<button class="word ${lesson.selected === index ? "selected" : ""}" onclick="lesson.selected=${index};render()">${escapeHtml(option)}</button>`).join("")}
    </div>
  `;
}

function blankAnswer(source, answer) {
  if (!answer) return escapeHtml(source);
  const escaped = escapeHtml(source);
  const safe = answer.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(safe, "i");
  if (re.test(escaped)) return escaped.replace(re, `<span class="blank"></span>`);
  return `${escaped} <span class="blank"></span>`;
}

function renderBottomAction(exercise) {
  if (lesson.checked || exercise.type === "flashcard") return "";
  const disabled =
    (["it-ru", "ru-it", "gap", "verb"].includes(exercise.type) && lesson.selected === null) ||
    (exercise.type === "order" && (!lesson.pickedWords || lesson.pickedWords.length === 0));
  return `
    <div class="bottom-check">
      <button class="primary" onclick="checkExercise()" ${disabled ? "disabled" : ""}>${t("check")}</button>
    </div>
  `;
}

function checkExercise() {
  const exercise = currentExercise();
  if (!exercise) return;
  let isCorrect = false;
  if (exercise.type === "it-ru" || exercise.type === "ru-it") {
    const field = exercise.type === "it-ru" ? "russian" : "italian";
    const options = getChoiceOptions(exercise, field);
    isCorrect = options[lesson.selected]?.correct || false;
  } else if (exercise.type === "gap" || exercise.type === "verb") {
    const selected = exercise.options?.[lesson.selected] || "";
    isCorrect = normalize(selected) === normalize(exercise.answer);
  } else if (exercise.type === "order") {
    isCorrect = normalize(lesson.pickedWords.map((item) => item.word).join(" ")) === normalize(exercise.phrase.italian);
  }
  answerCurrent(isCorrect);
}

function renderFeedback(exercise, isCorrect) {
  const isNeutral = isCorrect === null;
  const feedbackTitle = isNeutral
    ? (lesson.checked?.remembered ? t("markedRemembered") : t("markedReview"))
    : (isCorrect ? t("correct") : t("reviewLater"));
  const feedbackStroke = isNeutral ? "#1774ed" : (isCorrect ? "#17bf72" : "#ef4757");
  return `
    <div class="overlay"></div>
    <section class="feedback">
      <svg class="feedback-meter" viewBox="0 0 120 70" aria-hidden="true">
        <path d="M18 54A45 45 0 0 1 102 54" fill="none" stroke="${feedbackStroke}" stroke-width="20" stroke-linecap="round"/>
        <path d="M60 54 L95 34" stroke="#5b3fd2" stroke-width="8" stroke-linecap="round"/>
      </svg>
      <h2>${feedbackTitle}</h2>
      <div class="feedback-card">
        <strong>${escapeHtml(exercise.phrase.italian)}</strong>
        <span>${escapeHtml(exercise.phrase.russian)}</span>
      </div>
      ${isNeutral ? `<p class="feedback-note">${t("feedbackNote")}</p>` : ""}
      <button class="primary" onclick="continueLesson()">${t("continue")}</button>
    </section>
  `;
}

function renderLessonResult(summary) {
  return `
    ${renderTopbar(t("result"), summary?.title || t("lesson"), { name: "home" })}
    <div class="metrics">
      <div class="metric"><strong>${summary?.correct || 0}</strong><span>${t("correctLower")}</span></div>
      <div class="metric"><strong>${summary?.wrong || 0}</strong><span>${t("weak")}</span></div>
      <div class="metric"><strong>${summary?.cards || 0}</strong><span>${t("cards")}</span></div>
    </div>
    <div class="stack">
      <button class="primary" onclick="setView({name:'home'})">${t("backHome")}</button>
      <button class="secondary" onclick="setView({name:'poop'})">${t("reviewWeakPhrases")}</button>
    </div>
  `;
}

function finishLessonEarly() {
  const textId = currentExercise()?.textId || state.activeTextId;
  lesson = null;
  setView(textId ? { name: "text", textId } : { name: "home" });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

render();
hydratePersistentState();
restoreGoogleSession();
registerServiceWorker();
