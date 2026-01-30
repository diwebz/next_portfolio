import type { BilingualChatResponses } from '@/types';

export const chatResponses: BilingualChatResponses = {
  en: {
    greeting: {
      message: "Hi! Thanks for visiting my portfolio. What brings you here today?",
      quickReplies: [
        { label: 'Job opportunity', value: 'job' },
        { label: 'Collaboration', value: 'collaboration' },
        { label: 'Just browsing', value: 'browsing' },
      ],
    },
    job: {
      message: "That's great! I'm currently open to new opportunities. Would you like to connect on LINE to discuss further?",
      quickReplies: [
        { label: 'Connect on LINE', value: 'line_handoff' },
        { label: 'Tell me about the role first', value: 'more_info' },
        { label: 'Send email instead', value: 'email' },
      ],
    },
    collaboration: {
      message: "Sounds interesting! What kind of collaboration are you thinking about?",
      quickReplies: [
        { label: 'Freelance project', value: 'freelance' },
        { label: 'Open source', value: 'opensource' },
        { label: 'Something else', value: 'other' },
      ],
    },
    browsing: {
      message: "No problem! Feel free to explore my portfolio. Let me know if you have any questions about my work or experience.",
      quickReplies: [
        { label: 'Tell me about your skills', value: 'skills' },
        { label: 'Show me your projects', value: 'projects' },
      ],
    },
    freelance: {
      message: "I occasionally take on freelance projects depending on the scope and timeline. Let's discuss the details on LINE?",
      quickReplies: [
        { label: 'Connect on LINE', value: 'line_handoff' },
        { label: 'Send email instead', value: 'email' },
      ],
    },
    opensource: {
      message: "I love contributing to open source! Feel free to check out my GitHub profile or reach out with your project details.",
      quickReplies: [
        { label: 'View GitHub', value: 'github' },
        { label: 'Connect on LINE', value: 'line_handoff' },
      ],
    },
    more_info: {
      message: "Sure! I'd be happy to hear more about the role. What kind of position is it, and what technologies are involved?",
    },
    skills: {
      message: "I specialize in full-stack development with React, Next.js, Laravel, and PHP. I have experience with databases like MySQL and PostgreSQL, and I'm comfortable with Docker and AWS for deployment.",
      quickReplies: [
        { label: 'View all skills', value: 'view_skills' },
        { label: 'Ask something else', value: 'greeting' },
      ],
    },
    projects: {
      message: "I've worked on various projects including e-commerce platforms, task management apps, and RESTful APIs. You can see them in my Projects section!",
      quickReplies: [
        { label: 'View projects', value: 'view_projects' },
        { label: 'Ask something else', value: 'greeting' },
      ],
    },
    email: {
      message: "You can reach me at hello@johndoe.dev. I typically respond within 24 hours!",
    },
    line_handoff: {
      message: "Great! Click the button below to connect with me on LINE.",
    },
    default: {
      message: "Thanks for your message! For detailed discussions, let's connect on LINE or you can email me directly.",
      quickReplies: [
        { label: 'Connect on LINE', value: 'line_handoff' },
        { label: 'Send email', value: 'email' },
        { label: 'Start over', value: 'greeting' },
      ],
    },
  },
  ja: {
    greeting: {
      message: 'こんにちは！ポートフォリオをご覧いただきありがとうございます。本日はどのようなご用件でしょうか？',
      quickReplies: [
        { label: '採用について', value: 'job' },
        { label: '協業について', value: 'collaboration' },
        { label: '閲覧のみ', value: 'browsing' },
      ],
    },
    job: {
      message: 'ありがとうございます！現在、新しい機会を探しています。詳しくお話しするためにLINEで連絡しますか？',
      quickReplies: [
        { label: 'LINEで連絡', value: 'line_handoff' },
        { label: '先に求人について教えて', value: 'more_info' },
        { label: 'メールで連絡', value: 'email' },
      ],
    },
    collaboration: {
      message: '面白そうですね！どのような協業をお考えですか？',
      quickReplies: [
        { label: 'フリーランス案件', value: 'freelance' },
        { label: 'オープンソース', value: 'opensource' },
        { label: 'その他', value: 'other' },
      ],
    },
    browsing: {
      message: 'わかりました！ご自由にポートフォリオをご覧ください。私の仕事や経験についてご質問があればお気軽にどうぞ。',
      quickReplies: [
        { label: 'スキルについて教えて', value: 'skills' },
        { label: 'プロジェクトを見せて', value: 'projects' },
      ],
    },
    freelance: {
      message: 'スコープとスケジュールに応じて、フリーランス案件を時々受けています。詳細をLINEで話しましょうか？',
      quickReplies: [
        { label: 'LINEで連絡', value: 'line_handoff' },
        { label: 'メールで連絡', value: 'email' },
      ],
    },
    opensource: {
      message: 'オープンソースへの貢献が大好きです！GitHubプロフィールをご確認いただくか、プロジェクトの詳細をお聞かせください。',
      quickReplies: [
        { label: 'GitHubを見る', value: 'github' },
        { label: 'LINEで連絡', value: 'line_handoff' },
      ],
    },
    more_info: {
      message: 'もちろんです！求人について詳しくお聞かせください。どのようなポジションで、どの技術が関係していますか？',
    },
    skills: {
      message: 'React、Next.js、Laravel、PHPを使ったフルスタック開発を専門としています。MySQLやPostgreSQLなどのデータベース経験があり、DockerやAWSでのデプロイにも対応できます。',
      quickReplies: [
        { label: 'すべてのスキルを見る', value: 'view_skills' },
        { label: '他の質問', value: 'greeting' },
      ],
    },
    projects: {
      message: 'ECサイト、タスク管理アプリ、RESTful APIなど、様々なプロジェクトに携わってきました。プロジェクトセクションでご覧いただけます！',
      quickReplies: [
        { label: 'プロジェクトを見る', value: 'view_projects' },
        { label: '他の質問', value: 'greeting' },
      ],
    },
    email: {
      message: 'hello@johndoe.dev までご連絡ください。通常24時間以内に返信いたします！',
    },
    line_handoff: {
      message: '素晴らしいです！下のボタンをクリックしてLINEで連絡してください。',
    },
    default: {
      message: 'メッセージありがとうございます！詳しい話はLINEで連絡するか、直接メールをお送りください。',
      quickReplies: [
        { label: 'LINEで連絡', value: 'line_handoff' },
        { label: 'メールを送る', value: 'email' },
        { label: '最初から', value: 'greeting' },
      ],
    },
  },
};

export function getChatResponse(key: string, locale: 'en' | 'ja') {
  const responses = chatResponses[locale];
  return responses[key] || responses.default;
}
