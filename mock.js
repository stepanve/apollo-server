exports.mocks = {
  ID: () => 1,
  Post: () => ({
    title: 'テスト',
    content: 'テストです',
    posted_at: '2018-12-01T00:00:00Z',
  }),
  Comment: () => ({
    content: 'テストです(コメント)',
    posted_at: '2018-12-01T00:00:00Z',
  }),
};
