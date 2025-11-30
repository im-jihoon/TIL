import * as z from 'zod';

const Player = z.object({
  username: z.string(),
  xp: z.number(),
});

type PlayerType = z.infer<typeof Player>;

// 에러 핸들링 방법 1
try {
  console.log(Player.parse({ username: 'billie', xp: '100' }));
} catch (error) {
  if (error instanceof z.ZodError) {
    console.log(error.issues);
  }
}

// 에러 핸들링 방법 2 - Safe Parse
const errorParsed = Player.safeParse({ username: 'billie', xp: 100 });

if (errorParsed.success) {
  console.log(errorParsed.data);
} else {
  console.log(errorParsed.error.issues);
}
