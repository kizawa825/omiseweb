import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // バリデーション
    if (!data.name || !data.email || !data.business || !data.message) {
      return new Response(JSON.stringify({ error: '必須項目が入力されていません' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // メール送信のためのデータを準備
    const emailData = {
      to: 'info@omiseweb.com',
      subject: `【お問い合わせ】${data.business} - ${data.name}様`,
      html: `
        <h2>お問い合わせ内容</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">お名前</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${data.name}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">メールアドレス</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${data.email}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">事業内容</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${data.business}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">ご希望の言語</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${data.language || '日本語'}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">ご興味のあるプラン</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${data.plan || '未選択'}</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; font-weight: bold;">お問い合わせ内容</td>
            <td style="border: 1px solid #ddd; padding: 8px; white-space: pre-wrap;">${data.message}</td>
          </tr>
        </table>
        <br>
        <p>送信日時: ${new Date().toLocaleString('ja-JP')}</p>
      `,
      text: `
お問い合わせ内容

お名前: ${data.name}
メールアドレス: ${data.email}
事業内容: ${data.business}
ご希望の言語: ${data.language || '日本語'}
ご興味のあるプラン: ${data.plan || '未選択'}

お問い合わせ内容:
${data.message}

送信日時: ${new Date().toLocaleString('ja-JP')}
      `
    };

    // 実際のメール送信処理
    // ここではNetlify FormsやSendGrid、Nodemailerなどを使用
    // 今回はコンソールログで代用
    console.log('Contact form submission:', emailData);

    // 成功レスポンス
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'サーバーエラーが発生しました' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
