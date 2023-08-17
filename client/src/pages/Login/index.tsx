import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import Header from '@/layout/HomeLayout/Header';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const Login = () => {
  const formSchema = z.object({
    email: z.string().email({ message: 'Invalid Email' }),
    password: z.string().min(1, { message: 'Password is required' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <>
      <Header />
      <div className='container relative max-w-lg h-[calc(100vh-4.5rem)] flex flex-col justify-center'>
        <Card>
          <CardHeader>
            <CardTitle>Login Into Account</CardTitle>
            <CardDescription>Enter you email and password below</CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 grid'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='email'>Email</FormLabel>
                      <FormControl>
                        <Input id='email' placeholder='m@example.com' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='password'>Password</FormLabel>
                      <FormControl>
                        <Input id='password' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type='submit'>Login</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;
