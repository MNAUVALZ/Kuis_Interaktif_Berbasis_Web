/**
 * Menghitung level user berdasarkan total poin.
 * Rumus: setiap 100 poin = naik 1 level.
 */
export function calculateLevel(totalPoints) {
  return Math.floor(totalPoints / 100) + 1;
}

/**
 * Menghitung persentase progress menuju level berikutnya.
 */
export function calculateProgress(totalPoints) {
  return (totalPoints % 100);
}

/**
 * Menghitung poin yang diperoleh dari skor kuis.
 * correctCount = jumlah jawaban benar
 * totalQuestions = total soal
 * basePoints = poin dasar per kuis (default 100)
 */
export function calculatePoints(correctCount, totalQuestions, basePoints = 100) {
  if (totalQuestions === 0) return 0;
  return Math.round((correctCount / totalQuestions) * basePoints);
}
