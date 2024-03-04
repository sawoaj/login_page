import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputWithLabel = () => {
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="grid w-full max-w-sm items-center gap-1.5">
				<Label htmlFor="">Email</Label>
				<Input type="email" id="email" placeholder="Email" />
				<Input type="password" id="password" placeholder="password" />
				<Button>Log in</Button>
			</div>
		</div>
	);
};

export default InputWithLabel;
