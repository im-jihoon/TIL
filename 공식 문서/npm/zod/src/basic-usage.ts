import * as z from 'zod';

const PlayerSchema = z.object({
  username: z.string(),
  xp: z.number(),
});

type Player = z.infer<typeof PlayerSchema>;

// 에러 핸들링 방법 1
try {
  console.log(PlayerSchema.parse({ username: 'NoHack', xp: '100' }));
} catch (error) {
  if (error instanceof z.ZodError) {
    console.log(error.issues);
  }
}

// 에러 핸들링 방법 2 - Safe Parse
const errorParsed = PlayerSchema.safeParse({ username: 'NoHack', xp: 100 });

if (errorParsed.success) {
  console.log(errorParsed.data);
} else {
  console.log(errorParsed.error.issues);
}

const player1: Player = {
  username: 'NoHack',
  xp: 100,
};
