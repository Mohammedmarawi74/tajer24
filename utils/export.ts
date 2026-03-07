
import { toPng } from 'html-to-image';

export const exportAsPng = async (elementId: string, fileName: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    const dataUrl = await toPng(element, {
      quality: 1,
      pixelRatio: 2, // High resolution
    });
    
    const link = document.createElement('a');
    link.download = `${fileName}.png`;
    link.href = dataUrl;
    link.click();
  } catch (err) {
    console.error('Export failed:', err);
    alert('حدث خطأ أثناء تصدير الصورة');
  }
};
