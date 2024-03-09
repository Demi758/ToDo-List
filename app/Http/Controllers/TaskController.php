<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function getTask()
    {
        return response()->json(Task::all());
    }

    public function addTask(Request $request)
    {
        $task = Task::create($request->all());
        return response($task, 201);
    }

    public function updateTask(Request $request, $id)
    {
        $task = Task::find($id);
        if(is_null($task))
        {
            return response()->json(['message' => 'Task not found'], 404);
        }
        $task->update($request->all());
        return response($task, 201);
    }

    public function deleteTask(Request $request, $id)
    {
        $task = Task::find($id);
        if(is_null($task))
        {
            return response()->json(['message' => 'Task not found'], 404);
        }
        $task->delete();
        return response()->json(null, 204);
    }

    public function getTaskById(Request $request, $id)
    {
        $task = Task::find($id);
        if(is_null($task))
        {
            return response()->json(['message' => 'Task not found'], 404);
        }
        return response()->json($task::find($id), 200);
    }
}
